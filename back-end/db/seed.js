

const db = require('../models');

const testTextPostsList = [
  {
    title: "Dogs Speak Out",
    content: "What do dogs say?",
    thumbnail_image_url: "https://i.imgur.com/GMJGZuN.jpg",
    votes: 4,
    comments: [{'comment': 'Dogs say Ruff Ruff', 'votes': 1}]
  }, {
    title: "Do Dogs Speak",
    content: "Yes they do!",
    thumbnail_image_url: 'https://i.imgur.com/GMJGZuN.jpg',
    votes: 5,
    comments: [{'comment': 'Dogs also say Bow Wow', 'votes': 2}]
  }, {
    title: "Can Dogs Whisper",
    content: "The Dog Whisperer",
    thumbnail_image_url: 'https://i.imgur.com/GMJGZuN.jpg',
    votes: 6,
    comments: [{'comment': 'Dogs Groowl too', 'votes': 3}]
  }, {
    title: "Do Dogs Like Cats?",
    content: "Only a select few",
    thumbnail_image_url: 'https://i.imgur.com/GMJGZuN.jpg',
    votes: 7,
    comments: [{'comment': 'Dogs pant when they are hot or tired', 'votes': 3}]
  }, {
    title: "Do Dogs Like Humans?",
    content: "Only the ones that like us!",
    thumbnail_image_url: 'https://i.imgur.com/GMJGZuN.jpg',
    votes: 8,
    comments: [{'comment': 'Dogs like to like faces!', 'votes': 1}]
  }
]

db.TextPost.remove({}, (err, textposts) => {
  db.TextPost.create(testTextPostsList, (err, textposts) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all textposts: " + textposts);
    console.log("created " + textposts.length + " textposts");
    process.exit();
  })
})
