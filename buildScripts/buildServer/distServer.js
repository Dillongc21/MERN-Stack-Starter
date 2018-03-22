// require modules
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

// variables
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  //hard coded for simplicity, pretend this hits a real database
  res.json([
    {"id": 1, "firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 1, "firstName":"Dillon","lastName":"Christensen","email":"dillongc21@gmail.com"},
    {"id": 1, "firstName":"Jane","lastName":"Doe","email":"janeldoe@gmail.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});