import { useMemo } from 'react';
import * as THREE from 'three';
import type { MaterialType } from '../LevelGeneration/LevelGenTypes';
import { useTextures } from '../../features/Loading/TextureLoader';

export const useMaterials = () => {
    const { terrainTextures, allTexturesLoaded } = useTextures();

    const materials: Partial<Record<MaterialType, THREE.MeshStandardMaterial>> = useMemo(() => {
        if (!allTexturesLoaded) return {}; 
        else{ return{
                sea: new THREE.MeshStandardMaterial({ map: terrainTextures.sea, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass: new THREE.MeshStandardMaterial({ map: terrainTextures.grass, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass1Sea: new THREE.MeshStandardMaterial({ map: terrainTextures.grass1Sea, flatShading: true, metalness: 0.6, roughness: 0.9}),
                grass2Sea: new THREE.MeshStandardMaterial({ map: terrainTextures.grass2Sea, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass3Sea: new THREE.MeshStandardMaterial({ map: terrainTextures.grass3Sea, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass4Sea: new THREE.MeshStandardMaterial({ map: terrainTextures.grass4Sea, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass5Sea: new THREE.MeshStandardMaterial({ map: terrainTextures.grass5Sea, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass6Sea: new THREE.MeshStandardMaterial({ map: terrainTextures.grass6Sea, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass1Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.grass1Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass2Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.grass2Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                grass3Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.grass3Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                sand1Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.sand1Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                sand2Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.sand2Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                sand3Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.sand3Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                sand4Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.sand4Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                sand5Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.sand5Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                sand6Mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.sand6Mountain, flatShading: true, metalness: 0.6, roughness: 0.9 }),
                mountain: new THREE.MeshStandardMaterial({ map: terrainTextures.mountain, flatShading: true, metalness: 0.6, roughness: 0.9}),
                desert: new THREE.MeshStandardMaterial({ map: terrainTextures.desert, flatShading: true , metalness: 0.6, roughness: 0.9}),
                forest: new THREE.MeshStandardMaterial({ map: terrainTextures.forest, flatShading: true , metalness: 0.6, roughness: 0.9}),
                city: new THREE.MeshStandardMaterial({ map: terrainTextures.city, flatShading: true , metalness: 0.6, roughness: 0.9}),
                farm: new THREE.MeshStandardMaterial({ map: terrainTextures.desert, flatShading: true, metalness: 0.6, roughness: 0.9 }),
        }
    }
    }, [allTexturesLoaded, terrainTextures]);

    return materials;
};
