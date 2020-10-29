import React from 'react';
import './App.css';
import {
  StaticRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
