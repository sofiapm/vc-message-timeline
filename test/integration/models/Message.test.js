const assert = require('assert')

describe('MessageModel', () => {
  describe('#create()', () => {
    it('should create new message', (done) => {
      const text = 'some dummy text'

      User.find({})
        .then((users) => {
          Message.create({
            author: users[0].id,
            text
          }).then((result) => {
            assert.equal(result.author, users[0].id)
            assert.equal(result.text, text)
            done()
          })
        })
        .catch(done)
    })
  })
})
