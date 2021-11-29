import React from 'react';
import ReactPlayer from "react-player"

const DjSets = () => {
  return ( 
    <div className="mx-8">
      <h2 className="text-white text-4xl pb-8">Radio | Podcast | DJ mixes:</h2>
      <ReactPlayer
        url="https://soundcloud.com/coast2c/sets/mixes"
        height="700px"
        />
    </div>
  )
}
export default DjSets;
