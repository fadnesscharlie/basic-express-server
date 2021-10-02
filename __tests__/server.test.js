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

  it('should respond with a 200 if name is in the parameter', () => {
    const data = {
      name: 'name'
    }
    return mockRequest
    .get('/person').query(data)
    .then(results => {
      expect(results.status).toBe(200)
      expect(results.body).toEqual(data)
    })
  })

  it('should return GET for a get request and a 404 for a bad route', () => {
    return mockRequest
    .get('/*')
    .then(results => {
      expect(results.req.method).toBe('GET')
      expect(results.status).toBe(404)
    })
  })

  it('should respond with a 500 if no name in query', () => {
    const data = {
      name: 'Joe'
    }
    return mockRequest
    .get('/person')
    .then(results => {
      expect(results.body.query.value).toBeFalsy();
      expect(results.status).toBe(500)
    })
  })

  // Async Await Method
  // it('should respond with a 404 invalid method', async () => {
  //   const response = await mockRequest.get('/foobar');
  //   expect(response.status).toBe(404)
  // })
})
