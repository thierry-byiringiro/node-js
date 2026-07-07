import  WebSocket  from "ws";

const client = new WebSocket("ws://localhost:3000");

client.on("open", () => {
    console.log("client connection created");
    client.send("Como tu sabes sobre almuerzar en la restaurante Me either")
});

client.on("message", (message) => {
  console.log(`Message from server : ${message.toString()}`);
});



client.on("close",() => console.log('client connection closed'))
