var request = require('supertest')
const path = require('path')
const dummyUsers = require(path.resolve('test/fixtures/users.json'))

describe('UserController', () => {
  describe('#login()', () => {
    it('should redirect to /timeline', (done) => {
      request(sails.hooks.http.app)
        .post('/users/login')
        .send({ email: dummyUsers[0].email })
        .expect(302)
        .expect('location', '/timeline', done)
    })
  })
})
