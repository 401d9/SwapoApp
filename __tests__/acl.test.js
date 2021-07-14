'use strict';

process.env.SECRET = 'toes';

const server = require('../src/server.js').server;
const supergoose = require('@code-fellows/supergoose');
const bearer = require('../src/auth/middleware/bearer.js');
const { expect } = require('@jest/globals');
const mockRequest = supergoose(server);

let roles = {
  user: { username: 'user', password: 'pass' },
  user2: { username: '', password: 'pass' },
  user3: { username: 'wafa', password: '' },
  admin: { username: 'admin', password: 'pass', role: 'admin' },
};

describe('\=========================== " HAPPY PATH :) " ===========================/', ()=>{

  describe('access control', () => {

    describe('user', () => {
      it('should successfully create a new user', async () => {
        const res = await mockRequest.post('/signup').send(roles.user);
        const userObject = res.body;
  
        expect(res.status).toBe(201);
        expect(userObject.username).toEqual(roles.user.username);
      });
      it('should successfully create a new user with role admin', async () => {
        const res = await mockRequest.post('/signup').send(roles.admin);
        const userObject = res.body;
  
        expect(res.status).toBe(201);
        expect(userObject.username).toEqual(roles.admin.username);
      });
  
      it('should successfully signin with basic auth', async () => {
        const res = await mockRequest.post('/signin').auth(roles.user.username, roles.user.password);
  
        const userObject = res.body;
  
        expect(res.status).toBe(200);
        expect(userObject.token).toBeDefined();
        expect(userObject.username).toEqual(roles.user.username);
      });
    });
  
  });



});

describe('\=========================== " EDGE CASES :( " ===========================/', ()=>{
  describe('user', () => {
    it('Should Send Status (500) When User Does Not Enter "username" In /Signup', async () => {
      const res = await mockRequest.post('/signup').send(roles.user2);
      const userObject = res.body;
      expect(res.status).toBe(500);
      expect(userObject.token).toBeUndefined();
    });
    it('Should Send Status (500) When User Does Not Enter "password" In /Signup', async () => {
      const res = await mockRequest.post('/signup').send(roles.user3);
      const userObject = res.body;
      expect(res.status).toBe(500);
      expect(userObject.token).toBeUndefined();
    });
    it('basic fails with known user and wrong password ', async () => {

      const response = await mockRequest.post('/signin')
        .auth('admin', 'xyz');
      const userObject = response.body;

      expect(response.status).toBe(403);
      expect(userObject.user).not.toBeDefined();
      expect(userObject.token).not.toBeDefined();

    });

    it('basic fails with unknown user', async () => {

      const response = await mockRequest.post('/signin')
        .auth('nobody', 'xyz');
      const userObject = response.body;

      expect(response.status).toBe(403);
      expect(userObject.user).not.toBeDefined();
      expect(userObject.token).not.toBeDefined();

    });


  });
});


