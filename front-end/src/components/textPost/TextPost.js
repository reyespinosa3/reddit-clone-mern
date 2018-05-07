// create your text post component here
import React, {Component} from 'react';


class TextPost extends Component {

  render() {
    return (
      <div className="TextPost">
        <h1>{this.props.title}</h1>
        <h2>{this.props.content}</h2>
        <h3>{this.props.votes}</h3>
      </div>
    )
  }
}

export default TextPost;
