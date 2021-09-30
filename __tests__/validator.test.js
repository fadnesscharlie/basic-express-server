'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server logger', () => {

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


})
