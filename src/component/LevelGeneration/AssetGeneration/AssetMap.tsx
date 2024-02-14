import React, { useEffect } from 'react';
import type { HexInfo} from '../LevelGenTypes';
import { CityGen } from './Buildings/City';
import { Nature } from './Nature/Nature';
import { Farm } from './Buildings/Farm';
import { SeededRNG } from '../utilsSeed';
import OilWell from './Buildings/OilWell';
import { getHexPositionFromGrid } from '../NewMapGen/utils';
import { FarmContours } from './Buildings/FarmContour';
import { getNeighbors, getVisibleFences } from '../NewMapGen/hex-neighbors';

interface AssetMapProps {
    hexTypes:HexInfo[];
    count: number;
    startingPopulation?: number;
    radius: number;
    borderSize: number;
    treeScale: number;
    randomFactor: number;
    hideAssets: boolean;
}
  
export function AssetMap({  hexTypes, count, startingPopulation=1000, radius =1 , treeScale = 1, borderSize = 0, randomFactor, hideAssets = false }: AssetMapProps) {

    //Used to generate a new random number for each hex
    const rng = new SeededRNG(randomFactor);

    // Calculate all neighbors once, upfront
    const allNeighbors = getNeighbors(hexTypes, count);

    return (
        <>
            {hexTypes.map((hexInfo, index) => {

                const position = getHexPositionFromGrid(hexInfo.gridPosX, hexInfo.gridPosY, radius, borderSize);
                const neighbors = allNeighbors[index]; // Get the neighbors for the current hex
                const visibleFences = getVisibleFences(neighbors); // Determine visible fences for the current he
                // Determine the type of hexagon and select the corresponding material
                if (hexInfo.HexAssets == "city"){
                   return <> 
                        <CityGen 
                            key={`city-${index}`} // Unique key for each CityGen component
                            cityHexInfo={hexInfo} 
                            radius={radius}
                            borderSize={borderSize}
                            startingPopulation={startingPopulation} 
                        />
                    </>
                } 
                else if (hexInfo.HexAssets == "farm") {
                    return ( 
                        <>
                        <Farm
                            key={`farm-${index}`} // Unique key for each Farm component
                            scale={0.11} 
                            position={[position[0],0.01,position[1]]}
                        />
                        <FarmContours
                            key={`farmContour-${index}`} // Unique key for each Farm component
                            scale={0.11} 
                            position={[position[0],0.01,position[1]]}
                            visibleFences={visibleFences}
                        />
                        </>
                    )
                }
                else if (hexInfo.HexAssets == "oilWell") {
                    return (
                        <OilWell scale={0.015} position={[position[0],0,position[1]]} ></OilWell>
                    )
                }  
                else if (hexInfo.type.includes("grass") && !hideAssets) {
                    return (
                        <Nature
                            key={`nature-${index}`} // Unique key for each Natural component
                            hexInfo={hexInfo} 
                            treeScale={treeScale}
                            radius={radius}
                            borderSize={borderSize}
                            randomNumber={rng.random()}
                        />
                    )
                } 
                else{
                    return null;
                }
            })}
        </>
    );   
}





