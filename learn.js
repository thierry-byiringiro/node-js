import fs from "fs";

const fileSt = fs.createReadStream("text.txt",{highWaterMark : 100});

fileSt.on("data",(data) => {
    console.log("------------------------")
    console.log(data.toString());
})

fileSt.on("error",(err) => {
    console.log(err)
})

fileSt.on("end",() => {
    console.log("Reading chunks finished")
})