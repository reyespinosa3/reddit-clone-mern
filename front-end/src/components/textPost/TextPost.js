// create your text post component here
import React, {Component} from 'react';
import './TextPost.css';

class TextPost extends Component {

  render() {
    return (
      <div className="TextPost">
        <h1>Title:{this.props.title}</h1>
        <h2>Content:{this.props.content}</h2>
        <h3>Votes:{this.props.votes}</h3>
        <hr/>
      </div>
    )
  }
}

export default TextPost;
