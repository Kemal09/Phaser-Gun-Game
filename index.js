const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const cors = require('cors');

io.on('connection', socket => {
  
  socket.on('ping', callback => {
    
    callback()
    
  })
  
})

app.use(express.static(__dirname+'/public'));

server.listen(3000, () => {
  console.log('\nServer started\n')
})
