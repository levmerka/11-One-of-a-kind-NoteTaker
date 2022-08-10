
const router = require('express').Router();
// const uuid = require('../helpers/uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const notes = require('../db/db.json')


// router.get('/notes', (req, res) => {

//     .getNotes()
//     .then((notes) => {
//       return res.json(notes);
//     })
//     .catch((err) => res.status(500).json(err));
// });

router.get('/api/notes', (req, res) =>
  readFromFile(notes).then((data) => res.json(JSON.parse(data)))
);
// POST Route for new note
router.post('/api/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      // note_id: uuid(),
    };

    readAndAppend(newNote, notes);

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in creating note');
  }
});

// router.delete('/notes/:noteId', (req, res) => {
//   const { noteId } = req.params;

//   readFromFile(notes).then((rawData) => {
//       let data = JSON.parse(rawData);
//       let index = 0;
//       for (; index < data.length; index++) {
//           const element = data[index];
//           console.log(element);
//           if (element.id == noteId) {
//               break;
//           }
//       }
//       data.splice(index, 1)
//       writeToFile(notes, data);
//       res.json(`Note ${noteId} deleted`);
//   })
// });



module.exports = router;