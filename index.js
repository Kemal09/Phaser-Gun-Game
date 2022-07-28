const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

app.get("/", (req, res) => res.send("Okey"))

server.listen(3000, "0.0.0.0", () => console.log("Server started"))
