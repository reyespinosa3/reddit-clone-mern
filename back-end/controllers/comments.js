const models = require('../models');
const Comment = models.Comment;

const index = (req, res) => {
  models.TextPost.find({_id: req.params.post_id}, (err, textPost) => {
    if (err) {
      res.send(err);
    }
    res.json(textPost.comments);
  })
}

const show = (req, res) => {
  Comment.find({_id: req.params.comment_id}, (err, comment) => {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  })
}

const create = (req, res) => {
  let newComment = new Comment(req.body);
  newComment.save();
  models.TextPost.findByIdAndUpdate(req.params.post_id,
    {$push: {comments: newComment}},
    {safe: true, upsert: true, new: true}, (err, textpost) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(newComment);
  })
}

const update = (req, res) => {
  Comment.findOne({_id: req.params.comment_id}, (err, comment) => {
    comment.text = req.body.text;
    comment.upVotes = req.body.upVotes;
    comment.downVotes = req.body.downVotes;
    comment.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  models.TextPost.findOne({_id: req.params.post_id}, (err, foundPost) => {
    let foundComment = foundPost.comments.id(req.params.comment_id);
    foundComment.text = req.body.text;
    foundComment.upVotes = req.body.upVotes;
    foundComment.downVotes = req.body.downVotes;
    foundPost.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(foundComment);
    });
  });
}

const destroy = (req, res) => {
  Comment.remove({_id: req.params.comment_id}, (err, comment) => {
    if (err) {
      console.log('error removing comment from db');
      res.status(500).send(err);
    }
  })
  models.TextPost.findOneAndUpdate({ _id: req.params.post_id },
  { $pull: { comments: { _id: req.params.comment_id}}}, (err, model) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(model);
  })
}

module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
