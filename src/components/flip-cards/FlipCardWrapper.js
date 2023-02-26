import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
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
      onClick: () =>
        setCardsFlipped({ ...cardsFlipped, nft: !cardsFlipped.nft }),
    },
    {
      front: <SixCardFront />,
      back: <SixCardBack />,
      isFlipped: cardsFlipped.six,
      onClick: () =>
        setCardsFlipped({ ...cardsFlipped, six: !cardsFlipped.six }),
    },
    {
      front: <MixmagCardFront />,
      back: <MixmagCardBack />,
      isFlipped: cardsFlipped.mixmag,
      onClick: () =>
        setCardsFlipped({ ...cardsFlipped, mixmag: !cardsFlipped.mixmag }),
    },
    {
      front: <ResidentAdvisorCardFront />,
      back: <ResidentAdvisorCardBack />,
      isFlipped: cardsFlipped.residentAdvisor,
      onClick: () =>
        setCardsFlipped({
          ...cardsFlipped,
          residentAdvisor: !cardsFlipped.residentAdvisor,
        }),
    },
    {
      front: <VirtualSynthCardFront />,
      back: <VirtualSynthCardBack />,
      isFlipped: cardsFlipped.virtualSynth,
      onClick: () =>
        setCardsFlipped({
          ...cardsFlipped,
          virtualSynth: !cardsFlipped.virtualSynth,
        }),
    },
    {
      front: <GravitySpheresCardFront />,
      back: <GravitySpheresCardBack />,
      isFlipped: cardsFlipped.gravitySpheres,
      onClick: () =>
        setCardsFlipped({
          ...cardsFlipped,
          gravitySpheres: !cardsFlipped.gravitySpheres,
        }),
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
