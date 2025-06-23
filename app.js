const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    connectionStateRecovery:{}
}); 

app.use(express.static("public"));

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

io.on('connection',socket=>{
    socket.on('chat-message',msg => {
        io.emit('chat-message',msg);
    });
});

server.listen(3000,()=>console.log("listening"));