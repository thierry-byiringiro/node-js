import WebSocket from "ws";

const client2 = new WebSocket("ws://localhost:3000");
client2.on("open",() => {
    console.log("connection created");
    client2.send("haha , i see you my man DO you??")
})

client2.on("message",(message) => {
    console.log(`${message.toString()}`)
})