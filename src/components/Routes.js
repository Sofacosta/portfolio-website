import React from 'react';
import { Switch, Route } from "react-router-dom";

import About from './About';
import Contact from './Contact';
import Events from './Events';
import Home from "./Home";
import Newsletter  from './Newsletter';
import Projects from './Projects';
import Videos from './Videos';
import Music from './Music';
import Paintings from './Paintings';
import DjSets from './DjSets';

const Routes = () => {
  return (
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
      <Route path="/videos">
        <Videos />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/paintings">
        <Paintings />
      </Route>
      <Route path="/dj-sets">
        <DjSets />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes;
