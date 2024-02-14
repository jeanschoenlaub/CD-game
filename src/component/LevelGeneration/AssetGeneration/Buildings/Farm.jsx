import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Farm(props) {
  const { nodes, materials } = useGLTF("/models/farm/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.MediumDarkWood}
        position={[-6.201, -0.035, 0.607]}
        scale={[1.5, 1.089, 4.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.wheatsimple}
        position={[6.072, 0.235, 0.567]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.365, -0.254, -4.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.GrassSimple}
        position={[-0.198, 0.235, -5.207]}
        rotation={[0, 1.571, 0]}
        scale={[-1.329, -0.254, -3.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.wheatsimple}
        position={[1.422, 0.235, 6.109]}
        rotation={[0, 1.571, 0]}
        scale={[-1.097, -0.254, -1.645]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.WheatMature}
        position={[5.981, 0.235, 6.109]}
        rotation={[0, 1.571, 0]}
        scale={[-1.097, -0.254, -2.861]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.WheatMature}
        position={[6.811, 0.235, -5.158]}
        rotation={[0, 1.571, 0]}
        scale={[-1.329, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.GrassSimple}
        position={[-2.136, 0.235, 5.939]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.971, -0.254, -2.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.WheatMature}
        position={[-2.605, 0.235, 7.911]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.971, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.WheatMature}
        position={[-5.688, 0.235, 5.976]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.971, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.wheatsimple}
        position={[2.604, 0.235, -7.55]}
        rotation={[0, 1.571, 0]}
        scale={[-0.971, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.wheatsimple}
        position={[-2.908, 0.235, -7.548]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[-0.971, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.wheatsimple}
        position={[-6.524, 0.235, -5.547]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[-0.971, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.MettalicRed}
        position={[0.091, 1.392, 2.72]}
        rotation={[0, -1.571, 0]}
        scale={[1.551, 1.318, 3.686]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Roof}
        position={[0.091, 1.323, 2.72]}
        rotation={[0, -1.571, 0]}
        scale={[1.695, 1.44, 4.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.MettalicRed}
        position={[-5.597, 0.477, -1.616]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[0.307, 0.232, 0.217]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.MetallicGray}
        position={[-5.321, 0.319, -1.391]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.035, -0.03, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials.MetallicGray}
        position={[-5.88, 0.319, -1.391]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.035, -0.03, -0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials.MetallicGray}
        position={[-5.72, 0.829, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.035, -0.121, -0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.MettalicRed}
        position={[-6.715, 0.477, 3.015]}
        rotation={[Math.PI, -1.571, 0]}
        scale={[0.307, 0.232, 0.217]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.MetallicGray}
        position={[-6.991, 0.319, 2.79]}
        rotation={[0, -1.571, 0]}
        scale={[-0.035, -0.03, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.MetallicGray}
        position={[-6.432, 0.319, 2.79]}
        rotation={[0, -1.571, 0]}
        scale={[-0.035, -0.03, -0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.MetallicGray}
        position={[-6.592, 0.829, 2.962]}
        rotation={[0, -1.571, 0]}
        scale={[-0.035, -0.121, -0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.MettalicBllack}
        position={[-5.181, 0.411, -2.478]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.375, 0.114, 0.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.MettalicBllack}
        position={[-6.023, 0.411, -2.478]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.375, 0.114, 0.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.MettalicBllack}
        position={[-5.181, 0.313, -1.391]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.MettalicBllack}
        position={[-5.181, 0.313, -1.391]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.MettalicBllack}
        position={[-6.026, 0.313, -1.391]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.MettalicBllack}
        position={[-7.131, 0.411, 3.877]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.375, 0.114, 0.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.MettalicBllack}
        position={[-6.289, 0.411, 3.877]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.375, 0.114, 0.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.MettalicBllack}
        position={[-7.131, 0.313, 2.79]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.MettalicBllack}
        position={[-7.131, 0.313, 2.79]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.MettalicBllack}
        position={[-6.286, 0.313, 2.79]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials.MettalicRed}
        position={[-5.601, 0.72, -2.203]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Window}
        position={[-5.601, 0.72, -2.203]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.Window}
        position={[-5.601, 0.72, -2.203]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.MettalicRed}
        position={[-6.712, 0.72, 3.603]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials.Window}
        position={[-6.712, 0.72, 3.603]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.Window}
        position={[-6.712, 0.72, 3.603]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Rusted Bolts"]}
        position={[-1.698, 6.689, -1.213]}
        rotation={[0, -1.571, 0]}
        scale={[0.294, 0.125, 1.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Rusted Bolts"]}
        position={[1.578, 6.689, -1.213]}
        rotation={[0, -1.571, 0]}
        scale={[0.294, 0.125, 1.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.MetallicGray}
        position={[2.883, 3.063, -1.194]}
        rotation={[0, -1.571, 0]}
        scale={[1.412, 2.966, 1.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.MetallicGray}
        position={[-0.377, 3.063, -1.194]}
        rotation={[0, -1.571, 0]}
        scale={[1.412, 2.966, 1.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.MetallicGray}
        position={[-3.665, 3.063, -1.194]}
        rotation={[0, -1.571, 0]}
        scale={[1.412, 2.966, 1.412]}
      />
    </group>
  );
}