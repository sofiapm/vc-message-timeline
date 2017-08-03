const assert = require('assert')

describe('UserModel', () => {
  describe('#find()', () => {
    it('should return all users', (done) => {
      User.find()
        .then((results) => {
          assert.equal(results.length, 5)
          done()
        })
        .catch(done)
    })
  })
  describe('#create()', () => {
    it('should create new user', (done) => {
      const firstName = 'Dummy'
      const lastName = 'Test'
      const email = 'test.dummy@volutpat.edu'

      User.create({
        firstName,
        lastName,
        email
      }).then((result) => {
        assert.equal(result.firstName, firstName)
        assert.equal(result.lastName, lastName)
        assert.equal(result.email, email)

        User.find()
          .then((results) => {
            assert.equal(results.length, 6)
            done()
          }).catch(done)
      }).catch(done)
    })
  })
})
