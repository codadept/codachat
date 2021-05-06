const io = require('socket.io')(8000);

const users = {}

io.on('connection', socket =>{
    socket.on("new-user-joined",(data)=>{
        users[socket.id] = data.nameInput;
        data.userId = socket.id;
        socket.broadcast.emit("user-joined",data);
    })

    socket.on("send",data=>{
        socket.broadcast.emit("receive",{name:users[socket.id],gender:data.gender,message:data.message,userId:socket.id});
    })

    socket.on("disconnect",message=>{
        socket.broadcast.emit("left",{name:users[socket.id],userId:socket.id});
        delete users[socket.id];
    })
})