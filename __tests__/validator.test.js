'use strict';

// const { server } = require('../src/server.js');
// const supertest = require('supertest');
// const mockRequest = supertest(server);
const validator = require('../src/middleware/validator');

// Testing Middleware


describe('Name validator tests', () => {
  
  it('should rejext requests withtout a name', () => {
    let req = { query: {} };
    let res = { };
  
    // spy on next method
    let next = jest.fn();
  
    validator(req, res, next)

    // Has to match validator error message
    expect(next).toHaveBeenCalledWith('Name Required')
  })
})

