'use strict';

// All middleware has access to request
// Lets simply log out some data

// This is a route middleware

module.exports = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next(`Name Required`);
  } else { next(); }
}
