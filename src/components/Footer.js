import React from 'react';

import Newsletter from './Newsletter';
import SocialMediaLink from './SocialMediaLink';

import socialMediaLinks from '../data/socialMediaLinks';

const Footer = () => {
  return (
    <footer className="py-6">
      <ul className="flex justify-center pb-2">
        {socialMediaLinks &&
          socialMediaLinks.map((link) => {
            return (
              <li className="text-white px-3" key={link.path}>
                <SocialMediaLink path={link.path} icon={link.icon} />
              </li>
            );
          })}
      </ul>
      <Newsletter />
    </footer>
  );
};

export default Footer;
