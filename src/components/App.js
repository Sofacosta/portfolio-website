import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./Nav";
import Routes from './Routes';

import '../styles/App.css'
import '../tailwindImports.css';

const App = () => {
  return (
    <div className="container mx-auto my-10 max-w-6xl" style={{border: '1px solid red'}}>
      <header>
        <h1 className="text-3xl font-medium text-white">Coast2c Lab</h1>
      </header>
      <Router>
        <Nav />
        <div style={{border: '1px solid blue'}}>
          <Routes />
        </div>
      </Router>
    </div>
  );
}  
export default App;