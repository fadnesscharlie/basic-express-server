'use strict';

// 3rd party dependancies (modules)
const express = require('express');
const app = express();

// Our own modules
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// Global Middleware
app.use(express.json());
app.use(logger)

// ### Our routes ###

// Create a GET route

app.get('/person', validator, (req,res) => {
  try {
    const person = {
      name: req.query.name,
    }
    res.status(200).json(person)
  } catch(err) {
    res.status(500).send(err)
  }
})

app.get('/', logger, (req, res) => {
  res.status(200).send('Success')
})

app.use('*', notFoundHandler)
app.use(validator)
app.use(errorHandler)
app.use(logger)

module.exports = {
  server: app,
  start: port => {
    if (!port) {
      throw new Error('Missing Port');
    }
    app.listen(port, () => {
      console.log(`Listening on Port: ${port}`)
    })
  },
}

// Create a GET route that uses Query Parameters

// Create a GET route that uses URL parameters

// Create a POST route

// Error handling
