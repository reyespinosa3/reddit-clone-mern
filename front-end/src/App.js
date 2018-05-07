import React, { Component } from 'react';
import './App.css';
// import TextPost from './components/textPost/TextPost';
// import Comment from './components/comment/Comment';
import Routes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        { Routes }
      </div>
    );
  }
}

export default App;

// {/* <header className="App-header">
//   <h1 className="App-title">My Reddit Clone App</h1>
//   <h2 className="App-blurb">Below will display Posts and Comments</h2>
// </header>
// <TextPost />
// <Comment /> */}
