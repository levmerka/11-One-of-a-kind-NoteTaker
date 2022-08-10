const express = require('express');
const router = require('express').Router();
// Import our modular routers 
const notesRouter = require('./html');


const app = express();

app.use('/api', notesRouter);

// router.get ('/api/notes')
// router.post('/api/notes')
// router.delete ('')

module.exports = app;
