const setupSocket = (server) => {
    const io = require('socket.io')(server, {
        cors: { origin: '*' },
    });

    io.on('connection', (socket) => {
        console.log('WebSocket connected');
    });

    return io;
};

module.exports = setupSocket;
