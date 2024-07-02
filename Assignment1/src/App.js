import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form.js';
import Success from './Success.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/Success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
