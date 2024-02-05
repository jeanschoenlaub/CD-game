import React, { useEffect } from 'react';
import { HexInfo } from '../../LevelGenTypes';
import { getHexPositionFromGrid } from '../../NewMapGen/terrainGen';

import { seededGridRandom } from '../../NewMapGen/utils';
import { Forest } from './Trees/Forest';

interface NatureProps {
    hexInfo: HexInfo;
    treeScale: number;
    radius: number;
    borderSize: number;
    seed: number;
}
  
export function Nature({ hexInfo, treeScale, radius, borderSize, seed}: NatureProps) {

    const position = getHexPositionFromGrid(hexInfo.gridPosX, hexInfo.gridPosY, radius, borderSize);
    const random = seededGridRandom(seed, hexInfo.gridPosX, hexInfo.gridPosY)
   
    return (
        <>
            {hexInfo.type.includes("grass")  &&
            <Forest hexInfo={hexInfo} treeScale={treeScale} position={position} random={random}/>}
        </>
    );
}
