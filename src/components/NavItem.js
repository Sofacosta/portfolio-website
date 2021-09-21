import React from 'react';
import { Link } from "react-router-dom";

const NavItem = (props) => {
  const { path, name } = props;
  return (
    <li className="flex-auto">
      <Link to={path}>{name}</Link>
    </li> 
  )
}

export default NavItem;