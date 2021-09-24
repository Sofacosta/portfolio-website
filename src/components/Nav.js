import React from 'react';
import NavItem from './NavItem';

import { navItems } from '../data/navItems';

const Nav = () => {
  return (
    <nav className="py-12">
      <ul className="flex justify-start">
        {navItems && 
          navItems.map((item) => {
            const { path, name } = item; 
            return <NavItem path={path} name={name} key={name} />
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;