'use strict';
const ws = new WebSocket('ws://localhost:8081');

ws.onopen = () => {
    console.log('connection established');
};

ws.onclose = (event) => {
    if (event.wasClean) {
        console.log('connection closed');
    } else {
        console.log('net error - connection lost');
    }
    console.log(`ERROR CODE: ${event.code} REASON: ${event.reason}`);
};

ws.onmessage = (event) => {
    const log = document.getElementsByClassName('log')[0];
    log.innerHTML += `${event.data}<br>`;
};

ws.onerror = (error) => {
    console.log(`ERROR: ${error.mesage}`);
};

const send = document.getElementsByClassName('send')[0];
const text = document.getElementsByClassName('message')[0];

send.addEventListener('click', (e) => {
    e.preventDefault();
    ws.send(text.value);
    text.value = '';
});