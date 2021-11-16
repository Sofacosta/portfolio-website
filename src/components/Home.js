import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';

import { TestCardBack, TestCardFront } from './flip-cards/TestCard';
import { VaultCardBack, VaultCardFront } from './flip-cards/VaultCard';
import { ThreeCardBack, ThreeCardFront } from './flip-cards/ThreeCard';
import { FourCardBack, FourCardFront } from './flip-cards/FourCard';
import { FiveCardBack, FiveCardFront } from './flip-cards/FiveCard';
import { SixCardBack, SixCardFront } from './flip-cards/SixCard';

const Home = () => {
  const [isTestCardFlipped, setIsTestCardFlipped] = useState(false);
  const isTestCardFlippedHandler = () =>
    setIsTestCardFlipped(!isTestCardFlipped);
  const [isVaultCardFlipped, setIsVaultCardFlipped] = useState(false);
  const isVaultCardFlippedHandler = () =>
    setIsVaultCardFlipped(!isVaultCardFlipped);
  const [isThreeCardFlipped, setIsThreeCardFlipped] = useState(false);
  const isThreeCardFlippedHandler = () =>
    setIsThreeCardFlipped(!isThreeCardFlipped);
  const [isFourCardFlipped, setIsFourCardFlipped] = useState(false);
  const isFourCardFlippedHandler = () =>
    setIsFourCardFlipped(!isFourCardFlipped);
  const [isFiveCardFlipped, setIsFiveCardFlipped] = useState(false);
  const isFiveCardFlippedHandler = () =>
    setIsFiveCardFlipped(!isFiveCardFlipped);
  const [isSixCardFlipped, setIsSixCardFlipped] = useState(false);
  const isSixCardFlippedHandler = () => setIsSixCardFlipped(!isSixCardFlipped);

  return (
    <>
      <img src="/assets/images/coast2c2.png" alt="Coast2c" />
      <div className="max-w-xl mx-auto pt-4">
        <p className="text-white justify-center py-4">
          Photo by Alexander Pomper
        </p>
        <hr></hr>
      </div>
      <div className="flex flex-wrap">
        <div onClick={isTestCardFlippedHandler}>
          <ReactCardFlip isFlipped={isTestCardFlipped}>
            <TestCardFront />
            <TestCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isVaultCardFlippedHandler}>
          <ReactCardFlip isFlipped={isVaultCardFlipped}>
            <VaultCardFront />
            <VaultCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isThreeCardFlippedHandler}>
          <ReactCardFlip isFlipped={isThreeCardFlipped}>
            <ThreeCardFront />
            <ThreeCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isFourCardFlippedHandler}>
          <ReactCardFlip isFlipped={isFourCardFlipped}>
            <FourCardFront />
            <FourCardBack />
          </ReactCardFlip>
        </div>
        <div onClick={isFiveCardFlippedHandler}>
          <ReactCardFlip isFlipped={isFiveCardFlipped}>
            <FiveCardFront />
            <FiveCardBack />
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
