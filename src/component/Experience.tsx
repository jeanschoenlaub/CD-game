import Lights from './Lights'
import { Level1 } from './Level1/Level1'
import { useGame } from '../features/GameLogic/GameContext';
import { useEffect } from 'react';
import React from 'react';

export default function Experience()
{

    const { yearNumber } = useGame();

    useEffect(() => {
        // Trigger your animation based on yearNumber change
        console.log("Animating for year:", yearNumber);
    }, [yearNumber]);

    return (
        <>
            <color args={ [ '#bdedfc' ] } attach="background" />
            <Lights />

            <Level1/> 
        </>
    )
}