const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We Have a New Connection.......');

    socket.on('join', ({ name, room }, callback) => {
        console.log(name,room);

        const error = true;

        if(error){
            callback({ error: 'error' });
        }
    });

    socket.on('disconnect', () => {
        console.log('User Logout..');
    })
});

app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
});

//50 18