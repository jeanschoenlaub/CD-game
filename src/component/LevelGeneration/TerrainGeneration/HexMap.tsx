import React, { type Dispatch, type SetStateAction, useEffect, useMemo } from 'react';
import * as THREE from "three"
import type { HexInfo } from '../LevelGenTypes';
import { getHexPosition, terrainGen} from '../NewMapGen/terrainGen';
import { useMaterials } from './useMaterials';
import { getDataMaterial } from '../NewMapGen/blended-data-textures';
import { getNeighborTypeValue, getNeighbors } from '../NewMapGen/hex-neighbors';
import { blendTerrain } from '../NewMapGen/blended-map-textures';

interface HexMapProps {
    count?: number;
    hexMapInfo: HexInfo[];
    radius?: number;
    borderSize?: number;
  }
  
  export function HexMap({ count = 20, hexMapInfo, radius=1, borderSize=0 }: HexMapProps) {

    const hexNeighbors = getNeighbors(hexMapInfo, count);

    // useEffect(() => {
    //     setHexMapInfo(hexTypesWithBlend);
    // }, [hexTypesWithBlend]); // Dependency


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

                const numberNeighborArray = getNeighborTypeValue(hexNeighbors[index]!)
                //Then for grass materials we need to apply a gradient data textures if one of the neighbors is a sea tile
                if (hexMapInfo[index]?.type == "grass" && (numberNeighborArray.includes(1) || numberNeighborArray.includes(2))){
                        material = getDataMaterial(numberNeighborArray);
                        hexRotation = new THREE.Euler(-Math.PI / 2, 0, - Math.PI/2)
                } 
                    
                return (
                        <mesh
                            key={`hex-${index}`}
                            geometry={boxGeometry}
                            material={material}
                            position={position.toArray()} // Convert Vector3 to array
                            rotation={hexRotation}
                            receiveShadow
                        />
                    );
            })}
        </>
    );
}
