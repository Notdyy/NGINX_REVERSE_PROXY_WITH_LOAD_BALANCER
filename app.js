const express = require('express'); //เรียกใช้ express ผ่าน require
const os = require('os');
const app = express();

app.use("/", async(_req, res) => {
    res.json({message: "Response from ", hostname: `${os.hostname()}`})
})

app.listen(3000, ()=>console.log("Server listening on port 3000"))
