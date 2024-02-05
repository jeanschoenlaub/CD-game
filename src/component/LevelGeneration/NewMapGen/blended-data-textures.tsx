import * as THREE from "three";

export function dataTextureGen(numberNeighborArray: number[]) {
    const size = 256;
    const data = new Uint8Array(size * size * 4); // 4 values per pixel for RGBA

    // Define color constants
    const TRANSPARENT = [0, 0, 0, 0];
    const GREEN_GRASS = [92, 159, 106, 255];
    const BEACH_TRANSPARENT = [155, 163, 98, 0];
    const BEACH_SOLID = [223, 172, 95, 255];
    const MOUNTAIN_TRANSPARENT = [128, 143, 89 , 0]
    const MOUNTAIN_SOLID = [165, 128, 72, 255];

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const index = (y * size + x) * 4;

            if (isHexOutline(y, x, size)) {
                setPixelColor(data, index, TRANSPARENT);
            } else {
                setPixelColor(data, index, GREEN_GRASS);
            }

            // BEACH PART

            if (numberNeighborArray[0] === 1 && isHexCorner(y, x, size/4, 1.75, 0)) {//NE
                setPixelColor(data, index, BEACH_TRANSPARENT);
            }
            if (numberNeighborArray[1] === 1 && y> 4* size/5 ) {//E
                setPixelColor(data, index, BEACH_TRANSPARENT);
            }
            if (numberNeighborArray[2] === 1 && isHexCorner(y, x, size*2, 1.75, 2)) {//SE
                setPixelColor(data, index, BEACH_TRANSPARENT);
            }
            if (numberNeighborArray[3] === 1 && isHexCorner(y, x, size, 1.75, 3)) {//SW
                setPixelColor(data, index, BEACH_TRANSPARENT);
            }  
            if (numberNeighborArray[4] === 1 && y< 1/5*size) {//W
                setPixelColor(data, index, BEACH_TRANSPARENT);
            }
            if (numberNeighborArray[5] === 1 && isHexCorner(y, x, 3*size/4, 1.75, 5)) {//NW
                setPixelColor(data, index, BEACH_TRANSPARENT);
            }
            
            if (numberNeighborArray[0] === 1 && isHexCorner(y, x, 3*size/8, 1.75, 0)) {//NE
                setPixelColor(data, index, BEACH_SOLID);
            }
            if (numberNeighborArray[1] === 1 && y>7/8*size) {//E
                setPixelColor(data, index, BEACH_SOLID);
            }
            if (numberNeighborArray[2] === 1 && isHexCorner(y, x, 2.1 * size, 1.75, 2)) {//SE
                setPixelColor(data, index, BEACH_SOLID);
            }
            if (numberNeighborArray[3] === 1 && isHexCorner(y, x, 9/8*size, 1.75, 3)) {//SW
                setPixelColor(data, index, BEACH_SOLID);
            }
            if (numberNeighborArray[4] === 1 && y<1/8*size) {//W
                setPixelColor(data, index, BEACH_SOLID);
            }
            if (numberNeighborArray[5] === 1 && isHexCorner(y, x, 5/8*size, 1.75, 5)) {//NW
                setPixelColor(data, index, BEACH_SOLID);
            }

            // MOUNTAIN PART

            if (numberNeighborArray[0] === 2 && isHexCorner(y, x, size/4, 1.75, 0)) {//NE
                setPixelColor(data, index, MOUNTAIN_TRANSPARENT);
            }
            if (numberNeighborArray[1] === 2 && y> 4* size/5 ) {//E
                setPixelColor(data, index, MOUNTAIN_TRANSPARENT);
            }
            if (numberNeighborArray[2] === 2 && isHexCorner(y, x, size*2, 1.75, 2)) {//SE
                setPixelColor(data, index, MOUNTAIN_TRANSPARENT);
            }
            if (numberNeighborArray[3] === 2 && isHexCorner(y, x, size, 1.75, 3)) {//SW
                setPixelColor(data, index, MOUNTAIN_TRANSPARENT);
            }  
            if (numberNeighborArray[4] === 2 && y< 1/5*size) {//W
                setPixelColor(data, index, MOUNTAIN_TRANSPARENT);
            }
            if (numberNeighborArray[5] === 2 && isHexCorner(y, x, 3*size/4, 1.75, 5)) {//NW
                setPixelColor(data, index, MOUNTAIN_TRANSPARENT);
            }
            
            if (numberNeighborArray[0] === 2 && isHexCorner(y, x, 3*size/8, 1.75, 0)) {//NE
                setPixelColor(data, index, MOUNTAIN_SOLID);
            }
            if (numberNeighborArray[1] === 2 && y>7/8*size) {//E
                setPixelColor(data, index, MOUNTAIN_SOLID);
            }
            if (numberNeighborArray[2] === 2 && isHexCorner(y, x, 2.1 * size, 1.75, 2)) {//SE
                setPixelColor(data, index, MOUNTAIN_SOLID);
            }
            if (numberNeighborArray[3] === 2 && isHexCorner(y, x, 9/8*size, 1.75, 3)) {//SW
                setPixelColor(data, index, MOUNTAIN_SOLID);
            }
            if (numberNeighborArray[4] === 2 && y<1/8*size) {//W
                setPixelColor(data, index, MOUNTAIN_SOLID);
            }
            if (numberNeighborArray[5] === 2 && isHexCorner(y, x, 5/8*size, 1.75, 5)) {//NW
                setPixelColor(data, index, MOUNTAIN_SOLID);
            }
            
        }
    }

    // Create a data texture
    const dataTexture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    dataTexture.colorSpace = THREE.SRGBColorSpace; 
    dataTexture.needsUpdate = true;

    // Use this texture in a material
    const dataMaterial = new THREE.MeshStandardMaterial({ map: dataTexture, flatShading: true , metalness: 0.6, roughness: 0.9});

    return dataMaterial
}

function setPixelColor(data: Uint8Array, index: number, color: number[]): void {
    if (color.length !== 4) {
        throw new Error("Color array must have exactly four elements (RGBA).");
    }
    data.set(color, index);
}


function isHexOutline(y:number, x:number, size:number) {
    return (
        y < 1/16*size || y > 15/16*size ||
        y < size/2 - 2 * x ||
        y > size/2 + 2 * x ||
        y < 2 * x - 3/2*size ||
        y > -2 * x + 5/2 * size
    );
}     

function isHexCorner(y: number, x: number, threshold: number, slope: number, direction: number): boolean {
    switch (direction) {
        case 0: // NE
            return y > threshold + slope * x;
        case 1: // E
            return false
        case 2: // SE
            return y > -slope * x + threshold;
        case 3: // SW
            return y < slope * x - threshold;
        case 4: // W
            return false
        case 5: // NW
            return y < threshold - slope * x;
        // Add other cases for different directions
        default:
            return false;
    }
}


const textureCache = new Map();

export const getDataMaterial = (numberNeighborArray: number[]) => {
    const key = numberNeighborArray.join('-'); // Create a unique key for the texture
    if (textureCache.has(key)) {
        return textureCache.get(key);
    }

    const newMaterial = dataTextureGen(numberNeighborArray);
    textureCache.set(key, newMaterial);
    return newMaterial;
};