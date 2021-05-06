const io = require('socket.io')(8000);

const users = {}

io.on('connection', socket =>{
    socket.on("new-user-joined",(data)=>{
        users[socket.id] = data.nameInput;
        socket.broadcast.emit("user-joined",data);
    })

    socket.on("send",message=>{
        socket.broadcast.emit("receive",{name:users[socket.id],message:message})
    })

    socket.on("disconnect",message=>{
        socket.broadcast.emit("left",users[socket.id]);
        delete users[socket.id];
    })
})