import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMediaLink(props) {
  const { path, icon } = props;
  return (
    <a className="text-3xl" href={path}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialMediaLink;
