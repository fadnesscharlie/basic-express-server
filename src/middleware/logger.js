'use strict';

// All middleware has access to request
// Lets simply log out some data

// This is a application middleware

module.exports = (req, res, next) => {
  console.log('Request', 
  req.method, 
  req.path,
  req.query,
  )
  next();
}
