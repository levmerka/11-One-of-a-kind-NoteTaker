const express = require('express');
// Import our modular routers 
const notesRouter = require('./html');


const app = express();

app.use('/notes', notesRouter);


module.exports = app;
