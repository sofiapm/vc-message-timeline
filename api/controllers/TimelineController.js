/**
 * TimelineController
 *
 * @description :: Server-side logic for managing timelines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `TimelineController.find()`
   */

  messages: function (req, res) {
    Message.find({
      skip: req.query.skip || 0,
      limit: req.query.limit || 10,
      sort: 'createdAt DESC'
    })
      .populate('author')
      .exec((err, messages) => {
        if (!err) {
          res.json(messages)
        } else {
          return res.json(err)
        }
      })
  },

  comments: function (req, res) {
    Comment.find({
      where: { message: req.query.message },
      skip: req.query.skip || 0,
      limit: req.query.limit || 10,
      sort: 'createdAt DESC'
    })
      .populate('author')
      .exec((err, comments) => {
        if (!err) {
          res.json(comments)
        } else {
          return res.json(err)
        }
      })
  }
}
