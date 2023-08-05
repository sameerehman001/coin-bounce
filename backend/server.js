const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');

const app = express()
// const port = 5000;

dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, console.log(`Example app listening on port ${PORT}`));