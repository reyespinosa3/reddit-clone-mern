import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import TextPost from '../components/textPost/TextPost';
import Comment from '../components/comment/Comment';
import PostContainer from '../containers/PostContainer';


export default (
  <Switch>
    <Route exact path='/' component={PostContainer} />
    <Route path='/posts' component={Comment} />
  </Switch>
)
