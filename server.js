//import packages
const exp = require('constants');
const express = require('express');
const emoji = require('console-emoji-log');
const emojii = require('node-emoji');
const app = express();

//constants
const path = require('path');
const port = 8080;
//const cors = require('cors');

//functions
//app.use(cors());

app.use(express.static('src'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,  'src/index.html'))
})

app.listen(port, () => {
    console.log(`THE LINK :=> http://localhost:${port}, \u{1F680}`)
  })
  