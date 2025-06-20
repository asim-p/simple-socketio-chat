const express = require('express');
const http = require('http');
const  {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);

//Sockets
const io = new Server(server); 

io.on('connection',socket=>{
    socket.on('chat-message',(message) => {
        io.emit('chat-message',message);
    })
})

app.use(express.static("public"));

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

server.listen(3000,()=>console.log("listening"));