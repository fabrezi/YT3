//import packages
const exp = require('constants');
const express = require('express');
const app = express();

//constants
const path = require('path');
const port = 8080;
//const cors = require('cors');

//functions
app.use(cors());

app.use(express.static('src'));

