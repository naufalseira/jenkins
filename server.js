'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// route for /
const app = express();
app.get('/', (req, res) => {
  res.send('This is a demo page for Jenkins CI/CD pipeline');
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
app.get('/api/healthcheck', (req, res) => {
  const healthcheck = {
    id: 1,
    name: 'Health Check',
    status: 'OK',
  };
  res.json(healthcheck);
});

// route for /api/data
app.get('/api/data', (req, res) => {
  const data = {
    id: 2,
    name: 'Sample Data'
  };
  res.json(data);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});