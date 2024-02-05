import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FarmBarn(props) {
  const { nodes, materials } = useGLTF("./models/farm-barn/model.gltf");
  return (
    <group {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["default"]}
        position={[0.472, 0, -0.607]}
        scale={3.761}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindMill001.geometry}
        material={materials.Farm_Pack_001}
        position={[1.264, 1.901, 0.171]}
        scale={0.482}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_White013.geometry}
        material={materials.Farm_Pack_001}
        position={[1.395, -0.006, -2.471]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.099}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wooden_Box.geometry}
        material={materials.Farm_Pack_001}
        position={[0.191, 0.051, 0.211]}
        scale={0.401}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Farm_Pack_001}
        position={[-0.169, 1.048, 0.317]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Well.geometry}
        material={materials.Farm_Pack_001}
        position={[2.078, 0.228, -0.058]}
        scale={[0.142, 0.128, 0.142]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trees.geometry}
        material={materials.Farm_Pack_001}
        position={[0.372, 0.148, -1.363]}
        scale={62.95}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barn_01.geometry}
        material={materials.Farm_Pack_001}
        position={[-0.176, 0.413, -0.179]}
        scale={1.151}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindMill.geometry}
        material={materials.Farm_Pack_001}
        position={[1.264, 1.565, 0.078]}
        scale={0.482}
      /> */}
    </group>
  );
}