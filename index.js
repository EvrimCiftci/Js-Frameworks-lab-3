// Importing the Express module
const express = require('express');

// Importing the groupNames variable from data.js file
const { groupNames } = require('./data');

// Creating an Express application
const app = express();

// Defining the port number for the server
const port = 3000;

// Route to handle GET requests to the root endpoint '/'
app.get('/', (req, res) => {
  // Constructing HTML content to display group names
  let html = '<h1>Group Names</h1><ul>';
  // Iterating over the groupNames array to create list items
  groupNames.forEach(name => {
    html += `<li>${name}</li>`;
  });
  html += '</ul>';
  // Sending the HTML content as the response
  res.send(html);
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
