import useGame from '../../stores/useGame'
import { useEffect, useState } from 'react'
import { useAudio } from '../Audio/AudioContext'

export default function InterfaceTop() {
  const [displayHud, setDisplayHud] = useState(false);

  const audioContext = useAudio();

  const phase = useGame(state => state.phase);
  const startTime = useGame(state => state.startTime);
  const endTime = useGame(state => state.endTime);

  useEffect(() => {
    console.log(phase)
    if (phase === 'playing') {
      setDisplayHud(true);
      console.log(displayHud);
    } else if (phase === 'ended') {
      setDisplayHud(false);
    }
  }, [phase, startTime, endTime]);


  return (<>
    {displayHud && 
    <div className="time">
          <button
            className='ml-4' 
            onClick={() => {
              console.log("clicked")
              audioContext.togglePlay() 
          }}>
           { audioContext.isPlaying ? "Pause" : "Play" }
            On
          </button> 
      </div>
    }  
    </>
  );
  
}
