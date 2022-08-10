const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
// const notes = require('./db/db.json')
const fs = require('fs')

// PORT for heroku and localhost
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", api);

app.use(express.static("public"));

// app.get('/api/notes', (req,res) => {

// fs.readFile('./db/db.json', 'utf8', function(err, data){
//   console.log(data);
//   res.json(JSON.parse(data))
// });
// });
// app.post('/api/notes', (req,res) => {
  
//   fs.writeFile('./db/db.json', notes, function(err, data){
//     console.log(data);
//     res.json(JSON.parse(data))
//   });
// });

// HTML ROUTES:
// notes route
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// homepage route
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
// REMEMBER to turn off maintenance mode!
