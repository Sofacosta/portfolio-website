import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h1>Nav Bar:</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>  
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="newsletter">Newsletter</Link>
        </li>
        <li>
          <Link to="events">Events</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav;