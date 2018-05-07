const express             = require('express');
const router              = express.Router();
const bodyParser          = require('body-parser');
const textPostsController = require('../controllers/textPosts');
const commentsController  = require('../controllers/comments');

router.get('/', function(req, res) {
  res.send("This is the backend server for my reddit clone lab");
})

//TextPost Routes
//get all posts
router.get('/api/posts', textPostsController.index);
//get specific post
router.get('/api/posts/:post_id', textPostsController.show);
//create new post
router.post('/api/posts', textPostsController.create);
//update specific post
router.put('/api/posts/:post_id', textPostsController.update);
//delete specific post
router.delete('/api/posts/:post_id', textPostsController.destroy);

//Comment Routes
//create new comment for specific post
router.post('/api/posts/:post_id/comments', commentsController.create);
//update specific comment on specific post
router.put('/api/posts/:post_id/comments/:comment_id', commentsController.update);


module.exports = router;
