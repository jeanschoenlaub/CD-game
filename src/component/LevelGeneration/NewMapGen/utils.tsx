import { useMemo } from "react";
import * as THREE from "three";

export default function getHexPosition(tileCount: number, radius: number, borderSize: number ){
    //Some Hex Math
    const verticalDistance = 1.5 * radius + borderSize;
    const horizontalDistance = Math.sqrt(3) * radius + borderSize;

     // Calculate the positions of the hexagons
     const hexPositions = useMemo(() => {
        const positions: THREE.Vector3[] = [];
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
