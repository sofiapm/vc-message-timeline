var request = require('supertest')

describe('MessageController', () => {
  describe('#create()', () => {
    it('should create message', (done) => {
      User.find({}).exec(function (err, users) {

        request(sails.hooks.http.app)
          .post('/api/message')
          .send({ author: users[0].id, text: 'sometext' })
          .expect(201)
          .end(done)
      })
    })
  })
})
