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
