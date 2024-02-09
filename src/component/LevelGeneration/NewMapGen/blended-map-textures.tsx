import { HexInfo, MaterialType, NeighborHexInfo } from "../LevelGenTypes";
import { getNeighbors } from "./hex-neighbors";
import * as THREE from "three";

export function blendTerrain(hextype: HexInfo[], count: number ): HexInfo[] {
    
    // BLEND GRASS AND SEA
    const neighborArray = getNeighbors(hextype, count);
    const grassNeighborArray: NeighborHexInfo[][] = [];
  
    neighborArray.forEach((tileNeighbors, index) => {
        // Filter neighbors where type is 'grass'
        const grassNeighbors = tileNeighbors.filter(neighbor => neighbor.type === 'sea' || neighbor.type === 'desert');
        grassNeighborArray[index] = grassNeighbors;
    });
    let blendedTextureNames = ['grass1Sea','grass2Sea','grass3Sea','grass4Sea','grass5Sea','grass6Sea']
    changeTilesForBlended(hextype, grassNeighborArray, blendedTextureNames, count)
  
    neighborArray.forEach((tileNeighbors, index) => {
        // Filter neighbors where type is 'grass'
        const grassNeighbors = tileNeighbors.filter(neighbor => neighbor.type === 'mountain');
        grassNeighborArray[index] = grassNeighbors;
    });
    blendedTextureNames = ['grass1Mountain','grass2Mountain','grass3Mountain']
    changeTilesForBlended(hextype, grassNeighborArray, blendedTextureNames, count)
   
      
    return hextype.map((hexType, index) => ({
        ...hexType,
        hexNeighbors: neighborArray[index]
    }));
}


type RotationMap = Record<string,THREE.Euler>;
  
function changeTilesForBlended (hextype : HexInfo[], grassNeighborArray: NeighborHexInfo[][], blendedTextureNames: string[], count: number) {
    //Keys must be in alphabetical order
    const rotationMapping: RotationMap= {
        "W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2),
        "E": new THREE.Euler(-Math.PI / 2, 0, -Math.PI / 2),
        "NE": new THREE.Euler(-Math.PI / 2, 0, -Math.PI / 2 + Math.PI / 3),
        "NW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI / 3),
        "SE": new THREE.Euler(-Math.PI / 2, 0, -Math.PI / 2 - Math.PI / 3),
        "SW": new THREE.Euler(-Math.PI / 2, 0, -Math.PI / 2 - Math.PI * 2 / 3),
        // Combination of two directions
        "NW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI / 3),
        "SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2),
        "E,NE": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI),
        "E,SE": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 + 2 * Math.PI / 3),
        "NE,NW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - 2 * Math.PI / 3),
        "SE,SW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 + Math.PI / 3),
        // Combination of three directions
        "NE,NW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI / 3),
        "NW,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2),
        "SE,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 + Math.PI / 3),
        "E,NE,SE": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI),
        "E,NE,NW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - 2 * Math.PI / 3),
        "E,SE,SW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - 4 * Math.PI / 3),
        // Combination of four directions
        "E,NE,NW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI / 3),
        "E,NE,NW,SE": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - 2/3* Math.PI),
        "NE,NW,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2),
        "NW,SE,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 + Math.PI / 3),
        "E,NE,SE,SW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI),
        "E,SE,SW,W": new THREE.Euler(-Math.PI / 2, 0, - Math.PI / 2 - Math.PI/3),
        // Combination of five directions
        "E,NE,NW,SE,SW": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - 2* Math.PI / 3),
        "E,NE,NW,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 ),
        "NE,NW,SE,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 + 1/3* Math.PI),
        "E,NE,SE,SW,W": new THREE.Euler(-Math.PI / 2, 0,- Math.PI / 2 ),
        "E,NW,SE,SW,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 + 2* Math.PI / 3),
        "E,NE,NW,SE,W": new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2 - Math.PI / 3),
        
        // All six directions
        "E,NE,NW,SE,SW,W": new THREE.Euler(-Math.PI / 2, 0, -Math.PI / 2 + Math.PI / 3)
    };
      
    for (let row = 0; row < count; row++) {
        for (let col = 0; col < count; col++) {
            // Calculate the index based on row and column
            const i = row * count + col;
            const tileNeighbors = grassNeighborArray[i];
    
            if (tileNeighbors && hextype[i]?.type == "grass") {
                if (tileNeighbors.length > 0 && blendedTextureNames[tileNeighbors.length - 1]) {
                    // Sort the directions alphabetically and then join them to form the key
                    const directionKey = tileNeighbors.map(n => n.direction).sort().join(',');
                    const rotation = rotationMapping[directionKey];
            
                    if (rotation) {
                        hextype[i] = { type: blendedTextureNames[tileNeighbors.length - 1] as MaterialType, rotation, gridPosX: col, gridPosY: row };
                    }
                }
            }
        }
    }
  }
  