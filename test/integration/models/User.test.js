const assert = require('assert')

describe('UserModel', () => {
  describe('#find()', () => {
    it('should check find function', (done) => {
      User.find()
        .then((results) => {
          assert.equal(results.length, 5)
          done()
        })
        .catch(done)
    })
  })
})
