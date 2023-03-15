import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { SlideItem } from './SlideItem';

import 'react-slideshow-image/dist/styles.css';

import FlipCardWrapper from './flip-cards/FlipCardWrapper';
import { homeHeroImageSlideItems } from '../data/homeHeroImageSlideItems';

const Home = () => {
  return (
    <>
      <h2 className="py-4">
        <Link
          className="fancy-text text-3xl"
          to="https://coast2c.bandcamp.com/album/machine-music-human-dance"
        >
          Machine Music, Human Dance on Bandcamp now!
        </Link>
      </h2>
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
