'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  // note: making the it: "it('should --')"
  it('should respond with a 404 invalid route', () => {
    return mockRequest
    .get('/foo')
    .then( results => {
      expect (results.status).toBe(404);
    })
  })

  // Async Await Method
  // it('should respond with a 404 invalid method', async () => {
  //   const response = await mockRequest.get('/foobar');
  //   expect(response.status).toBe(404)
  // })
})
