import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Events from './Events';
import Home from './Home';
import Newsletter from './Newsletter';
import Videos from './Videos';
import Releases from './Releases';
import Paintings from './VaultEp';
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
      <Route path="/videos">
        <Videos />
      </Route>
      <Route path="/releases">
        <Releases />
      </Route>
      <Route path="/vaultep">
        <Paintings />
      </Route>
      <Route path="/dj-sets">
        <DjSets />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
