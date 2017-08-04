/**
 * User.js
 *
 * @description :: User base information: first name, last name.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // e.g. John

    firstName: {
      type: 'string',
      required: true
    },

    // e.g. Doe

    lastName: {
      type: 'string',
      required: true
    },

    // e.g. john.doe@email.com

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    /**
     * Attribute methods
     */

    getFullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },

  // Transform email to lowercase before save user

  beforeCreate: function (values, cb) {
    values.email = values.email.toLowerCase()
    return cb()
  }
}
