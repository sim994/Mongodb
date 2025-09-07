const express = require('express')

const app = express();

app.set("view engine","ejs")

const port = 3030

app.listen(port,()=>{
    console.log("server are started");
})

const path = require("path");

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"));
});