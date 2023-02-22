import React from 'react';
import { Slide } from 'react-slideshow-image';
import { SlideItem } from './SlideItem';
import 'react-slideshow-image/dist/styles.css';

import FlipCardWrapper from './flip-cards/FlipCardWrapper';
import { homeHeroImageSlideItems } from '../data/homeHeroImageSlideItems';

const Home = () => {
  return (
    <>
      <Slide responsive>
        {homeHeroImageSlideItems.map(({ description, url }, index) => (
          <SlideItem
            key={index}
            index={index}
            description={description}
            url={url}
          />
        ))}
      </Slide>
      <FlipCardWrapper />
    </>
  );
};

export default Home;
