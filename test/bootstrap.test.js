const sails = require('sails')
const path = require('path')
const dummyUsers = require(path.resolve('test/fixtures/users.json'))

before(function (done) {
  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000)

  sails.lift({}, function (err) {
    if (err) return done(err)

    // Add users
    User.create(dummyUsers).exec(done)

    // done(err, sails)
  })
})

after(function (done) {
  // here you can clear fixtures, etc.
  sails.lower(done)
})
