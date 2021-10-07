import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <ul>
      <li><Link to="https://facebook.com/coast2c"><FontAwesomeIcon icon="fa-brands fa-facebook" /></Link></li>
      <li><Link to="https://bandcamp.com/coast2c"><FontAwesomeIcon icon="fa-brands fa-bandcamp" /></Link></li>
      <li><Link to="https://soundcloud.com/coast2c"><FontAwesomeIcon icon="fa-brands fa-soundcloud" /></Link></li>
      <li><Link to="https://instagram.com/coast2c"><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link></li>
      <li><Link to="https://youtube.com/coast2c"><FontAwesomeIcon icon="fa-brands fa-youtube" /></Link></li>
    </ul>
  )
}

export default Footer;