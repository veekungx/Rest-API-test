const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');
const { UserModel } = require('./models/user');
const generateToken = require('./helpers/generate-token');


const createNewUser = async (email = 'test@email.com', password = '123456') => {
  const newUser = new UserModel({ email, password });
  const accessToken = generateToken(newUser._id);
  newUser.tokens.push(accessToken);
  await newUser.save();
  return newUser;
}

describe('server', () => {
  beforeEach(async () => {
    await UserModel.remove({});
  });

  describe('GET /status', () => {
    it('should return OK', async () => {
      const { statusCode, text } = await request(server)
        .get('/status');
      expect(statusCode).to.equal(200);
      expect(text).to.equal('OK');
    });
  });

  describe('GET /users/me', () => {
    describe('200', () => {
      it('should return user if authenticated', async () => {
        const newUser = await createNewUser();
        const token = newUser.tokens[0].token;

        const { statusCode, body } = await request(server)
          .get('/users/me')
          .set('Authorization', `Bearer ${token}`)
        expect(statusCode).to.equal(200);
        const user = await UserModel.findOne();
        expect(body._id).to.equal(user._id.toString());
      });
    });

    describe('401', () => {
      it('should return 401 when Authorization header not given', async () => {
        const { statusCode, body, error } = await request(server)
          .get('/users/me')

        expect(statusCode).to.equal(401);
      });

      it('should return error when Authorization header invalid', async () => {
        const { statusCode, body } = await request(server)
          .get('/users/me')
          .set('Authorization', `Bearer`)

        expect(statusCode).to.equal(401);
      });

      it('should return error when user not found', async () => {
        const { statusCode, body } = await request(server)
          .get('/users/me')
          .set('Authorization', `Bearer 123456`)

        expect(statusCode).to.equal(401);
      });
    });
  });

  describe('POST /users', () => {
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
        await createNewUser();
        const { statusCode, error } = await request(server)
          .post('/users')
          .send({ email: 'test@email.com', password: '123456' });

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

  describe('POST /users/login', () => {

    describe('200', () => {
      it('should return user _id and token when success', async () => {
        const newUser = await createNewUser();
        const { statusCode, body } = await request(server)
          .post('/users/login')
          .send({ email: 'test@email.com', password: '123456' })

        expect(statusCode).to.equal(200);
        expect(body._id).to.equal(newUser._id.toString());
      });
    });
    describe('401', () => {
      it('should return 401 when email not found', async () => {
        const { statusCode, body } = await request(server)
          .post('/users/login')
          .send({ email: 'notexist@email.com', password: '123456' })

        expect(statusCode).to.equal(401);
      });

      it('should return 401 when password incorrect', async () => {
        const { statusCode, body } = await request(server)
          .post('/users/login')
          .send({ email: 'test@email.com', password: '12345678' })

        expect(statusCode).to.equal(401);
      });
    })
  });
});