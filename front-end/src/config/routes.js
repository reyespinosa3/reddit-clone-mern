import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TextPost from '../components/textPost/TextPost';
import Comment from '../components/comment/Comment';


export default (
  <Switch>
    <Route exact path='/' component={TextPost} />
    <Route path='/posts' component={Comment} />
  </Switch>
)
