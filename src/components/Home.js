import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';

import { VirtualSynthCardBack, VirtualSynthCardFront } from './flip-cards/VirtualSynth';
import { VaultCardBack, VaultCardFront } from './flip-cards/VaultCard';
import { ResidentAdvisorCardBack, ResidentAdvisorCardFront } from './flip-cards/ResidentAdvisorCard';
import { FourCardBack, FourCardFront } from './flip-cards/FourCard';
import { GravitySpheresCardBack, GravitySpheresCardFront } from './flip-cards/GravitySpheres';
import { SixCardBack, SixCardFront } from './flip-cards/SixCard';

const Home = () => {
  const [isVirtualSynthCardFlipped, setIsVirtualSynthCardFlipped] = useState(false);
  const isVirtualSynthCardFlippedHandler = () =>
    setIsVirtualSynthCardFlipped(!isVirtualSynthCardFlipped);
  const [isVaultCardFlipped, setIsVaultCardFlipped] = useState(false);
  const isVaultCardFlippedHandler = () =>
    setIsVaultCardFlipped(!isVaultCardFlipped);
  const [isResidentAdvisorCardFlipped, setIsResidentAdvisorCardFlipped] = useState(false);
  const isResidentAdvisorCardFlippedHandler = () =>
    setIsResidentAdvisorCardFlipped(!isResidentAdvisorCardFlipped);
  const [isFourCardFlipped, setIsFourCardFlipped] = useState(false);
  const isFourCardFlippedHandler = () =>
    setIsFourCardFlipped(!isFourCardFlipped);
  const [isGravitySpheresCardFlipped, setIsGravitySpheresCardFlipped] = useState(false);
  const isGravitySpheresCardFlippedHandler = () =>
    setIsGravitySpheresCardFlipped(!isGravitySpheresCardFlipped);
  const [isSixCardFlipped, setIsSixCardFlipped] = useState(false);
  const isSixCardFlippedHandler = () => setIsSixCardFlipped(!isSixCardFlipped);

  return (
    <>
      <img src="/assets/images/coast2c2.png" alt="Coast2c" />
      <p className="text-white justify-center -mt-5 ml-1 text-xs">
        Photo by Alexander Pomper
      </p>
      <div className="flex flex-wrap justify-between mt-10">
        <div onClick={isVirtualSynthCardFlippedHandler}>
          <ReactCardFlip isFlipped={isVirtualSynthCardFlipped}>
            <VirtualSynthCardFront />
            <VirtualSynthCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isVaultCardFlippedHandler}>
          <ReactCardFlip isFlipped={isVaultCardFlipped}>
            <VaultCardFront />
            <VaultCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isResidentAdvisorCardFlippedHandler}>
          <ReactCardFlip isFlipped={isResidentAdvisorCardFlipped}>
            <ResidentAdvisorCardFront />
            <ResidentAdvisorCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isFourCardFlippedHandler}>
          <ReactCardFlip isFlipped={isFourCardFlipped}>
            <FourCardFront />
            <FourCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isGravitySpheresCardFlippedHandler}>
          <ReactCardFlip isFlipped={isGravitySpheresCardFlipped}>
            <GravitySpheresCardFront />
            <GravitySpheresCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isSixCardFlippedHandler}>
          <ReactCardFlip isFlipped={isSixCardFlipped}>
            <SixCardFront />
            <SixCardBack />
          </ReactCardFlip>
        </div>
      </div>
    </>
  );
};

export default Home;
