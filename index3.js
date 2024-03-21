const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Dummy data for CRUD operations
let data = [];

// Create operation
app.post('/create', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.json({ message: 'Item created successfully', item: newItem });
});

// Read operation
app.get('/read', (req, res) => {
  res.json(data);
});

// Update operation
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  data[id] = newData;
  res.json({ message: 'Item updated successfully', item: newData });
});

// Delete operation
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const deletedItem = data.splice(id, 1);
  res.json({ message: 'Item deleted successfully', item: deletedItem });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
