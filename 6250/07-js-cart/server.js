'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

console.log("Server starting...");

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));