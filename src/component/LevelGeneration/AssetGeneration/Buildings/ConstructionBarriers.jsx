import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ConstructionBarriers(props) {
  const { nodes, materials } = useGLTF("/models/construction-barriers/model.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[8.751, 1.456, 2.205]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.347, 0.118, 1.581]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.YellowBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.MetallicGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials.MettalicBllack}
        />
      </group>
      <group
        position={[-8.526, 1.456, -2.246]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.347, 0.118, 1.581]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.YellowBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.MetallicGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials.MettalicBllack}
        />
      </group>
      <group
        position={[6.163, 1.456, -5.909]}
        rotation={[0, Math.PI / 3, -Math.PI / 2]}
        scale={[0.347, 0.118, 1.581]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.YellowBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.MetallicGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials.MettalicBllack}
        />
      </group>
      <group
        position={[-2.604, 1.456, -7.976]}
        rotation={[-Math.PI, Math.PI / 3, Math.PI / 2]}
        scale={[0.347, 0.118, 1.581]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.YellowBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.MetallicGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials.MettalicBllack}
        />
      </group>
      <group
        position={[-6.156, 1.456, 6.221]}
        rotation={[Math.PI, -Math.PI / 3, Math.PI / 2]}
        scale={[0.347, 0.118, 1.581]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.YellowBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.MetallicGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials.MettalicBllack}
        />
      </group>
      <group
        position={[2.611, 1.456, 8.289]}
        rotation={[0, -Math.PI / 3, -Math.PI / 2]}
        scale={[0.347, 0.118, 1.581]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.YellowBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.MetallicGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials.MettalicBllack}
        />
      </group>
    </group>
  );
}

