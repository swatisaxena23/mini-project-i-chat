// node Server which will handle socket.io 
const io = require('socket.io')(2300)
const users = {};
io.on('connection', socket =>{
    socket.on('new-user-joined',name=>{
        users[socket.id]= name;
        socketIO.broadcast.emit('user-joined', name)
    });
socket.on('send', message=>{
    socket.broadcast.emit('recieve', {message: message, name: user[socket.id]})
});

})