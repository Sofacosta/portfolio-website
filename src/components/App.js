import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Footer from './Footer';
import Nav from "./Nav";
import Routes from './Routes';

import '../styles/App.css'
import '../tailwindImports.css';

const App = () => {
  return (
    <div className="container mx-auto my-10 max-w-5xl p-0">
      <Router>
        <header className="flex justify-between pb-12">
          <h1 className="text-5xl font-medium text-white inline-block">Coast2c Lab</h1>
          <Nav />
        </header>
        <div className="mx-auto pt-8 pb-12 max-w-5xl">
          <Routes />
          </div>
        <Footer />
      </Router>
    </div>
  );
}  
export default App;