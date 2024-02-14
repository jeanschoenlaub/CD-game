import React from 'react';

import { useState } from 'react'
import { useAudio } from '../Audio/AudioContext'
import { useGameStore } from '../../stores/useGame';
import "./InterfaceTop.css";

export default function InterfaceTop() {
  const [displayHud, setDisplayHud] = useState(true);
  const audioContext = useAudio();
  const yearNumber = useGameStore((state) => state.yearNumber); // Consume the yearNumber from the game store

  return (
    <>
      {displayHud && (
        <div className="topBar">
          <span className='yearDisplay'>Year: {yearNumber}</span> {/* Display the year number */}
          <button
            className='ml-4' 
            onClick={() => {
              console.log("clicked");
              audioContext.togglePlay();
            }}
          >
            {audioContext.isPlaying ? "Pause" : "Play"} Music
          </button>
        </div>
      )}
    </>
  );
}

