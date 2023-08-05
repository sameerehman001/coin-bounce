const express = require('express');
const dbConnect = require('./database/index');

const app = express()
const port = 5000;

dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, console.log(`Example app listening on port ${port}`));