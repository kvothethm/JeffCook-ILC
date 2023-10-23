"use strict";

const words = require("./words");
const wordGame = require("./words-game");
const sessions = require("./session");

const gameWeb = {
    loginPage: function () {
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Wordle-ish Login</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body class="login__page">
                <header class="header">
                    <h1>Welcome to Wordle-ish!</h1>
                    <p>(It's nothing like Wordle)</p>
                </header>
                <main class="login__form">
                    <h2>Please login with your Username below</h2>
                    <p>You may only use letters in your username.</p>
                    <form action="/session" method="POST">
                        <label>Username 
                        <input class="username" value="" 
                        placeholder="Enter Username" name="username" /></label>
                        <button class="login">Submit</button>
                    </form>                    
                </main>
                <footer>
                    
                </footer>
            </body>
        </html>
        `
    },

    gamePage: function (username, words, game) {
        return `
        <!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Wordle-ish</title>
    <link rel="stylesheet" href="styles.css" />    
</head>

<body class="game__page">
    <header class="header">
        <h1>Wordle-ish</h1>
    </header>
    <main>        
        <h2>Hello, ${username}!</h2>
        <p>Welcome to Wordle-ish, the game where the computer chooses a five-letter-word and you try to guess it.</p>
        <p>The list of possible words is:</p>
        ${gameWeb.getWordList(words)}        
        ${gameWeb.getGuessList(game)}
        ${gameWeb.getGuessNumber(game)}
        ${gameWeb.getLastGuessStatus(game)}
        ${gameWeb.getGameMessage(game, username)}
        </div>
        <div class="button__wrapper"
        <p class="loser__message">Give up? You can start a new game or log out below.</p>
        <div class="button__container">
        <form action="/new-game" method="POST">            
            <input class="new-game" type="hidden" value="newGame" />
            <button class="new-game-button">New Game</button>
        </form>
        <form action="/logout" method="GET">
            <input class="logout" type="hidden" value="logout" />
            <button class="logout-button">Logout</button>
        </form>
        </div>
    </main>
</body>

</html>
        `
    },
    //displays the list of valid words
    getWordList: function (words) {
        return `<ul class="word__list">` + words.map((word) => `
        <li class="guessable__word>${word}</li>
        `).join('') +
            `</ul>`;
    },
    //displays the list of guesses
    getGuessList: function (game) {
        if (!game.guesses.length) {
            return '';
        }

        return `
        <p>Here is a list of words you have already guessed and the number of matches:</p>
        <ol class="guess__list">` + game.guesses.map((guess) => `
        <li class="guessed__word">${guess.guess}: ${guess.matches}</li>
        `).join('') +
            `</ol>`;
    },

    getLastGuessStatus: function (game) {
        //Condition for 0 guesses
        if (!game.guesses.length) {
            return `
            <p>Type your guess below. Only letters will be accepted.</p>
                
                <form action="/guess" method="POST">
                    <label>Guess
                    <input class="guess" value="" 
                    placeholder="Enter a Guess!" name="guess" /></label>
                    <button class="guess">Submit</button>            
                </form>`
        }
        //Condition for a continuing game
        else if (!game.hasWon.hasWon) {
            return `<p>Your last guess "${game.guesses.at(-1).guess}" matched ${game.guesses.at(-1).matches} letters with the answer! Keep guessing!</p>
            <p>Type your guess below. Only letters will be accepted.</p>
                
                <form action="/guess" method="POST">
                    <label>Guess
                    <input class="guess" value="" 
                    placeholder="Enter a Guess!" name="guess" /></label>
                    <button class="guess">Submit</button>            
                </form>
        `}
        //Condition for winning the game
        else if (game.hasWon.hasWon) {
            return `<p>Your last guess "${game.guesses.at(-1).guess}" matched ${game.guesses.at(-1).matches} letters and matches! You win!</p>`
        }
    },

    getGuessNumber: function (game) {
        if (game.guessCount == 1) {
            return `<p>You have made 1 guess!</p>`
        }
        return `<p>You have made ${game.guessCount} guesses!</p>`
    },

    getGameMessage: function (game, username) {
        if (game.guessStatus === 'won') {
            return `<div class="win__message""><p>Congratulations, ${username}, you won in ${game.guessCount} guesses! 
            Use the New Game button below to try another word!</p></div>`;

        }
        else if (game.guessStatus === 'invalid') {
            return `<div class="error__message"><p>Your last guess was not a valid guess. 
            Please make sure you are only using words from the list at the top of the page. You will also receive this message
            if you are guessing a word you have already guessed! Guess again!</p></div>`

        }
        else if (game.guessStatus === 'game on') {
            return '';
        }
    }
};
module.exports = gameWeb;