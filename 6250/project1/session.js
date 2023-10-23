"use strict";

//object to hold session data
const sessions = {};

//string of allowed letters in the username
const allowList = `
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
`.split('');

//reads the username from the sessions object format is sid:{username: 'username'}
const getUsername = (sid) => {
    const username = sessions[sid]?.username;
    return username;
};

//Uses getUsername to check if the sessions object has a sid and a username
const isLoggedIn = (sid) => {
    return !!getUsername(sid);
};

//deletes the sid, called on logout
const deleteSession = (sid) => {
    delete sessions[sid];
};

//adds username to the sessions array of objects
const addUsername = (sid, username) => {
    sessions[sid] = { username };
};

//checks the username against the alphabet for invalid characters
const isValid = (allowList, username) => {
    for (const char of username) {
        if (!allowList.includes(char)) {
            return false;
        }
    } return true;
};

module.exports = {
    addUsername,
    getUsername,
    isLoggedIn,
    deleteSession,
    isValid,
    allowList,
};