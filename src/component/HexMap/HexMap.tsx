import React, { useState } from 'react';
import * as THREE from "three"
import type { HexInfo } from '../LevelGeneration/LevelGenTypes';

import { useMaterials } from './useMaterials';
import { getDataMaterial } from '../LevelGeneration/NewMapGen/blended-data-textures';
import { getNeighborTypeValue, getNeighbors } from '../LevelGeneration/NewMapGen/hex-neighbors';
import getHexPosition, { calculateDistanceBetweenHexes, hexDistance } from '../LevelGeneration/NewMapGen/utils';
import { handleHexClick } from '../clickInteractions/clickLogic';

interface HexMapProps {
    count?: number;
    hexMapInfo: HexInfo[];
    radius?: number;
    borderSize?: number;
    cityPosX: number;
    cityPosY: number;
  }
  
export function HexMap({ count = 20, hexMapInfo, radius=1, borderSize=0, cityPosX, cityPosY }: HexMapProps) {


    const hexNeighbors = getNeighbors(hexMapInfo, count);

    // Load the terrainMaterials 
    const materials = useMaterials();

    // Calculate the positions of the hexagons
    const hexPositions = getHexPosition(count,radius,borderSize)

    /* 
    * Geometries 
    */ 
    const adjustedRadius = radius - borderSize; // Adjust radius to create a border
    const boxGeometry = new THREE.CircleGeometry(adjustedRadius, 6)
    
    return (
        <>
            {hexPositions.map((position, index) => {

                //Defining a few default values
                const hexType = hexMapInfo[index]?.type ?? 'sea';
                let material = materials[hexType] || materials.grass; 
                let hexRotation = hexMapInfo[index]?.rotation;

                //Then for grass materials we need to apply a gradient data textures if one of the neighbors is a sea tile
                const numberNeighborArray = getNeighborTypeValue(hexNeighbors[index]!)
                if (hexMapInfo[index]?.type == "grass" && (numberNeighborArray.includes(1) || numberNeighborArray.includes(2))){
                        material = getDataMaterial(numberNeighborArray);
                        hexRotation = new THREE.Euler(-Math.PI / 2, 0, - Math.PI/2)
                } 

                //Then if close to city we change material to reflect city limits
                const row = Math.floor(index / count);
                const col = index % count; 

                const distanceToCity = calculateDistanceBetweenHexes(col, row, cityPosX, cityPosY, radius, borderSize);

                // Check if the current hex is within 2 tiles of the city
                if (distanceToCity <= Math.sqrt(3)*3+0.1) {
                    // Hex is close to the city, change its material to indicate city limits
                    const highlightedMaterial = material!.clone(); // Clone the material safely
                    highlightedMaterial.emissive = new THREE.Color("white");
                    highlightedMaterial.emissiveIntensity = 0.1;
                    material = highlightedMaterial; // Apply the highlighted material
                }


                // function to trigger a hex click 
                const handleClick = (hexInfo: HexInfo) => {
                    handleHexClick(hexInfo);
                };
                 
                return (
                        <mesh
                            key={`hex-${index}`}
                            geometry={boxGeometry}
                            material={material}
                            position={position.toArray()} // Convert Vector3 to array
                            rotation={hexRotation}
                            onClick={() => handleClick(hexMapInfo[index])}
                            receiveShadow
                        />
                    );
            })}
        </>
    );
}
