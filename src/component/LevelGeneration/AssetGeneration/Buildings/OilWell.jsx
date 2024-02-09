import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function OilWell(props) {
  const { nodes, materials } = useGLTF("./models/oil-well/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.RustedTower}
        position={[9.048, 16.896, 0]}
        rotation={[-Math.PI, -0.016, -2.89]}
        scale={[1.699, 18.86, 1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.RustedTower}
        position={[0, 13.976, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.RustedTower}
        position={[21.898, 16.896, 0]}
        rotation={[0, 0.016, 0.252]}
        scale={[1.699, 18.86, 1.865]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.RustedTower}
        position={[12.422, 37.183, 0]}
        scale={[1, 1, 3.145]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.RustedTower}
        position={[-7.741, 33.369, 0]}
        scale={[1.737, 1.325, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.RustedTower}
        position={[-7.844, 33.643, 0]}
        scale={[0.557, 0.326, 5.855]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.RustedTower}
        position={[-7.826, 26.919, -5.846]}
        scale={[0.683, 7.734, 0.327]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.RustedTower}
        position={[-7.826, 26.919, 5.876]}
        scale={[0.683, 7.734, 0.327]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.RustedTower}
        position={[-7.829, 19.039, -4.853]}
        scale={[1.977, 7.078, 0.525]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.RustedTower}
        position={[-7.829, 19.039, 4.85]}
        scale={[1.977, 7.078, 0.525]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.RustedTower}
        position={[-7.993, 14.544, -2.627]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.98, 1.523, 4.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.RustedTower}
        position={[-7.993, 14.544, 2.644]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.98, 1.523, 4.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.RustedTower}
        position={[-7.993, 14.869, -0.016]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.321, 0.925, 0.567]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.RustedTower}
        position={[-5.511, 7.088, 0]}
        rotation={[0, 0, 0.252]}
        scale={[0.548, 7.997, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.RustedTower}
        position={[-10.615, 7.088, 0.055]}
        rotation={[-Math.PI, -0.016, -2.89]}
        scale={[0.549, 7.997, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.Weights}
        position={[-7.377, 23.701, -2.813]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-8.108, -3.219, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.Weights}
        position={[-7.377, 23.701, 2.805]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-8.108, -3.219, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.Weights}
        position={[41.872, 32.348, 0.003]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[-11.787, -4.679, -2.901]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Rope}
        position={[45.988, -5.684, 0]}
        scale={[0.282, 16.312, 0.282]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Rusted Bolts"]}
        position={[17.213, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Rusted Bolts"]}
        position={[17.213, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Rusted Bolts"]}
        position={[-8.81, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Rusted Bolts"]}
        position={[-6.77, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Rusted Bolts"]}
        position={[13.571, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Rusted Bolts"]}
        position={[17.213, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Rusted Bolts"]}
        position={[17.213, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Rusted Bolts"]}
        position={[-8.81, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Rusted Bolts"]}
        position={[-6.77, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials["Rusted Bolts"]}
        position={[13.571, 35.114, 1.846]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["Rusted Bolts"]}
        position={[17.213, 35.114, -1.771]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials["Rusted Bolts"]}
        position={[17.213, 35.114, -1.771]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials["Rusted Bolts"]}
        position={[-8.81, 35.114, -1.771]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Rusted Bolts"]}
        position={[-6.77, 35.114, -1.771]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Rusted Bolts"]}
        position={[-7.825, 14.615, -5.538]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Rusted Bolts"]}
        position={[34.339, 36.107, 1.846]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["Rusted Bolts"]}
        position={[34.339, 37.972, 1.846]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["Rusted Bolts"]}
        position={[34.339, 36.107, -1.747]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["Rusted Bolts"]}
        position={[34.339, 37.972, -1.747]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials["Rusted Bolts"]}
        position={[-7.825, 20.28, -6.347]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={materials["Rusted Bolts"]}
        position={[-7.825, 14.615, 5.588]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials["Rusted Bolts"]}
        position={[-7.825, 20.28, 6.379]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.438, 0.119, 0.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["Rusted Bolts"]}
        position={[13.725, 35.114, -1.771]}
        scale={[0.438, 0.119, 0.399]}
      />
    </group>
  );
}
;
