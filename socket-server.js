const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 6001 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        // Process the message and broadcast to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

console.log('WebSocket server is running on ws://localhost:6001');
