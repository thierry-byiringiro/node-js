import fs from 'fs'

const fileStream = fs.createReadStream("text.txt",{highWaterMark: 30})

fileStream.on("open",() => console.log("stream opened"));
fileStream.on("data",(data) => {
    console.log("--------------------")
    console.log(data.toString())
});

fileStream.on("end",()=>console.log("loading chunks done"))
fileStream.on("error",(err) => console.log(err))
