import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Projcets from './Projects/Projcets';
import Writing from './Writing/Writing';
import Learning from './Learning/Learning';
import TechnicalSkill from './TechnicalSkill/TechnicalSkill';
import Resume from './Resume/Resume';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <Projcets />
        </Route>
        <Route path="/writing">
          <Writing />
        </Route>
        <Route path="/learning">
          <Learning />
        </Route>
        <Route path="/technical">
          <TechnicalSkill />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
