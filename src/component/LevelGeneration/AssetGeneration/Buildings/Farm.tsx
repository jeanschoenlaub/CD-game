import * as THREE from "three";
import React from "react";

import { HexInfo } from "../../LevelGenTypes";
import { FarmBarn } from './FarmBarn.jsx';
import { useMaterials } from "../useMaterials";
import { getHexPositionFromGrid } from "../../NewMapGen/utils.js";

interface FarmProps {
    hexInfo: HexInfo;
    radius: number;
    borderSize: number;
}
  
export function Farm({ hexInfo, radius, borderSize}: FarmProps) {

    const position = getHexPositionFromGrid(hexInfo.gridPosX, hexInfo.gridPosY, radius, borderSize);

    const fieldGeometry = new THREE.BoxGeometry(1,1,1)

    const materials = useMaterials();

    const fieldMaterial =[
        materials.farmSide, // Right side
        materials.farmSide, // Left side
        materials.farmTop,   // Top side
        materials.farmSide, // Front side
        materials.farmSide, // Back side
        materials.farmSide, // Bottom, buggy if empty
    ];

    // Set transparent to false for each material
    fieldMaterial.forEach(material => {
        if (material) {
            material.transparent = false;
        }
    });

    return (
    <>
        <FarmBarn
            key={"1"}
            scale={0.5}
            position={[position[0]!-0.5,0,position[1]]}
        />
        <mesh
            key={`wheatfield`}
            geometry={fieldGeometry}
            material={fieldMaterial}
            position={new THREE.Vector3(position[0]!+0.2,0,position[1])}
            rotation={new THREE.Euler(0, 0, 0)}
            scale={new THREE.Vector3(0.7, 0.2, 0.7)}
            castShadow
        />
    </>
    )
}