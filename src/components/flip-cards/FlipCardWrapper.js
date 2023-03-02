import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useAnalytics } from 'use-analytics';
import { VirtualSynthCardBack, VirtualSynthCardFront } from './VirtualSynth';
import { MixmagCardBack, MixmagCardFront } from './MixmagCard';
import {
  ResidentAdvisorCardBack,
  ResidentAdvisorCardFront,
} from './ResidentAdvisorCard';
import { NftCardBack, NftCardFront } from './NftCard';
import {
  GravitySpheresCardBack,
  GravitySpheresCardFront,
} from './GravitySpheres';
import { SixCardBack, SixCardFront } from './SixCard';

const FlipCardsWrapper = () => {
  const { track } = useAnalytics();
  const [cardsFlipped, setCardsFlipped] = useState({
    virtualSynth: false,
    mixmag: false,
    residentAdvisor: false,
    nft: false,
    gravitySpheres: false,
    six: false,
  });

  const flipCardData = [
    {
      front: <NftCardFront />,
      back: <NftCardBack />,
      isFlipped: cardsFlipped.nft,
      onClick: () => {
        track('cardFlipped', {
          cardName: 'NFT',
        });
        setCardsFlipped({ ...cardsFlipped, nft: !cardsFlipped.nft });
      },
    },
    {
      front: <SixCardFront />,
      back: <SixCardBack />,
      isFlipped: cardsFlipped.six,
      onClick: () => {
        track('cardFlipped', {
          cardName: 'COUNTERCLOCKWISE',
        });
        setCardsFlipped({ ...cardsFlipped, six: !cardsFlipped.six });
      },
    },
    {
      front: <MixmagCardFront />,
      back: <MixmagCardBack />,
      isFlipped: cardsFlipped.mixmag,
      onClick: () => {
        track('cardFlipped', {
          cardName: 'MixMag',
        });
        setCardsFlipped({ ...cardsFlipped, mixmag: !cardsFlipped.mixmag });
      },
    },
    {
      front: <ResidentAdvisorCardFront />,
      back: <ResidentAdvisorCardBack />,
      isFlipped: cardsFlipped.residentAdvisor,
      onClick: () => {
        track('cardFlipped', {
          cardName: 'Resident Advisor',
        });
        setCardsFlipped({
          ...cardsFlipped,
          residentAdvisor: !cardsFlipped.residentAdvisor,
        });
      },
    },
    {
      front: <VirtualSynthCardFront />,
      back: <VirtualSynthCardBack />,
      isFlipped: cardsFlipped.virtualSynth,
      onClick: () => {
        track('cardFlipped', {
          cardName: 'Virtual Synth',
        });
        setCardsFlipped({
          ...cardsFlipped,
          virtualSynth: !cardsFlipped.virtualSynth,
        });
      },
    },
    {
      front: <GravitySpheresCardFront />,
      back: <GravitySpheresCardBack />,
      isFlipped: cardsFlipped.gravitySpheres,
      onClick: () => {
        track('cardFlipped', {
          cardName: 'Gravity Spheres',
        });
        setCardsFlipped({
          ...cardsFlipped,
          gravitySpheres: !cardsFlipped.gravitySpheres,
        });
      },
    },
  ];

  return (
    <div className="flex flex-wrap space-between mt-2 -mx-2">
      {flipCardData.map(({ back, front, isFlipped, onClick }, index) => (
        <div
          className="h-auto aspect-square max-h-60 m-2 flex-auto overflow-hidden rounded-md"
          key={index}
          onClick={onClick}
          style={{ minHeight: '200px' }}
        >
          <ReactCardFlip containerClassName="h-full" isFlipped={isFlipped}>
            {front}
            {back}
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
};

export default FlipCardsWrapper;
