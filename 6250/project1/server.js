"use-strict";

const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid').v4;
const PORT = 3000;

const app = express();

const words = require('./words');
const gameWeb = require('./game-web');
const session = require('./session');
const wordGame = require('./words-game');

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//Calls login page if the user is not logged on upon navigating to the page.
app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    const username = session.getUsername(sid);
    const isLoggedIn = session.isLoggedIn(sid);

    if (isLoggedIn) {
        res.send(gameWeb.gamePage(username, words, wordGame.games[username]));
    } else {
        res.send(gameWeb.loginPage());
    }
});

//Removes sid and cookie, but leaves user and game data in tact
app.get('/logout', (req, res) => {
    const sid = req.cookies.sid;
    res.clearCookie('sid');
    session.deleteSession(sid);
    res.redirect('/');
})

//Checks username for validity (alphabet only) and pairs it with the generated sid, 
//then creates a new game if the username is not already associated with game data
app.post('/session', (req, res) => {
    const username = req.body.username.trim();
    const allowList = session.allowList;
    const isValid = session.isValid(allowList, username);
    if (!isValid || !username) {
        res.status(403).send('Error: Invalid characters in username. Please navigate back to try again.');
        return;
    }

    const sid = uuid();
    session.addUsername(sid, username);

    if (!wordGame.hasGame(username)) {
        wordGame.createNewGame(username);
    }

    res.cookie('sid', sid);
    res.redirect('/');
});

//Checks first to see if the user is logged in and sends the login page if not. Then checks the submitted word
//for validity (valid words are 1. on the words list 2. have not already been guessed)
app.post('/guess', (req, res) => {
    const guess = req.body.guess.trim();
    const sid = req.cookies.sid;
    const username = session.getUsername(sid);
    const guessCount = wordGame.games[username].guessCount;
    const isLoggedIn = session.isLoggedIn(sid);
    const randomWord = wordGame.getRandomWord(username);
    const isCorrect = wordGame.isCorrect(randomWord, guess);
    const isValidWord = wordGame.isValidWord(guess, words, username);

    if (!isLoggedIn) {
        res.send(gameWeb.loginPage());
    }

    else if (!isValidWord || !guess) {
        wordGame.updateGuessStatusInvalid(username);
        res.redirect('/');
    }

    else if (isCorrect) {
        wordGame.addGuess(guess, username, guessCount);
        wordGame.updateGuessStatusWon(username);
        res.redirect('/');

    }

    else if (isValidWord) {
        wordGame.addGuess(guess, username, guessCount);
        wordGame.updateGuessStatusValid(username);
        res.redirect('/');
    }


});

//Checks to ensure the user is logged in and sends the login page if not. Calls function to start a new game and redirects the page.
app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;
    const username = session.getUsername(sid);
    const isLoggedIn = session.isLoggedIn(sid);

    if (!isLoggedIn) {
        res.send(gameWeb.loginPage());
    }

    wordGame.createNewGame(username);
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));