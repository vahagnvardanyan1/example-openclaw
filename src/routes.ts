import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BubblePage from './pages/BubblePage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bubble" component={BubblePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
