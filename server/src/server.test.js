const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('GET /status', () => {
    it('should return OK', async () => {
      const { statusCode, text } = await request(server).get('/status');
      expect(statusCode).to.equal(200);
      expect(text).to.equal('OK');
    });
  });
});