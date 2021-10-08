import React from 'react';
import { Link } from "react-router-dom";

const NavItem = (props) => {
  const { path, name, children } = props;
  return (
    <li className="pl-8 py-2 text-xl">
      {children ? <><li className="text-white">{name}</li> <ul className="child-navigation pt-0">{children.map((childNavItem) => <li className="py-0.5" key={childNavItem.path}><Link to={childNavItem.path}>{childNavItem.name}</Link></li>)}</ul></> : <li><Link to={path}>{name}</Link></li>}
    </li> 
  )
}

export default NavItem;