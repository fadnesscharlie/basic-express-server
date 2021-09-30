'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server logger', () => {

  it('should respond with a 404 on a bad route', () => {
    return mockRequest
    .get('/*')
    .then( results => {
      expect(results.status).toBe(404)
    })
  })
  
  it('should return the JSON format with the correct name', () => {
    return mockRequest
    .get('/person?name=Charlie')
    .then(results => {
      expect(results.text).toBe('{"name":"Charlie"}')
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

})

