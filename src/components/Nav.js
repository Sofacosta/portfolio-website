import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import { slide as Menu } from 'react-burger-menu';

import { navItems } from '../data/navItems';
import '../styles/Nav.css';

const Nav = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const [isOpen, setIsOpen] = useState(false);
  const resizeHandler = () => {
    setDesktop(window.innerWidth > 650);
  };
  const menuStateChangeHandler = (state) => {
    setIsOpen(state.isOpen);
  };

  const getNavItems = navItems.map((item) => {
    const { path, name, children } = item;
    return (
      <NavItem
        closeMenu={() => setIsOpen(false)}
        path={path}
        name={name}
        children={children}
        key={name}
        isDesktop={isDesktop}
      />
    );
  });
  const desktopNav = (
    <nav className="pt-2.5 inline-block">
      <ul className="flex justify-start">{getNavItems}</ul>
    </nav>
  );
  const mobileNav = (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={(state) => menuStateChangeHandler(state)}
      width={180}
    >
      {getNavItems}
    </Menu>
  );

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return isDesktop ? desktopNav : mobileNav;
};

export default Nav;
