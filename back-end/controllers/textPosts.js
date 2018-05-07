const models = require('../models');
const TextPost = models.TextPost;

const index = (req, res) => {
  TextPost.find({}, function(err, posts) {
    if (err) res.send(err);
    else res.json(posts);
  });
}

const create = (req, res) => {
  TextPost.create(req.body, function(err, post){
    if (err) res.end(err);
    else res.json(post);
  });
}

const show = (req, res) => {
  TextPost.findById(req.params.post_id, function(err, post){
    if (err) res.send(err);
    else res.json(post);
  });
}

const update = (req, res) => {
  TextPost.findByIdAndUpdate(req.params.post_id,
    {$set: req.body}, function(err, post){
    if (err) res.send(err);
    else res.json(post);
  });
}

const destroy = (req, res) => {
  TextPost.findByIdAndRemove(req.params.post_id, function(err, post){
    if (err) res.send(err);
    else res.send("post deleted");
  });
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
