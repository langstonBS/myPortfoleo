import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navagation from './Navagation/Navagation';
import About from './About';
import Home from './Home/Home';
import Projcets from './Projects/Projcets';
import Footer from './Footers/Footer';


function App() {
  return (
    <>
      <Router>
        <Navagation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projcets />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
