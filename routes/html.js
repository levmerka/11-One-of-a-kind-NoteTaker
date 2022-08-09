
const router = require('express').Router();
const path = require('path');
const uuid = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/', (req, res) =>
  readFromFile('').then((data) => res.json(JSON.parse(data)))
);
// POST Route for new note
router.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in creating note');
  }
});


module.exports = router;