import RequestLogger from "./utils/requestLogger";

const path = require("path");
const express = require('express');
const app = express();
require('./websocket');

app.get('/', function (req, res) {
    RequestLogger.httpLog(req);
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.use('/static', express.static(__dirname + '/static'));

app.use(function (req, res, next) {
    RequestLogger.http404Log(req);
    res.status(404).send('Sorry cant find that!');
});

app.listen(8080);
