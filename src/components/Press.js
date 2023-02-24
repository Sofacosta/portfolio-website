import React from 'react';
import PressItem from './PressItem';
import { pressItems } from '../data/pressItems';

import '../styles/Press.css';

const Press = () => {
  return (
    <div>
      {pressItems.map((item, index) => {
        return (
          <PressItem
            key={index}
            title={item.title}
            source={item.source}
            url={item.url}
          />
        );
      })}
    </div>
  );
};

export default Press;
