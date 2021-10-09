import React, { useState } from 'react';

import FlipCard from 'flip-card-react';


const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFlippedHandler = () => setIsFlipped(!isFlipped);

  const cardStyle = {
    padding: 25,
    border: "solid 1px",
    borderRadius: 5,
    color: "#fff",
    width: 150
  };

  const front = (
    <div className="text-white" style={{...cardStyle}}>
        Hover to see the back
    </div>
  );
  const back = (
    <div className="text-white" style={{...cardStyle}}>
        Unhover to see the front
    </div>
  );

  return (
    <>
      <h2 className="text-white text-2xl">Home</h2>
      <div onMouseEnter={isFlippedHandler} onMouseLeave={isFlippedHandler}>
        <FlipCard isFlipped={isFlipped} front={front} back={back} vertical />
      </div>
    </>
  )
}

export default Home;
