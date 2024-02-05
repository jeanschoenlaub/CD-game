import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useAudio } from '../Audio/AudioContext';
import { useEffect } from 'react';

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
        '/textures/assets/farmSide.png',
        '/textures/assets/farmTop.png',
        '/textures/terrain/Sea.png',
        '/textures/terrain/Grass.png',
        '/textures/terrain/Mountain.png',
        '/textures/terrain/Desert.png',
        '/textures/terrain/Forest.png',
        '/textures/terrain/City.png',
        '/textures/terrain/Grass1Sea.png',
        '/textures/terrain/Grass2Sea.png',
        '/textures/terrain/Grass3Sea.png',
        '/textures/terrain/Grass4Sea.png',
        '/textures/terrain/Grass5Sea.png',
        '/textures/terrain/Grass6Sea.png',
        '/textures/terrain/Grass1Mountain.png',
        '/textures/terrain/Grass2Mountain.png',
        '/textures/terrain/Grass3Mountain.png',
        '/textures/terrain/Sand1Mountain.png',
        '/textures/terrain/Sand2Mountain.png',
        '/textures/terrain/Sand3Mountain.png',
        '/textures/terrain/Sand4Mountain.png',
        '/textures/terrain/Sand5Mountain.png',
        '/textures/terrain/Sand6Mountain.png',
        '/textures/resources/Wheat1.png',
        '/textures/resources/Wheat2.png',
        '/textures/resources/Wheat3.png',
        '/textures/resources/Coal1.png',
        '/textures/resources/Coal2.png',
        '/textures/resources/Coal3.png',
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
        farmSide: loadedTextures[12],
        farmTop: loadedTextures[13],
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
    wheat1: loadedTextures[assetKeysLength + 21],
    wheat2: loadedTextures[assetKeysLength + 22],
    wheat3: loadedTextures[assetKeysLength + 23],
    coal1: loadedTextures[assetKeysLength + 24],
    coal2: loadedTextures[assetKeysLength + 25],
    coal3: loadedTextures[assetKeysLength + 26],
    };

    const allTexturesLoaded = Object.values(assetTextures).every((texture) => !!texture) && Object.values(terrainTextures).every((texture) => !!texture) 

    return {
      assetTextures: assetTextures,
      terrainTextures: terrainTextures,
      allTexturesLoaded: allTexturesLoaded,
    };
}
