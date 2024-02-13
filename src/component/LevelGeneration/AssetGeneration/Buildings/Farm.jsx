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
        position={[5.458, -0.035, -0.903]}
        scale={[1.866, 1.089, 2.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.wheatsimple}
        position={[1.673, 0.235, -0.917]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.869, -0.254, -2.861]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.GrassSimple}
        position={[3.555, 0.235, 3.456]}
        rotation={[0, 1.571, 0]}
        scale={[-1.498, -0.254, -3.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.GrassSimple}
        position={[2.098, 0.235, -5.207]}
        rotation={[0, 1.571, 0]}
        scale={[-1.329, -0.254, -2.25]}
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
        position={[6.811, 0.235, -5.207]}
        rotation={[0, 1.571, 0]}
        scale={[-1.329, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.WheatMature}
        position={[2.23, 0.235, -7.935]}
        rotation={[0, 1.571, 0]}
        scale={[-1.329, -0.254, -2.427]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.MettalicRed}
        position={[-2.301, 1.392, 0.293]}
        scale={[1.551, 1.318, 3.686]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Roof}
        position={[-2.301, 1.323, 0.293]}
        scale={[1.695, 1.44, 4.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.MettalicRed}
        position={[5.77, 0.477, -1.734]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[0.307, 0.232, 0.217]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.MetallicGray}
        position={[6.046, 0.319, -1.508]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.035, -0.03, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials.MetallicGray}
        position={[5.487, 0.319, -1.508]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.035, -0.03, -0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials.MetallicGray}
        position={[5.647, 0.829, -1.68]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.035, -0.121, -0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.MettalicBllack}
        position={[6.186, 0.411, -2.596]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.375, 0.114, 0.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.MettalicBllack}
        position={[5.344, 0.411, -2.596]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.375, 0.114, 0.375]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.MettalicBllack}
        position={[6.186, 0.313, -1.509]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.MettalicBllack}
        position={[6.186, 0.313, -1.509]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.MettalicBllack}
        position={[5.341, 0.313, -1.509]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.265, -0.08, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials.MettalicRed}
        position={[5.767, 0.72, -2.321]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Window}
        position={[5.767, 0.72, -2.321]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.Window}
        position={[5.767, 0.72, -2.321]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.271, -0.434, -0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Rusted Bolts"]}
        position={[-5.854, 6.689, 1.796]}
        scale={[0.294, 0.125, 1.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Rusted Bolts"]}
        position={[-5.854, 6.689, -1.48]}
        scale={[0.294, 0.125, 1.197]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.MetallicGray}
        position={[-5.836, 3.063, -2.785]}
        scale={[1.412, 2.966, 1.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.MetallicGray}
        position={[-5.836, 3.063, 0.475]}
        scale={[1.412, 2.966, 1.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.MetallicGray}
        position={[-5.836, 3.063, 3.763]}
        scale={[1.412, 2.966, 1.412]}
      />
    </group>
  );
}