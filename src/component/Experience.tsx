import Lights from './Lights'
import { Level1 } from './Level1/Level1'
import { useEffect, useState } from 'react';
import React from 'react';
import { useGameStore } from '../stores/useGame';

import { PlayerHand } from '../features/Cards/player-hand';
import { FadeToBlack } from '../features/Env/map-effects';

export default function Experience() {
    const { yearNumber, cards } = useGameStore(); // Use cards from the game store
    const [isTurnEnd, setIstTurnEnd] = useState(false);

    useEffect(() => {
        setIstTurnEnd(!isTurnEnd);
    }, [yearNumber]);

    return (
        <>
            <color args={['#bdedfc']} attach="background" />
            <Lights />
            <FadeToBlack yearNumber={yearNumber} />
            <PlayerHand cards={cards} /> {/* Use cards from the game store */}
            <Level1 />
        </>
    );
}