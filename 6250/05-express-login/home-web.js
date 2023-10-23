const homeWeb = {
    homePage: function () {
        return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Homepage</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <header>
                    <h1>Some Kind of Crazy Login Page</h1>
                </header>
                <main>
                    <h2>Please login with your Username below</h2>
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

    dataPage: function (username, secretWord) {
        return `
        <!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>${username}'s Homepage</title>
    <link rel="stylesheet" href="/styles.css" />
</head>

<body>
    <header>
        <h1>Hello, ${username}</h1>
    </header>
    <main>
        <p>Your Secret Word is ${secretWord}. You may change your Secret Word below.</p>
        <form action="/secret-word" method="POST">
            <label>New Secret Word
            <input class="word" value="" name="secretWord" /></label>
            <button class="new-word">Submit</button>            
        </form>
        <form action="/logout" method="GET">
        <input class="logout" type="hidden" value="logout" />
        <button class="logout-button">Logout</button>
    </form>
    </main>
</body>

</html>
        `
    },

    dataPageNoWord: function (username, secretWord) {
        return `
        <!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>${username}'s Homepage</title>
    <link rel="stylesheet" href="/styles.css" />
</head>

<body>
    <header>
        <h1>Hello, ${username}</h1>
    </header>
    <main>
        <p>Your Secret Word is has not yet been set. Please set a Secret Word.</p>
        <form action="/secret-word" method="POST">
            <label>New Secret Word
            <input class="word" value="" name="secretWord" /></label>
            <button class="new-word">Submit</button>
        </form>
        <form action="/logout" method="GET">
            <input class="logout" type="hidden" value="logout" />
            <button class="logout-button">Logout</button>
        </form>
    </main>
</body>

</html>
        `
    }
}
module.exports = homeWeb;