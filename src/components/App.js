import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from './About';
import Contact from './Contact';
import Events from './Events';
import Home from "./Home";
import Nav from "./Nav";
import Newsletter  from './Newsletter';
import Projects from './Projects';

import '../index.css';

const App = () => {
  return (
    <>
      <header>
        <h1 className= "text-xl font-medium text-primary">Sofia Acosta</h1>
        <h2 className="text-gray-500">This is my portfolio website</h2>
      </header>

      <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/newsletter">
            <Newsletter />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}  
export default App;