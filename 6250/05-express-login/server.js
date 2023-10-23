const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid').v4;
const PORT = 3000;

const app = express();

const session = require('./session');
const homeWeb = require('./home-web');

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    const username = session.getUsername(sid);
    const isLoggedIn = session.isLoggedIn(sid);
    const secretWord = session.getSecretWord(username);

    if (isLoggedIn && secretWord) {
        res.send(homeWeb.dataPage(username, secretWord));
    }
    else if (isLoggedIn) {
        res.send(homeWeb.dataPageNoWord(username));
    } else {
        res.send(homeWeb.homePage());
    }
});

app.get('/logout', (req, res) => {
    const sid = req.cookies.sid;
    res.clearCookie('sid');
    session.deleteSession(sid);
    res.redirect('/');
})

app.post('/session', (req, res) => {
    const username = req.body.username.trim();
    if (username === 'dog' || !username) {
        res.status(403).send('BAD DOG, NO BISCUIT!');
        return;
    }

    const sid = uuid();
    session.addUsername(sid, username);
    res.cookie('sid', sid);
    res.redirect('/');
});

app.post('/secret-word', (req, res) => {
    const secretWord = req.body.secretWord.trim();
    const sid = req.cookies.sid;
    const username = session.getUsername(sid);
    session.changeSecretWord(username, secretWord);
    res.redirect('/');
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));