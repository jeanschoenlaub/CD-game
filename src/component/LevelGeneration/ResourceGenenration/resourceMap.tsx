import React, { useMemo } from 'react';
import * as THREE from "three"
import type { HexInfo, Resource } from '../LevelGenTypes';
import { resourceGen } from './resourceGen';
import { useTextures } from '~/features/Loading/TextureLoader';


interface ResourceMapProps {
    count?: number;
    hexTypes: HexInfo[];
    radius?: number;
    borderSize?: number;
}

export function ResourceMap({ count = 20, hexTypes, radius = 1, borderSize = 0 }: ResourceMapProps) {

    const verticalDistance = 1.5 * radius;
    const horizontalDistance = Math.sqrt(3) * radius;

    const hexRessource: Resource[] = resourceGen(hexTypes, count)

    const { terrainTextures, allTexturesLoaded } = useTextures();

    // Calculate the positions of the hexagons
    const hexPositions = useMemo(() => {
        const positions = [];
        for (let row = 0; row < count; row++) {
            for (let col = 0; col < count; col++) {
                const x = col * horizontalDistance + (row % 2 ? horizontalDistance / 2 : 0);
                const z = row * verticalDistance;
                positions.push(new THREE.Vector3(x, 0, z));
            }
        }
        return positions;
    }, [count, horizontalDistance, verticalDistance]);


    //Resource geometries 
    const resourceGeometry = new THREE.PlaneGeometry(0.5, 0.5);
    const resourceRotation = new THREE.Euler(-Math.PI / 2, 0, - Math.PI / 2);

    //Resource materials
    const wheat1Material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: terrainTextures.wheat1, transparent: true });
    const wheat2Material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: terrainTextures.wheat2, transparent: true });
    const wheat3Material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: terrainTextures.wheat3, transparent: true });
    const coal1Material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: terrainTextures.coal1, transparent: true });
    const coal2Material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: terrainTextures.coal2, transparent: true });
    const coal3Material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: terrainTextures.coal3, transparent: true });

    return (
        <>
            {hexPositions.map((position, index) => {
                // Check if the hexagon has a resource
                if (Object.keys(hexRessource[index] ?? {}).length > 0) {
                    // Check if the hex has 2 resources
                    if (Object.keys(hexRessource[index] ?? {}).length == 2) {
                        const resource1CubePosition = new THREE.Vector3(
                            position.x - 0.3,
                            position.y + 0.05,
                            position.z + 0.4
                        );
                        const resource2CubePosition = new THREE.Vector3(
                            position.x + 0.3,
                            position.y + 0.05,
                            position.z + 0.4
                        );
                        let resource1Material = wheat1Material
                        if (Object.values(hexRessource[index] ?? {})[0] == 2) { resource1Material = wheat2Material }
                        else if (Object.values(hexRessource[index] ?? {})[0] == 3) { resource1Material = wheat3Material }
                        let resource2Material = coal1Material
                        if (Object.values(hexRessource[index] ?? {})[1] == 2) { resource2Material = coal2Material }
                        else if (Object.values(hexRessource[index] ?? {})[1] == 3) { resource2Material = coal3Material }

                        return (
                            <>
                                <mesh
                                    key={`wheat-1-${index}`}
                                    geometry={resourceGeometry}
                                    material={resource1Material}
                                    position={resource1CubePosition}
                                    rotation={resourceRotation}
                                    receiveShadow
                                />
                                <mesh
                                    key={`wheat-2-${index}`}
                                    geometry={resourceGeometry}
                                    material={resource2Material}
                                    position={resource2CubePosition}
                                    rotation={resourceRotation}
                                    receiveShadow
                                />
                            </>
                        );
                    } else {
                        // Calculate the position for the wheat cube at the center of the hexagon
                        const wheatCubePosition = new THREE.Vector3(
                            position.x,
                            position.y + 0.05,
                            position.z + 0.4
                        );
                        let resourceMaterial = wheat1Material
                        if (Object.keys(hexRessource[index] ?? {})[0] == "wheat") {
                            resourceMaterial = wheat1Material
                            if (hexRessource[index]?.wheat == 2) { resourceMaterial = wheat2Material }
                            else if (hexRessource[index]?.wheat == 3) { resourceMaterial = wheat3Material }
                        }
                        if (Object.keys(hexRessource[index] ?? {})[0] == "coal") {
                            resourceMaterial = coal1Material
                            if (hexRessource[index]?.coal == 2) { resourceMaterial = coal2Material }
                            else if (hexRessource[index]?.coal == 3) { resourceMaterial = coal3Material }
                        }
                        return (
                            <>
                                <mesh
                                    key={`wheat-${index}`}
                                    geometry={resourceGeometry}
                                    material={resourceMaterial}
                                    position={wheatCubePosition}
                                    rotation={resourceRotation}
                                />
                            </>
                        );
                    }
                }
            })}
        </>
    );
}




