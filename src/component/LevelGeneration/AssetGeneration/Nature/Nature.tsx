import React, { useEffect } from 'react';
import { HexInfo } from '../../LevelGenTypes';

import { Forest } from './Trees/Forest';
import { getHexPositionFromGrid } from '../../NewMapGen/utils';

interface NatureProps {
    hexInfo: HexInfo;
    treeScale: number;
    radius: number;
    borderSize: number;
    randomNumber: number;
}
  
export function Nature({ hexInfo, treeScale, radius, borderSize, randomNumber}: NatureProps) {

    const position = getHexPositionFromGrid(hexInfo.gridPosX, hexInfo.gridPosY, radius, borderSize);
   
    return (
        <>
            {hexInfo.type.includes("grass")  &&
            <Forest hexInfo={hexInfo} treeScale={treeScale} position={position} random={randomNumber}/>}
        </>
    );
}
