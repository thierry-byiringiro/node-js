import { WebSocketServer, WebSocket } from "ws";
import express from 'express'

const server = new WebSocketServer({ port: 3000 });
let recievedMessage;
server.on("connection", (socket) => {
    console.log("Connection created");

    socket.on("message",(message) => {
        console.log(`This message is from client: ${message.toString()}`)
        recievedMessage = message.toString();

        server.clients.forEach((client)=>{
            if(client.readyState=== WebSocket.OPEN && client !== socket){
                client.send(recievedMessage)
            }
        })
    })
    socket.on("close",() => {
        console.log('connection closed')
    })
})