'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).send({
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR ${error.message}`,
    error: 500
  })
}
