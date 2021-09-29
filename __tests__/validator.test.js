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

  it('should respond with a 500 if no name in query', () => {
    return mockRequest
    .get('/person?name=')
    .then(results => {
      // console.log(results)
      expect(results.text).toBe('{"name":""}')
    })
  })

  it('should return the JSON format with the correct name', () => {
    return mockRequest
    .get('/person?name=Charlie')
    .then(results => {
      // console.log(results)
      expect(results.text).toBe('{"name":"Charlie"}')
    })
  })


})
