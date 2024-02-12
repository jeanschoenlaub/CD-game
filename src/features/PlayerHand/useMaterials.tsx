import { useMemo } from 'react';
import * as THREE from 'three';
import { useTextures } from '../Loading/TextureLoader';

export type CardMaterialType = 
    'cardBuilding' | 'cardPolicy' 


export const useMaterials = () => {
    const { cardTextures, allTexturesLoaded } = useTextures();

    //using meshBasicMaterial so the lighting of the card does not depend on camera orientation  
    const materials: Partial<Record<CardMaterialType, THREE.MeshBasicMaterial>> = useMemo(() => {
        if (!allTexturesLoaded) return {}; 
        else{ return{
            cardBuilding: new THREE.MeshBasicMaterial({ map: cardTextures.policyCard }),
            cardPolicy: new THREE.MeshBasicMaterial({ map: cardTextures.buildingCard }),
        }
    }
    }, [allTexturesLoaded, cardTextures]);

    return materials;
};
