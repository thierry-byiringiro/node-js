import fs from "fs/promises";
import http from "http";
const data = await fs.readFile("test.txt", "utf8");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-type": "text/json",
    });
    res.end(data);
  }

  if(req.method === 'POST'){
    res.writeHead(200,{
      "Content-type": "text/json",
    })
    let body = '';
    req.on('data',(chunks) => {
        body += chunks.toString();
    })
    req.on('end',() => {
        fs.appendFile('test.txt',body,'utf8')
    })
    res.end(body)

  }
});

server.listen(2000, () => console.log("server running on port 2000"));
