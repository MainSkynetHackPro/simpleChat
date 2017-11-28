import WebSocket from 'ws';
import RequestLogger from "./utils/requestLogger";

let clients = {};

let sServer = new WebSocket.Server({
    port: 8081
});

sServer.on('connection', (ws) => {
    let id = Math.random();
    clients[id] = ws;

    RequestLogger.ws('new connection ' + id);

    ws.on('message', (message) => {
        RequestLogger.wsInfo('new message');
        for (let key in clients) {
            clients[key].send(message);
        }
    });

    ws.on('close', () => {
        RequestLogger.wsError('connection closed ' + id);
        delete clients[id];
    });
});

