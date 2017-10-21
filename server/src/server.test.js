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

  // describe('GET /users/me', () => {
  //   const { statusCode, body } = await request(server)
  //     .post('/users')
  //     .send({ email: 'test@mail.com', password: '123456' });
  // });

  describe('POST /users', () => {
    beforeEach(async () => {
      await UserModel.remove({});
    });

    describe('200', () => {
      it('should create new user', async () => {
        const { statusCode, body } = await request(server)
          .post('/users')
          .send({ email: 'test@mail.com', password: '123456' })
        const user = await UserModel.findOne();
        expect(statusCode).to.equal(200);
        expect(user).to.not.null;
      });

      it('should trim email', async () => {
        const { statusCode, body } = await request(server)
          .post('/users')
          .send({ email: '     test@mail.com     ', password: '123456' })
        const user = await UserModel.findOne();
        expect(statusCode).to.equal(200);
        expect(user.email).to.equal('test@mail.com');
      });

      it('should have token when create success', async () => {
        const { statusCode, body } = await request(server)
          .post('/users')
          .send({ email: 'test@mail.com', password: '123456' })

        const user = await UserModel.findOne();
        expect(statusCode).to.equal(200);
        expect(user.tokens).to.have.lengthOf(1);
      });


      it('should not return password field', async () => {
        const { statusCode, body } = await request(server)
          .post('/users')
          .send({ email: 'test@mail.com', password: '123456' })
        expect(statusCode).to.equal(200);
        expect(body.password).to.be.undefined;
      });

      it('should not return tokens field', async () => {
        const { statusCode, body } = await request(server)
          .post('/users')
          .send({ email: 'test@mail.com', password: '123456' })
        expect(statusCode).to.equal(200);
        expect(body.tokens).to.be.undefined;
      });

      it('should hash password', async () => {
        const { statusCode, body } = await request(server)
          .post('/users')
          .send({ email: 'test@mail.com', password: '123456' })
        expect(statusCode).to.equal(200);
        const user = await UserModel.findOne();
        expect(user.password).not.equal('123456');
      });
    });

    describe('400', () => {
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

      it('should return error when email is invalid', async () => {
        const { statusCode, error } = await request(server)
          .post('/users')
          .send({ email: 'test', password: '123456' });
        expect(statusCode).to.equal(400);
        expect(error.text).to.contain('not a valid email');
      });
    });
  })
});