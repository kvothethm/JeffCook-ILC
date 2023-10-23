const chatWeb = {
  chatPage: function (chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          <header>
            <h1>TwitTalk</h1>
          </header>
          <div id="chat-app">            
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function (chat) {
    return `<ol class="messages">` + chat.messages.map((message) => `
              <li>
                <div class="message">
                  <div class="sender-info">
                    <img class="avatar" alt="avatar of ${message.sender}" src="images/avatar-${message.sender.toLowerCase()}.jpg"/>
                    <span class="username">${message.sender}</span>
                  </div>
                  <p class="message-text">${message.text}</p>
                </div>
              </li>        
              `).join('') +
      `</ol>`;
  },

  getUserList: function (chat) {
    return `<ul class="users">
            <p class="user-title">Friends</p>` +
      Object.values(chat.users).map(user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
      `</ul>`;
  },

  getOutgoing: function (chat) {
    return `<div class="outgoing">
      <form action="/chat" method="POST">
        <input class="sender" type="hidden" value="Amit" name="username"/> 
        <input class="to-send" value="" placeholder="Enter a Message Here" name="text"/>
        <button type="submit">Send</button>
      </form>`
  }
};
module.exports = chatWeb;
