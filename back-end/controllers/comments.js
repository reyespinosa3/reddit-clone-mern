const models = require('../models');
const Comment = models.Comment;
const TextPost = models.TextPost;

const create = (req, res) => {
  Comment.create(req.body, function(err, comment){
    if (err) res.end(err);
    else {
      TextPost.findById(req.params.post_id, function(err, post) {
        if (err) res.send(err);
        else {
          post.comments.push(comment);
          post.save();
          res.json(comment);
        }
      })
    }
  });
}

const update = (req, res) => {
  Comment.findOne({_id: req.params.comment_id}, (err, comment) => {
    comment.text = req.body.text;
    comment.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  TextPost.findOne({_id: req.params.post_id}, (err, postFound) => {
    let commentFound = postFound.comments.id(req.params.comment_id);
    commentFound.text = req.body.text;
    postFound.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(commentFound);
    });
  });
}



module.exports.create = create;
module.exports.update = update;
