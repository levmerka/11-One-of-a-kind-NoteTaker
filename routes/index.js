const express = require('express');
const router = require('express').Router();
// Import our modular routers 
const notesRouter = require('./html');


const app = express();

app.use('/notes', notesRouter);
router.get ('')
router.post()
router.delete ()
module.exports = app;
