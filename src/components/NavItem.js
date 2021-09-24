import React from 'react';
import { Link } from "react-router-dom";

const NavItem = (props) => {
  const { path, name } = props;
  return (
    <li className="pr-8">
      <Link to={path}>{name}</Link>
    </li> 
  )
}

export default NavItem;