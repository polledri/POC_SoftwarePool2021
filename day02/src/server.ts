import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import {PORT, HOST, HELLO_MESSAGE } from './serverConfig';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/hello', (req, res) => {
    if (HELLO_MESSAGE === undefined) {
        res.status(404).send('No Message Defined')
        return;
    }
    res.send(HELLO_MESSAGE)
});
app.get('/repeat-my-query', (req, res) => {
    if (req.query.message === undefined) {
        res.status(400).send('Bad Status');
        return;
    }
    res.send('Response send to client: '+req.query.message);
    return req.query.message;
})
app.get('/repeat-my-param/:message', (req, res) => {
    res.send('Response send to client: '+req.params.message);
})
app.post('/repeat-my-body',  (req, res) => {
    if (req.body === undefined) {
        res.status(400).send('Bad Status');
        return;
    }
    res.send(req.body);
    return req.body;
})
app.get('/repeat-my-header', (req, res) => {
    var head = req.header('X-Message');
    if (head === undefined) {
        res.status(400).send('Bad Status');
        return;
    }
    res.send('header: '+head);
    return head;
})
app.get('/repeat-my-cookie', (req, res) => {
    var cookie = req.cookies;
    if (cookie === undefined) {
        res.status(400).send('Bad Status');
        return;
    }
    res.send(cookie);
    return cookie
})
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
