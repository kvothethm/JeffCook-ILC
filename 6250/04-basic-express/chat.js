const users = { // Yes, an object!  Keep it as one
  "Amit": "Amit", // The keys let you check to see if the user is logged in
  "Bao": "Bao",    // the values don't really matter, here we reuse the username, but it could be `true`
};

const messages = [
  {
    sender: "Amit",
    text: "You up?",
  },
  {
    sender: "Bao",
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  }
];

//Gets the sender and text information from req.body and sets them to a new object which it then pushes to the
//messages array.
function addMessage({ sender, text }) {
  newMessage = { sender, text };
  messages.push(newMessage);
};

const chat = {
  users,
  messages,
  addMessage,
};

module.exports = chat;