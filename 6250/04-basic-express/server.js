const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat'); // "chat" holds all the non-web logic for managing users/messages
const chatWeb = require('./chat-web'); // "chat-web" holds the templates for the generated HTML

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(chatWeb.chatPage(chat));
});

//Grabs the message from the page, makes an object called req.body with sender and text keys, calls addMessage
//to push the new message object to the messages array, and redirects the page.
app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const { username, text } = req.body;
  const sender = req.body.username;
  chat.addMessage({ sender, text });
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));