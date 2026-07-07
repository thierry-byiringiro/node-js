import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("connection started");
  socket.emit("welcome", "hello");

  socket.on("chat", (message) => {
    console.log(message);
  });

  socket.on("disconnected", () => console.log("connection terminated"));
});

httpServer.listen(4000, () => console.log("server running on port 4000"));
