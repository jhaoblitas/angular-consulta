let express = require('express');
let path = require('path');
let http = require('http');
let socketIO = require('socket.io');

let app = express();
let port = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

let server = http.Server(app);
let io = socketIO(server);

connections = [];
io.on('connection', (socket) => {
    //Log whenever a user connects
    connections.push(socket);
    console.log('users connected: %s', connections.length);

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('users connected: %s', connections.length);
    });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on('message', (message) => {
        console.log("Message Received=>: " + message);
        io.emit('message', { type: 'new-message', text: message });
    });

});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});