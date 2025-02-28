'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// route for /
const app = express();
app.get('/', (req, res) => {
  res.send('This is a demo page for Jenkins CI/CD pipeline - v9.0');
});

// route for /about
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// route for /contact
app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

// route for /api/data
app.get('/api/data', (req, res) => {
  const data = {
    id: 1,
    name: 'Sample Data'
  };
  res.json(data);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});