const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function greetAll(names) {
  if (!Array.isArray(names)) {
    throw new Error('Input must be an array of names');
  }
  return names.map(name => greet(name));
}

// API endpoints
app.get('/', (req, res) => {
  res.send(greet('CI/CD World'));
});

app.get('/add', (req, res) => {
  res.send(`2 + 3 = ${add(2, 3)}`);
});

app.get('/greetAll', (req, res) => {
  const greetings = greetAll(['Alice', 'Bob', 'Charlie']);
  res.send(greetings.join(', '));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { greet, add, greetAll, app };
