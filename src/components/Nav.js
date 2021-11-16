import React from 'react';
import NavItem from './NavItem';

import { navItems } from '../data/navItems';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="pt-2.5 inline-block">
      <ul className="flex justify-start">
        {navItems &&
          navItems.map((item) => {
            const { path, name, children } = item;
            return (
              <NavItem path={path} name={name} children={children} key={name} />
            );
          })}
      </ul>
    </nav>
  );
};

export default Nav;
