import React from 'react';
import PressItem from './PressItem';
import { pressItems } from '../data/pressItems';

import '../styles/Press.css';

const Press = () => {
  return (
    <div>
      <h2 class="text-white text-4xl mb-12">Press</h2>
      <hr className="mb-12" />
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
