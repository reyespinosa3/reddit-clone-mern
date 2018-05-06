var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Comment  = require('./comment');

const textPostSchema = new Schema ({
  title: String,
  content: String,
  thumbnail_img_url: String,
  votes: Number,
  comments: [Comment.Schema]
})

var TextPost = mongoose.model('TextPost', textPostSchema);

module.exports = TextPost;
