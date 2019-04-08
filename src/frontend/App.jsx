// Dependencies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Blog from './app/blog/container';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/blog/:id" component={Blog} />
    </Switch>
  </BrowserRouter>
);

export default App;
