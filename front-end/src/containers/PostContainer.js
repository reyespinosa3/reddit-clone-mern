import React, {Component} from 'react';
import Header from '../components/Header/Header';
import TextPost from '../components/textPost/TextPost';
import TextPostModel from '../models/TextPost';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: ""
    }
  }


  render() {
    let self = this;
    if (this.state.posts === "") {
      TextPostModel.all().then( (res) => {
        console.log(res);

        let posts = res.data.map((post) => {
          return (
            <TextPost
              _id={post._id}
              title={post.title}
              content={post.content}
              votes={post.votes}
            />
          )
        })

        self.setState({
          posts: posts
        })
        console.log(posts);
      })
    }

    return (
      <div className="PostContainer">
        <Header />
        <h1>Here are the latest posts</h1>
        {this.state.posts}
      </div>
    )
  }
}
export default PostContainer
