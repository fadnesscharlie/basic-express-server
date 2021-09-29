'use strict';

// All middleware has access to request
// Lets simply log out some data

// This is a route middleware

module.exports = (req, res, next) => {
  console.log('Request Query', req.query)
  next();
}
