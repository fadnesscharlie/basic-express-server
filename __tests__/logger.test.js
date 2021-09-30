'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
// const { it, expect } = require('@jest/globals');
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
    return mockRequest
    .get('/person?name')
    .then(results => {
      console.log(results)
      expect(results.req.path).toBe('/person?name')
    })
  })

})

