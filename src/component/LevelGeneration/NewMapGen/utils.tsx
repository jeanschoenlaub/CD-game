import { useMemo } from "react";
import * as THREE from "three";

export function seededGridRandom(seed: number, gridPosX: number, gridPosY: number) {
    var combinedSeed = seed + gridPosX * 31 + gridPosY * 17; // Combine seed with grid positions
    var x = Math.sin(combinedSeed) * 10000;
    return x - Math.floor(x);
}

interface SeedInput {
    tileCount: number;
    mountainProba: number;
    desertProba: number;
    startingPopulation: number;
    treeScale: number;
    nbFarms: number;
    randomFactor: number;
}


// export function generateSeed(input: SeedInput): number {
//     // Simple hash function to mix the inputs
//     const hash = (x: string): number => {
//         let h = 0;
//         for (let i = 0; i < x.length; i++) {
//             h = Math.imul(31, h) + x.charCodeAt(i) | 0;
//         }
//         return h;
//     };

//     // Combine the control values into a string and add random element
//     const combined = `${input.tileCount}-${input.mountainProba}-${input.desertProba}-${input.startingPopulation}-${input.nbFarms}-${Math.random()}`;

//     // Return the hashed value
//     return hash(combined);
// }

export function generateSeed(input: SeedInput) {
    input.randomFactor = Math.random();

    // Convert the input object to a JSON string
    const inputString = JSON.stringify(input);

    // Encode the string to Base64
    const encodedSeed = btoa(inputString);

    return encodedSeed;
}

export function getHexPosition(tileCount: number, radius: number, borderSize: number ){
    //Some Hex Math
    const verticalDistance = 1.5 * radius + borderSize;
    const horizontalDistance = Math.sqrt(3) * radius + borderSize;

     // Calculate the positions of the hexagons
     const hexPositions = useMemo(() => {
        const positions = [];
        for (let row = 0; row < tileCount; row++) {
            for (let col = 0; col < tileCount; col++) {
                const x = col * horizontalDistance + (row % 2 ? horizontalDistance / 2 : 0);
                const z = row * verticalDistance;
                positions.push(new THREE.Vector3(x, 0, z));
            }
        }
        return positions;
    }, [tileCount, horizontalDistance, verticalDistance]);

    return hexPositions;
}


export function getHexPositionFromGrid(gridPosX: number, gridPosY: number, radius: number, borderSize: number ){
    //Some Hex Math
    const verticalDistance = 1.5 * radius + borderSize;
    const horizontalDistance = Math.sqrt(3) * radius + borderSize;

    const x = gridPosX * horizontalDistance + (gridPosY % 2 ? horizontalDistance / 2 : 0);
    const z = gridPosY * verticalDistance;


    return [x,z];

}

export function hashStringToNumber(str: string) {
    let hash = 0;
    if (str.length === 0) return hash;

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export function decodeSeed(encodedSeed:string ) {
    try {
        const decodedString = atob(encodedSeed); // Decode base64 to string
        const seedObject = JSON.parse(decodedString); // Parse string to JSON

        // Extract parameters from the seed object
        const tileCount = seedObject.tileCount;
        const mountainProba = seedObject.mountainProba;
        const desertProba = seedObject.desertProba;
        const startingPopulation = seedObject.startingPopulation;
        const treeScale = seedObject.treeScale;
        const nbFarms = seedObject.nbFarms;
        const randomFactor = seedObject.randomFactor;

        return {
            tileCount,
            mountainProba,
            desertProba,
            startingPopulation,
            treeScale,
            nbFarms,
            randomFactor
        };
    } catch (error) {
        console.error("Error decoding seed:", error);
        return null; // or a default object
    }
}