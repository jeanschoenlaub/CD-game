import Lights from './Lights'
import { Level1 } from './Level1/Level1'
import { useEffect } from 'react';
import React from 'react';
import { useGameStore } from '../stores/useGame';

export default function Experience()
{

    const yearNumber = useGameStore((state) => state.yearNumber);

    useEffect(() => {
        // Trigger your animation or logic based on yearNumber change
        console.log("Animating for year:", yearNumber);
    }, [yearNumber])

    return (
        <>
            <color args={ [ '#bdedfc' ] } attach="background" />
            <Lights />

            <Level1/> 
        </>
    )
}