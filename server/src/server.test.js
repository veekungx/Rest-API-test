const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('GET /status', () => {
    it('should return OK', async () => {
      const response = await request(server).get('/status');
      expect(response.text).to.equal('OK');
    });
  });
});