import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { SlideItem } from './SlideItem';
import 'react-slideshow-image/dist/styles.css';

import ReactCardFlip from 'react-card-flip';

import {
  VirtualSynthCardBack,
  VirtualSynthCardFront,
} from './flip-cards/VirtualSynth';
import { MixmagCardBack, MixmagCardFront } from './flip-cards/MixmagCard';
import {
  ResidentAdvisorCardBack,
  ResidentAdvisorCardFront,
} from './flip-cards/ResidentAdvisorCard';
import { NftCardBack, NftCardFront } from './flip-cards/NftCard';
import {
  GravitySpheresCardBack,
  GravitySpheresCardFront,
} from './flip-cards/GravitySpheres';
import { SixCardBack, SixCardFront } from './flip-cards/SixCard';
import { homeHeroImageSlideItems } from '../data/homeHeroImageSlideItems';

const Home = () => {
  const [isVirtualSynthCardFlipped, setIsVirtualSynthCardFlipped] =
    useState(false);
  const isVirtualSynthCardFlippedHandler = () =>
    setIsVirtualSynthCardFlipped(!isVirtualSynthCardFlipped);
  const [isMixmagCardFlipped, setIsMixmagCardFlipped] = useState(false);
  const isMixmagCardFlippedHandler = () =>
    setIsMixmagCardFlipped(!isMixmagCardFlipped);
  const [isResidentAdvisorCardFlipped, setIsResidentAdvisorCardFlipped] =
    useState(false);
  const isResidentAdvisorCardFlippedHandler = () =>
    setIsResidentAdvisorCardFlipped(!isResidentAdvisorCardFlipped);
  const [isNftCardFlipped, setIsNftCardFlipped] = useState(false);
  const isNftCardFlippedHandler = () => setIsNftCardFlipped(!isNftCardFlipped);
  const [isGravitySpheresCardFlipped, setIsGravitySpheresCardFlipped] =
    useState(false);
  const isGravitySpheresCardFlippedHandler = () =>
    setIsGravitySpheresCardFlipped(!isGravitySpheresCardFlipped);
  const [isSixCardFlipped, setIsSixCardFlipped] = useState(false);
  const isSixCardFlippedHandler = () => setIsSixCardFlipped(!isSixCardFlipped);

  return (
    <>
      <Slide>
        {homeHeroImageSlideItems.map(({ description, url }, index) => (
          <SlideItem
            key={index}
            index={index}
            description={description}
            url={url}
          />
        ))}
      </Slide>
      <div className="flex flex-wrap justify-between mt-10">
        <div onClick={isNftCardFlippedHandler}>
          <ReactCardFlip isFlipped={isNftCardFlipped}>
            <NftCardFront />
            <NftCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isSixCardFlippedHandler}>
          <ReactCardFlip isFlipped={isSixCardFlipped}>
            <SixCardFront />
            <SixCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isMixmagCardFlippedHandler}>
          <ReactCardFlip isFlipped={isMixmagCardFlipped}>
            <MixmagCardFront />
            <MixmagCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isResidentAdvisorCardFlippedHandler}>
          <ReactCardFlip isFlipped={isResidentAdvisorCardFlipped}>
            <ResidentAdvisorCardFront />
            <ResidentAdvisorCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isVirtualSynthCardFlippedHandler}>
          <ReactCardFlip isFlipped={isVirtualSynthCardFlipped}>
            <VirtualSynthCardFront />
            <VirtualSynthCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isGravitySpheresCardFlippedHandler}>
          <ReactCardFlip isFlipped={isGravitySpheresCardFlipped}>
            <GravitySpheresCardFront />
            <GravitySpheresCardBack />
          </ReactCardFlip>
        </div>
      </div>
    </>
  );
};

export default Home;
