import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export function useTextures() {
    const textureData = [
        '/textures/assets/BuildingSSide1.png',
        '/textures/assets/BuildingSSide2.png',
        '/textures/assets/BuildingSSide3.png',
        '/textures/assets/BuildingSSide4.png',
        '/textures/assets/BuildingSTopS.png',
        '/textures/assets/BuildingMSide1.png',
        '/textures/assets/BuildingMSide2.png',
        '/textures/assets/BuildingMSide3.png',
        '/textures/assets/BuildingLSide1.png',
        '/textures/assets/BuildingLSide2.png',
        '/textures/assets/BuildingLSide3.png',
        '/textures/assets/BuildingLSide4.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Desert.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Forest.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/City.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass1Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass2Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass3Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass4Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass5Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass6Sea.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass1Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass2Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Grass3Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sand1Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sand2Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sand3Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sand4Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sand5Mountain.png',
        'https://cool-down-textures.s3.us-west-2.amazonaws.com/terrain/Sand6Mountain.png',
    ];

    // Use useLoader to load all textures at once
    const loadedTextures = useLoader(THREE.TextureLoader, textureData);

    // Set color space to RGB
    loadedTextures.forEach((texture) => {
        texture.colorSpace = THREE.SRGBColorSpace; 
    });
    
    // Map loaded textures to their names
    const assetTextures = {
        buildingSSide1: loadedTextures[0],
        buildingSSide2: loadedTextures[1],
        buildingSSide3: loadedTextures[2],
        buildingSSide4: loadedTextures[3],
        buildingSTopS: loadedTextures[4],
        buildingMSide1: loadedTextures[5],
        buildingMSide2: loadedTextures[6], 
        buildingMSide3: loadedTextures[7],
        buildingLSide1: loadedTextures[8],
        buildingLSide2: loadedTextures[9],
        buildingLSide3: loadedTextures[10],
        buildingLSide4: loadedTextures[11],
    };

    const assetKeysLength = Object.keys(assetTextures).length;

    const terrainTextures = {
    sea: loadedTextures[assetKeysLength],
    grass: loadedTextures[assetKeysLength + 1],
    mountain: loadedTextures[assetKeysLength + 2],
    desert: loadedTextures[assetKeysLength + 3],
    forest: loadedTextures[assetKeysLength + 4],
    city: loadedTextures[assetKeysLength + 5],
    grass1Sea: loadedTextures[assetKeysLength + 6],
    grass2Sea: loadedTextures[assetKeysLength + 7],
    grass3Sea: loadedTextures[assetKeysLength + 8],
    grass4Sea: loadedTextures[assetKeysLength + 9],
    grass5Sea: loadedTextures[assetKeysLength + 10],
    grass6Sea: loadedTextures[assetKeysLength + 11],
    grass1Mountain: loadedTextures[assetKeysLength + 12],
    grass2Mountain: loadedTextures[assetKeysLength + 13],
    grass3Mountain: loadedTextures[assetKeysLength + 14],
    sand1Mountain: loadedTextures[assetKeysLength + 15],
    sand2Mountain: loadedTextures[assetKeysLength + 16],
    sand3Mountain: loadedTextures[assetKeysLength + 17],
    sand4Mountain: loadedTextures[assetKeysLength + 18],
    sand5Mountain: loadedTextures[assetKeysLength + 19],
    sand6Mountain: loadedTextures[assetKeysLength + 20],
    };

    const terrainKeysLength = Object.keys(terrainTextures).length;


    const allTexturesLoaded = Object.values(assetTextures).every((texture) => !!texture) 
                            && Object.values(terrainTextures).every((texture) => !!texture)

    return {
      assetTextures: assetTextures,
      terrainTextures: terrainTextures,
      allTexturesLoaded: allTexturesLoaded,
    };
}
