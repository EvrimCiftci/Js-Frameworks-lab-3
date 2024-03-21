// Importing the Express module
const express = require('express');

// Importing the jsonData variable from data.js file
const { jsonData } = require('./data');

// Creating an Express application
const app = express();

// Defining the port number for the server
const port = 3000;

// Route to handle GET requests to '/studies' endpoint
app.get('/studies', (req, res) => {
  // Sending the JSON data stored in jsonData as the response
  res.json(jsonData);
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
