import type { HexInfo } from "../LevelGeneration/LevelGenTypes";
import * as THREE from "three"
import { SeededRNG } from "../LevelGeneration/utilsSeed";


// This function assigns Hex terrain (eg. sea, desert ..) based on hardcoded rules and random number for each level 
export function lvl1HexTerrain(count: number, probaMountain:number, probaDesert:number, cityPosX : number, cityPosY: number, randomFactor: number): HexInfo[] {
    const hexTypes: HexInfo[] = []

    const rng = new SeededRNG(randomFactor);

    for (let row = 0; row < count; row++) {
        for (let col = 0; col < count; col++) {
            // Calculate distance from the center of the grid
            const centerX = (count / 2) - 0.2; // offset due to 0,0,0 beign top left tile
            const centerZ = (count / 2) - 0.5; // offset due to 0,0,0 beign top left tile
            const distanceFromCenter = Math.sqrt(Math.pow(centerX - col, 2) + Math.pow(centerZ - row, 2));
            const map_max_radius = count / 2;

            // Object to store hex type and rotation, initialised with default sea value
            const hexInfo: HexInfo  = { type: "sea", rotation: new THREE.Euler(-Math.PI / 2, 0, - Math.PI / 2), gridPosX:col, gridPosY:row};
            
            // If side of map, the sea
            if (col==0 || col == count-1 || row==0 || row == count-1)
                {hexInfo.type = "sea";}
            // Add a bit of noise on map edges
            else if (distanceFromCenter > 70 / 100 * map_max_radius) {
                hexInfo.type = rng.random() > 0.9 ? "grass" : "sea"; 
            } 
            // Make sure no moutain or desert touching sea
            else if (distanceFromCenter >= 45 / 100 * map_max_radius) {
                hexInfo.type = "grass"; 
            } 
            // Closer to map center we put desert on top and moutain below with low proba
            else if (distanceFromCenter < 45 /100 * map_max_radius) {
                if (row > count/2){
                    hexInfo.type = rng.random() > probaMountain ? "grass" : "mountain";// South mountains
                }else if (row + 1 < count/2){
                    hexInfo.type = rng.random() > probaDesert ? "grass" : "desert"; // North desert
                }
                //We make sure no moutain touch desert in the middle of map
                else {
                    hexInfo.type = "grass"; 
                }
            }

            //City position's
            if (row == cityPosY && col == cityPosX){hexInfo.type = "city"; hexInfo.HexAssets = "city";}

            hexTypes.push(hexInfo);
        }
    }
    return hexTypes;
}


export function lvl1InitialHexAssetsAssignment(count: number, hexMapInfo: HexInfo[], nbFarm: number, cityPosX: number, cityPosY: number) {
    let farmLeftToPlace = nbFarm;

    return hexMapInfo.map((hex, index) => {
        const row = Math.floor(index / count);
        const col = index % count;

        if ((row <= cityPosY + 3  && row >= cityPosY - 3) && ((col <= cityPosX + 3 && col >= cityPosX - 3) )&& hex.type === "grass" && farmLeftToPlace > 0) {
            farmLeftToPlace--;
            return { ...hex, HexAssets: "farm" }; // Update the object with HexAssets
        }

        return hex; // Return the original hex if no update is needed
    });
}