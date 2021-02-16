import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import {PORT, HOST, HELLO_MESSAGE } from './serverConfig';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/hello', (req, res) => {
    if (HELLO_MESSAGE === undefined) {
        res.status(StatusCodes.NOT_FOUND).send('404 '+ReasonPhrases.NOT_FOUND)
        return;
    }
    res.send(HELLO_MESSAGE)
});

app.get('/repeat-my-query', (req, res) => {
    if (req.query.message === undefined) {
        res.status(StatusCodes.BAD_REQUEST).send('400 '+ReasonPhrases.BAD_REQUEST);
        return;
    }
    res.send('Response send to client: '+req.query.message);
    return req.query.message;
})

app.get('/repeat-my-param/:message', (req, res) => {
    const param = req.params.message
    res.send('Response send to client: '+param);
    return param;
})

app.post('/repeat-my-body',  (req, res) => {
    if (req.body === undefined) {
        res.status(StatusCodes.BAD_REQUEST).send('400 '+ReasonPhrases.BAD_REQUEST);
        return;
    }
    res.send(req.body);
    return req.body;
})

app.get('/repeat-my-header', (req, res) => {
    var head = req.header('X-Message');
    if (head === undefined) {
        res.status(StatusCodes.BAD_REQUEST).send('400 '+ReasonPhrases.BAD_REQUEST);
        return;
    }
    res.send('header: '+head);
    return head;
})

app.get('/repeat-my-cookie', (req, res) => {
    var cookie = req.cookies;
    if (cookie === undefined) {
        res.status(StatusCodes.BAD_REQUEST).send('400 '+ReasonPhrases.BAD_REQUEST);
        return;
    }
    res.send(cookie);
    return cookie
})

app.get('/health', (req, res) => {
    res.status(StatusCodes.OK).send('200 '+ReasonPhrases.OK);
})

app.get('/repeat-all-my-queries', (req, res) => {
    const keys = Object.keys(req.query);
    if (!keys.length) {
        res.status(StatusCodes.BAD_REQUEST).send('400 '+ReasonPhrases.BAD_REQUEST);
        return;
    }
    let tab: Object[] = [];
    keys.forEach(item => {
        tab.push({ key : item, value : req.query[item] as string })
    })
    res.status(StatusCodes.OK).send(tab);
    return tab;
})

function isPalindrome(str: string) : boolean {
    let tmp = str.toLowerCase().trim();
    if (!tmp.length || tmp.length == 1)
        return true;
    if (tmp.charAt(0).localeCompare(tmp.charAt(tmp.length - 1)) == 0) {
        let tmp2 = tmp.slice(1, tmp.length - 1)
        return isPalindrome(tmp2);
    }
    return false;
}

app.post('/are-these-palindromes',  (req, res) => {
    const palin = Object.assign(req.body);
    if (!palin.length) {
        res.status(StatusCodes.BAD_REQUEST).send('400 '+ReasonPhrases.BAD_REQUEST);
        return;
    }
    let tab: Object[] = [];
    palin.forEach((item: string) => {
        tab.push({ input : item, result : isPalindrome(item) })
    })
    res.status(StatusCodes.OK).send(tab);
    return tab;
})
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
