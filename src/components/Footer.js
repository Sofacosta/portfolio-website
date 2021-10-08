import React from 'react';
import { Link } from "react-router-dom";

import Newsletter from './Newsletter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faBandcamp, faSoundcloud, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <ul className='flex justify-center'>
        <li className='text-white px-3'><Link to="https://facebook.com/coast2c"><FontAwesomeIcon icon={faFacebook} /></Link></li>
        <li className='text-white px-3'><Link to="https://bandcamp.com/coast2c"><FontAwesomeIcon icon={faBandcamp} /></Link></li>
        <li className='text-white px-3'><Link to="https://soundcloud.com/coast2c"><FontAwesomeIcon icon={faSoundcloud} /></Link></li>
        <li className='text-white px-3'><Link to="https://instagram.com/coast2c"><FontAwesomeIcon icon={faInstagram} /></Link></li>
        <li className='text-white px-3'><Link to="https://youtube.com/coast2c"><FontAwesomeIcon icon={faYoutube} /></Link></li>
      </ul>
      <Newsletter />
    </>
  )
}

export default Footer;