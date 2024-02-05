import { useMemo } from 'react';
import * as THREE from 'three';
import type { AssetMaterialType } from '../LevelGenTypes';
import { useTextures } from '../../../features/Loading/TextureLoader';

export const useMaterials = () => {
    const { assetTextures, allTexturesLoaded } = useTextures();

    const stupidMaterials : Record<AssetMaterialType, THREE.MeshStandardMaterial> = {
        buildingSSide1 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide1, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingSSide2 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide2, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingSSide3 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide3, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingSSide4 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide4, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingSTopS : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSTopS, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingMSide1 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingMSide1, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingMSide2 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingMSide2, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingMSide3 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingMSide3, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingLSide1 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide1, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingLSide2 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide2, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingLSide3 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide3, transparent: true, metalness: 0.6, roughness: 0.3}),
        buildingLSide4 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide4, transparent: true, metalness: 0.6, roughness: 0.3}),
        farmSide : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.farmSide, transparent: true, metalness: 0.6, roughness: 0.3}),
        farmTop : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.farmTop, transparent: true, metalness: 0.6, roughness: 0.3}),

        // buildingLTopS : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLTopS, transparent: true, metalness: 0.6, roughness: 0.3}),
        // buildingLTopE : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLTopE, transparent: true, metalness: 0.6, roughness: 0.3}),
        // buildingLTopG : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLTopG, transparent: true, metalness: 0.6, roughness: 0.3}),
    };
    
    const materials = useMemo(() => {
        if (allTexturesLoaded) {
            const newMaterials: Record<AssetMaterialType, THREE.MeshStandardMaterial> = {
            buildingSSide1 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide1, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingSSide2 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide2, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingSSide3 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide3, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingSSide4 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSSide4, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingSTopS : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingSTopS, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingMSide1 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingMSide1, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingMSide2 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingMSide2, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingMSide3 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingMSide3, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingLSide1 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide1, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingLSide2 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide2, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingLSide3 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide3, transparent: true, metalness: 0.6, roughness: 0.3}),
            buildingLSide4 : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLSide4, transparent: true, metalness: 0.6, roughness: 0.3}),
            farmSide : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.farmSide, transparent: true, metalness: 0.6, roughness: 0.3}),
            farmTop : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.farmTop, transparent: true, metalness: 0.6, roughness: 0.3}),
            // buildingLTopS : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLTopS, transparent: true, metalness: 0.6, roughness: 0.3}),
            // buildingLTopE : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLTopE, transparent: true, metalness: 0.6, roughness: 0.3}),
            // buildingLTopG : new THREE.MeshStandardMaterial({ color: 0xffffff, map: assetTextures.buildingLTopG, transparent: true, metalness: 0.6, roughness: 0.3}),
            };
        }
        return stupidMaterials
    }, [assetTextures, allTexturesLoaded]);
;

    return materials;
};