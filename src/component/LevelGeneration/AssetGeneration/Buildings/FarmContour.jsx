import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FarmContours(props) {
  const { nodes, materials } = useGLTF("models/farm/hexContour.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials.MediumDarkWood}
        position={[-7.88, 1.01, -4.514]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
        scale={[0.145, 0.978, 0.187]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials.MediumDarkWood}
        position={[-7.886, 1.01, 4.594]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.145, 0.978, 0.187]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.MediumDarkWood}
        position={[-0.06, 1.01, -8.948]}
        rotation={[0, Math.PI / 3, 0]}
        scale={[0.145, 0.978, 0.187]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.MediumDarkWood}
        position={[7.773, 1.101, 4.675]}
        rotation={[0, -Math.PI / 3, 0]}
        scale={[0.145, 0.978, 0.187]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.MediumDarkWood}
        position={[7.778, 1.101, -4.433]}
        scale={[0.145, 0.978, 0.187]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.MediumDarkWood}
        position={[-0.048, 1.101, 9.108]}
        rotation={[Math.PI, -Math.PI / 3, Math.PI]}
        scale={[0.145, 0.978, 0.187]}
      />
    </group>
  );
}