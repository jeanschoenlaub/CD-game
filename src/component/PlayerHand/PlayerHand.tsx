import React, { createRef, useRef, useState } from 'react';
import * as THREE from "three"
import type { HexInfo } from '../LevelGeneration/LevelGenTypes';

//import { useMaterials } from './useMaterials';
import { getDataMaterial } from '../LevelGeneration/NewMapGen/blended-data-textures';
import { getNeighborTypeValue, getNeighbors } from '../LevelGeneration/NewMapGen/hex-neighbors';
import getHexPosition, { calculateDistanceBetweenHexes } from '../LevelGeneration/NewMapGen/utils';
import { handleHexClick } from '../clickInteractions/clickLogic';
import { useFrame, useThree } from '@react-three/fiber';
import { useMaterials } from './useMaterials';

interface PlayerHandProps {
    cards: string[];
}

export function PlayerHand({ cards }) {
    const { camera } = useThree();
    // Create a ref for each card
    const cardRefs = useRef([]);
    cardRefs.current = cards.map((_, index) => cardRefs.current[index] ?? createRef());

    const cardWidth = 2
    const cardHeight = 2.67 
    const cardDistance = 6; // Distance in front of the camera
    const cardOffset = 2; // Horizontal offset between cards

    const boxGeometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
    //default material over-ridded in map below
    const materials = useMaterials();
    let material = materials.cardBuilding

    useFrame(() => {
        cardRefs.current.forEach((ref, index) => {
            const cardMesh = ref.current;
            if (cardMesh) {
                // Calculate the direction in front of the camera
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                direction.multiplyScalar(cardDistance);
                // Calculate the position in front of the camera
                const position = new THREE.Vector3().addVectors(camera.position, direction);
                // Apply horizontal offset based on card index
                position.x += (index - (cards.length - 1) / 2) * cardOffset;
                position.y -= 1.5; // Adjust vertical position as needed

                // Update card position
                cardMesh.position.copy(position);
                // Align card rotation with camera rotation
                cardMesh.rotation.copy(camera.rotation);
            }
        });
    });

    return (
        <>   
        {
            cards.map((card, index) => (
                <mesh
                    key={`card-${index}`}
                    geometry={boxGeometry}
                    material={material}
                    ref={cardRefs.current[index]}
                    // Initial position and rotation are not critical as they will be overridden
                    position={[0, 0, 0]} 
                    rotation={[0, 0, 0]}
                />
            ))}
        </>
    );
}
