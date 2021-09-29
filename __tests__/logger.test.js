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

  // it('should respond with a 500 if no name in query', () => {
  //   return mockRequest
  //   .get('/person')
  //   .then(results => {
  //     expect(results.query).toBe('')
  //   })
  // })

})
