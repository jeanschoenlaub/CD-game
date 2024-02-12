import React, { useState } from 'react';
import * as THREE from "three"
import type { HexInfo } from '../LevelGeneration/LevelGenTypes';

//import { useMaterials } from './useMaterials';
import { getDataMaterial } from '../LevelGeneration/NewMapGen/blended-data-textures';
import { getNeighborTypeValue, getNeighbors } from '../LevelGeneration/NewMapGen/hex-neighbors';
import getHexPosition, { calculateDistanceBetweenHexes } from '../LevelGeneration/NewMapGen/utils';
import { handleHexClick } from '../clickInteractions/clickLogic';

interface PlayerHandProps {
    cards: string[];
}

export function PlayerHand({ cards }: PlayerHandProps) {

    const boxGeometry = new THREE.PlaneGeometry(2, 2.67)

    return (
        <>
            {cards.map((position, index) => {
                return (
                    <mesh
                        key={`card-${index}`}
                        geometry={boxGeometry}
                        material={new THREE.MeshBasicMaterial()}
                        position={[0, 2, 0]} // Convert Vector3 to array
                        rotation={new THREE.Euler( - Math.PI/8,0, 0 )}
                    />
                );
            })}
        </>
    );

}