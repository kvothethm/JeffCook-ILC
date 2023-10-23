const sessions = {};
const secretWords = {};

const getUsername = (sid) => {
    const username = sessions[sid]?.username;
    return username;
};

const isLoggedIn = (sid) => {
    return !!getUsername(sid);  //bang bang, forces true or false
};

const getSecretWord = (username) => {
    const secretWord = secretWords[username];
    return secretWord;
};

const changeSecretWord = (username, secretWord) => {
    secretWords[username] = secretWord;
    return secretWord;
}

const deleteSession = (sid) => {
    delete sessions[sid];
};

const addUsername = (sid, username) => {
    sessions[sid] = { username };
};

module.exports = {
    addUsername,
    getUsername,
    isLoggedIn,
    deleteSession,
    getSecretWord,
    changeSecretWord,
};