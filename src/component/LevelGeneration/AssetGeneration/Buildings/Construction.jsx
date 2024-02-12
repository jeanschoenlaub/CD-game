
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Construction(props) {
  const { nodes, materials } = useGLTF("/models/construction/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.MettalicBllack}
        position={[0.023, 0.24, -0.27]}
        scale={[3.15, 1.05, 2.254]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.MettalicBllack}
        position={[1.073, 0.691, -1.829]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.417, 0.596, 0.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.MettalicBllack}
        position={[-2.623, 0.691, -1.829]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.417, 0.596, 0.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.MetallicGray}
        position={[2.021, 0.691, -1.829]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.469, 0.643, 0.469]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.MettalicBllack}
        position={[1.073, 0.691, 1.305]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.417, 0.604, 0.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.MettalicBllack}
        position={[-2.623, 0.691, 1.305]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.417, 0.604, 0.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.MetallicGray}
        position={[2.021, 0.691, 1.308]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.469, 0.643, 0.469]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Rockygray}
        position={[-0.799, 1.225, -0.272]}
        scale={[1.232, 0.202, 0.842]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.YellowBody}
        position={[-0.859, 1.546, -0.232]}
        scale={[2.016, 0.112, 1.723]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.YellowBody}
        position={[-1.939, 2.22, -0.232]}
        scale={[0.932, 0.549, 1.723]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.MettalicBllack}
        position={[0.086, 2.712, -1.12]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.071, -1.069, -0.824]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Window}
        position={[0.086, 2.712, -1.12]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.071, -1.069, -0.824]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.YellowBody}
        position={[1.124, 3.657, 0.16]}
        rotation={[0, 0, -Math.PI / 6]}
        scale={[0.482, 1.51, 0.437]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.YellowBody}
        position={[4.038, 3.435, 0.166]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.335, 2.047, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.YellowBody}
        position={[4.522, 2.052, 0.135]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.146, 0.19, 0.284]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.MetallicGray}
        position={[3.743, 0.261, 0.135]}
        rotation={[-Math.PI / 2, -0.087, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.MetallicGray}
        position={[2.876, 1.768, 0.123]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.082, 0.153, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.MetallicGray}
        position={[2.876, 1.768, 0.891]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.082, 0.153, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.MetallicGray}
        position={[2.876, 1.768, 0.514]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.082, 0.153, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.MetallicGray}
        position={[2.876, 1.768, -0.244]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.082, 0.153, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.MetallicGray}
        position={[2.876, 1.768, -0.613]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.082, 0.153, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.MetallicGray}
        position={[2.983, 1.596, 0.135]}
        rotation={[0, 0, Math.PI / 9]}
        scale={[0.072, 0.043, 0.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.MetallicGray}
        position={[3.743, 0.291, 0.135]}
        rotation={[-Math.PI / 2, -0.087, 0]}
        scale={[0.972, 0.972, 0.983]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.Rockygray}
        position={[0, -7.109, 0]}
        scale={-7.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.Rockygray}
        position={[0.353, 0.274, -4.897]}
        scale={[0.495, 0.249, 0.495]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.Rockygray}
        position={[3.856, 0.268, -2.63]}
        rotation={[-Math.PI, 1.491, -Math.PI]}
        scale={[0.238, 0.213, 0.238]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.Rockygray}
        position={[4.325, 0.434, -3.357]}
        rotation={[-Math.PI, 1.491, -Math.PI]}
        scale={[0.313, 0.416, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.Rockygray}
        position={[-0.699, 0.256, -5.079]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.243, 0.323, 0.243]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.Rockygray}
        position={[3.866, 1.303, 0.417]}
        rotation={[2.118, 1.098, 2.208]}
        scale={[0.313, 0.416, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.Rockygray}
        position={[3.884, 1.482, -0.206]}
        rotation={[1.885, -0.695, 2.91]}
        scale={[0.305, 0.312, 0.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.Rockygray}
        position={[3.523, 1.248, -0.285]}
        rotation={[0, 0, -0.245]}
        scale={[0.372, 0.25, 0.362]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials.Rockygray}
        position={[3.88, 0.685, 2.34]}
        scale={0.673}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.Rockygray}
        position={[4.747, 0.419, -1.18]}
        scale={0.406}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials.Rockygray}
        position={[-0.128, 0.392, 5.215]}
        scale={0.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials.Rockygray}
        position={[-3.104, 0.274, 3.313]}
        rotation={[0, -0.599, 0]}
        scale={[0.203, 0.249, 0.495]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials.Rockygray}
        position={[-4.035, 0.19, 3.131]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.243, 0.157, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials.Rockygray}
        position={[-4.477, 0.201, -2.237]}
        scale={0.192}
      />
    </group>
  );
}