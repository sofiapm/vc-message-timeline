/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

const path = require('path')
const dummyUsers = require(path.resolve('seeds/users.json'))

module.exports.bootstrap = (cb) => {
  User.count().exec((err, count) => {
    if (err) {
      sails.log.error(err)
      return cb(err)
    }

    // Already has data
    if (count > 0) {
      return cb()
    }

    // Create dummy users
    User.create(dummyUsers).exec(cb)
  })
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  // cb();
}
