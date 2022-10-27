import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import { slide as Menu } from 'react-burger-menu';

import { navItems } from '../data/navItems';
import '../styles/Nav.css';

const Nav = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const resizeHandler = () => {
    setDesktop(window.innerWidth > 650);
  };
  const getNavItems = navItems.map((item) => {
    const { path, name, children } = item;
    return (
      <NavItem path={path} name={name} children={children} key={name} isDesktop={isDesktop} />
    );
  })
  const desktopNav = (
    <nav className="pt-2.5 inline-block">
        <ul className='flex justify-start'>
          {navItems && getNavItems}
        </ul>
      </nav>
  );
  const mobileNav = <Menu right>{getNavItems}</Menu>;

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return isDesktop ? desktopNav : mobileNav;
}

export default Nav;
