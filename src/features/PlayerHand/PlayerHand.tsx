import React, { createRef, useRef, useState } from 'react';
import * as THREE from "three"

import { type ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { useMaterials } from './useMaterials';

interface PlayerHandProps {
    cards: string[];
}

export function PlayerHand({ cards }: PlayerHandProps) {

    const { camera } = useThree();
    // Create a ref for each card
    const cardRefs = useRef([]);
    cardRefs.current = cards.map((_, index) => cardRefs.current[index] ?? createRef());

    /*
    * Card Paramerts
    */
    const cardWidth = 1
    const cardHeight = 1.33 
    const cardDistance = 4; // Distance in front of the camera
    const cardHorizontalOffset = cardWidth*0.5; // Horizontal offset between cards
    const cardVerticalOffset = cardHeight*0.9; // Horizontal offset between cards
    const fanOffset = 0.1; // to make each next card a bit more towards camera
    const scaleFactor = 1.1; //When card hovered or clicked
    const hoverForwardOffset = 0.5; // The amount to move the card forward when hovered
    const hoverVerticalOffset = -cardHeight*0.3; // The amount to move the card up when hovered

    /*
    * Card Geometry with default texture over-ridden in map below
    */
    const boxGeometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
    const materials = useMaterials();
    let material = materials.cardBuilding
    
    /*
    * Card Functions 
    */
    function handleCardSelect(cardUniqueId:string, event: ThreeEvent<PointerEvent>, cardRef) {
        event.stopPropagation()
        console.log(cardUniqueId, "selected")
    }

    function handleCardDrop(cardUniqueId:string, cardRef) {
        console.log("card drop")
    }

    function handleCardHoverIn(cardUniqueId:string,event: ThreeEvent<PointerEvent>, cardRef) {
        event.stopPropagation()
        // Mark the card as hovered, which is then handled in useFrame() animation
        if (cardRef.current) {
            cardRef.current.userData.isHovered = true; 
        }
    }
    function handleCardHoverOut(cardUniqueId:string, event, cardRef) {
        event.stopPropagation()
        // cardRef.current.scale.set(1,1,1);
        if (cardRef.current) {
            cardRef.current.userData.isHovered = false; // Unmark the hover state
        }
    }


    /*
    * Animation to keep the cards at the bottom of the screen and facing the camera
    * Also handles the hovered stteanimation 
    */
    useFrame(() => {
        const forwardOffset = cardDistance; // Distance in front of the camera
        const lateralOffsetMultiplier = cardHorizontalOffset; // Lateral distribution of cards
    
        cardRefs.current.forEach((ref, index, { length }) => {
            const cardMesh = ref.current;
            if (cardMesh) {

                const startPosition = camera.position.clone();

                // Calculate lateral offset based on card index to distribute "fan like"
                const lateralOffset = (index - (length - 1) / 2) * lateralOffsetMultiplier;

                // Calculate additional forward offset for the fan effect (ie each new card is a bit "above" last one)
                let additionalForwardOffset = index  * fanOffset;
                let additionalVerticalOffset = 0

                //Logic for managin the hovered state
                if (cardMesh.userData.isHovered) {
                    additionalForwardOffset += hoverForwardOffset; // Move forward so user can read effects "above" other cards
                    additionalVerticalOffset += hoverVerticalOffset // Move up so user can read effects so the card is fully displayed
                    cardMesh.scale.set(scaleFactor,scaleFactor,scaleFactor);// Apply scale factor for hover effect
                } else {
                    // smoothly reset the scale if not hovered (could do the same for pos but effect looks nice already)
                    cardMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1); // Smoothly reset scale
                }
                

                // Create vectors for the forward, lateral, and vertical offsets in the camera's local space, applying additional offset defined above
                const localForwardOffset = new THREE.Vector3(0, 0, -(forwardOffset - additionalForwardOffset));
                const localLateralOffset = new THREE.Vector3(lateralOffset, 0, 0);
                const localVerticalOffset = new THREE.Vector3(0, - cardVerticalOffset -additionalVerticalOffset, 0);
    
                // Transform the local offsets to world space using the camera's orientation
                const worldForwardOffset = localForwardOffset.applyQuaternion(camera.quaternion);
                const worldLateralOffset = localLateralOffset.applyQuaternion(camera.quaternion);
                const worldVerticalOffset = localVerticalOffset.applyQuaternion(camera.quaternion);
    
                // Combine the world space offsets with the camera's position to get the final position
                const finalPosition = startPosition.add(worldForwardOffset).add(worldLateralOffset).add(worldVerticalOffset);
    
                // Update card position
                cardMesh.position.copy(finalPosition);
    
                // Adjust card orientation to face the camera (with tweaking for external cards not done)
                cardMesh.lookAt(new THREE.Vector3(
                    camera.position.x,// - lateralOffset,
                    camera.position.y-1,
                    camera.position.z,//cameraDirection.z*lateralOffset,
                ));
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
                    onPointerDown={(event) => handleCardSelect(cards[index],event, cardRefs.current[index])}
                    onPointerUp={() => handleCardDrop(cards[index], cardRefs.current[index])}
                    //PERF these could be quite CPU intensive as testing each frame
                    onPointerEnter={(event) => handleCardHoverIn(cards[index],event, cardRefs.current[index])}
                    onPointerLeave={(event) => handleCardHoverOut(cards[index], event, cardRefs.current[index])}
                />
            ))}
        </>
    );
}
