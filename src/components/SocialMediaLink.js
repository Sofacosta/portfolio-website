import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaLink = (props) => {
  const { path, icon } = props;
  return (
    <a href={path}><FontAwesomeIcon icon={icon} /></a>
  )
}

export default SocialMediaLink;