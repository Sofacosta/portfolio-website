import React, { useState } from 'react';

import FlipCard from 'flip-card-react';

import { TestCardBack, TestCardFront } from './flip-cards/TestCard';


const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFlippedHandler = () => setIsFlipped(!isFlipped);

  return (
    <>
      <h2 className="text-white text-2xl">Home</h2>
      <div onMouseEnter={isFlippedHandler} onMouseLeave={isFlippedHandler}>
        <FlipCard isFlipped={isFlipped} front={TestCardFront} back={TestCardBack} />
      </div>
      <div onMouseEnter={isFlippedHandler} onMouseLeave={isFlippedHandler}>
        <FlipCard isFlipped={isFlipped} front={TestCardFront} back={TestCardBack} />
      </div>
    </>
  )
}

export default Home;
