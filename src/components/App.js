import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from './About';
import Contact from './Contact';
import Events from './Events';
import Home from "./Home";
import Nav from "./Nav";
import Newsletter  from './Newsletter';
import Projects from './Projects';
import '../styles/App.css'
import '../tailwindImports.css';

const App = () => {
  return (
    <div className="container mx-auto my-10 max-w-xxl" style={{border: '1px solid red'}}>
      <header>
        <h1 className="text-xl font-medium text-primary">Coast2c Lab</h1>
      </header>
      <Router>
        <Nav />
        <div style={{border: '1px solid blue'}}>
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
        </div>
      </Router>
    </div>
  );
}  
export default App;