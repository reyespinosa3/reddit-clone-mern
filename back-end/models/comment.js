var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var commentSchema = new Schema ({
  comment: String,
  votes: Number
})

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
module.exports.Schema = commentSchema;
