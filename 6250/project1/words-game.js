"use strict";

//brings the words.js word list here
const words = require('./words');
const sessions = require('./session');

//games object holds all of the game data
const games = {};

//creates the games object and adds the randomly selected word and username to it
const createNewGame = (username) => {
    const randomWord = words[(Math.floor(Math.random() * words.length))];
    games[username] = {
        randomWord: randomWord,
        guesses: [],
        guessCount: 0,
        hasWon: false,
        guessStatus: 'game on',
    };
    console.log(`User ${username} has started a new game with the random word ${randomWord}.`);

};

//checks the guessed word against the words list
const isValidWord = (guess, words, username) => {

    const isGuessed = games[username].guesses.find((item) => item.guess === guess);

    if (!words.includes(guess)) {
        return false;
    }
    else if (isGuessed) {
        return false;
    }
    return true;
};

//adds guess and number of matches to the games object and updates the status
const addGuess = (guess, username, guessCount) => {
    const randomWord = getRandomWord(username);
    const matches = compareWords(randomWord, guess);
    const hasWon = isCorrect(randomWord, guess);

    games[username].guesses.push({ guess: guess, matches: matches });
    games[username].hasWon = { hasWon };
    games[username].guessCount = guessCount + 1;
};

//updates the guessValid variable in the games object to export to the view for message display
const updateGuessStatusValid = (username) => {
    games[username].guessStatus = 'game on';
};

const updateGuessStatusInvalid = (username) => {
    games[username].guessStatus = 'invalid';
};

const updateGuessStatusWon = (username) => {
    games[username].guessStatus = 'won';
}

//checks the guessed word against the randomly chosen word for equality
const isCorrect = (word, guess) => {
    if (word === guess) {
        return true;
    }
    return false;
};
//checks the guessed word against the randomly chosen word and returns the number of letters
//they both have regardless of position
const compareWords = (word, guess) => {
    const wordLower = word.toLowerCase();
    let inCommon = 0;

    for (const compChar of wordLower) {
        if (guess.includes(compChar)) {
            inCommon++;
            guess = guess.replace(compChar, "");
        }
    } return inCommon;
};

//checks the games object for the randomly chose word and returns it
const getRandomWord = (username) => {
    const randomWord = games[username].randomWord;
    return randomWord;
};

//checks to see if the current user currently has a game in progress
const hasGame = (username) => {
    if (games[username]) {
        return true;
    }
    return false;
};

module.exports = {
    games,
    hasGame,
    createNewGame,
    getRandomWord,
    addGuess,
    isValidWord,
    isCorrect,
    compareWords,
    updateGuessStatusInvalid,
    updateGuessStatusValid,
    updateGuessStatusWon,
}