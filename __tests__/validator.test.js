'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
// const { it, expect } = require('@jest/globals');
const mockRequest = supertest(server);

describe('web server logger', () => {
  it('should respond with a 200', () => {
    return mockRequest
    .get('/person')
    .then( results => {
      expect(results.status).toBe(200)
    })
  })

  it('should respond with a 200 if name is in the parameter', () => {
    return mockRequest
    .get('/person?name')
    .then(results => {
      expect(results.text).toBe('{"name":""}')
    })
  })

  it('should return GET for a get request', () => {
    return mockRequest
    .get('/person')
    .then(results => {
      expect(results.req.method).toBe('GET')
    })
  })


})
