const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');
const { UserModel } = require('./models/user');

describe('server', () => {
  describe('GET /status', () => {
    it('should return OK', async () => {
      const { statusCode, text } = await request(server)
        .get('/status');
      expect(statusCode).to.equal(200);
      expect(text).to.equal('OK');
    });
  });

  describe('POST /users', () => {
    beforeEach(async () => {
      await UserModel.remove({});
    });

    it('should create new user', async () => {
      const { statusCode, body } = await request(server)
        .post('/users')
        .send({ email: 'test@mail.com', password: '123456' })
      expect(statusCode).to.equal(200);
    });

    it('should trim email', async () => {
      const { statusCode, body } = await request(server)
        .post('/users')
        .send({ email: '     test@mail.com     ', password: '123456' })
      const user = await UserModel.findOne();
      expect(user.email).to.equal('test@mail.com');
    });

    it('should return error when email already exists', async () => {
      await request(server)
        .post('/users')
        .send({ email: 'test@mail.com', password: '123456' });

      const { statusCode, error } = await request(server)
        .post('/users')
        .send({ email: 'test@mail.com', password: '123456' });

      expect(statusCode).to.equal(400);
      expect(error.text).to.contain('duplicate key');
    });

    it('should return error when password length less than 6', async () => {
      const { statusCode, error } = await request(server)
        .post('/users')
        .send({ email: 'test@mail.com', password: '12345' });

      expect(statusCode).to.equal(400);
      expect(error.text).to.contain('minimum allowed length (6)');
    });

  })
});