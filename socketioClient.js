import { io } from "socket.io-client";

const client = io("http://localhost:4000");
client.on("welcome", (message) => {
  console.log(`hola im coming from the server ${message}`);
});

client.emit("chat", "Coming from the client");
