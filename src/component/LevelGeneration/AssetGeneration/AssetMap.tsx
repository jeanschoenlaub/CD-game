import React, { useEffect } from 'react';
import type { HexInfo} from '../LevelGenTypes';
import { CityGen } from './Buildings/City';
import { Nature } from './Nature/Nature';
import { Farm } from './Buildings/Farm';

interface AssetMapProps {
    hexTypes:HexInfo[];
    startingPopulation?: number;
    radius: number;
    borderSize: number;
    treeScale: number;
    seed: number;
}
  
export function AssetMap({  hexTypes, startingPopulation=1000, radius =1 , treeScale = 1, borderSize = 0, seed }: AssetMapProps) {

    useEffect(() => {
        console.log("when generating assts",hexTypes);
    }, [hexTypes]);
    
    return (
        <>
            {hexTypes.map((hexInfo, index) => {
                // Determine the type of hexagon and select the corresponding material
                if (hexInfo.type == "city"){
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
                        <Farm
                            key={`farm-${index}`} // Unique key for each Farm component
                            hexInfo={hexInfo} 
                            radius={radius}
                            borderSize={borderSize}
                            seed={seed}
                        />
                    )
                } 
                else if (hexInfo.type.includes("grass")) {
                    return (
                        <Nature
                            key={`nature-${index}`} // Unique key for each Natural component
                            hexInfo={hexInfo} 
                            treeScale={treeScale}
                            radius={radius}
                            borderSize={borderSize}
                            seed={seed}
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





