import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function TreePalm(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("./models/tree-palm/model.gltf", '/draco-gltf');

    return (
        <group {...props} dispose={null}>
          <group position={[0, 0, 0]} scale={0.97}>
            <mesh
              castShadow
              geometry={nodes.Group_28.geometry}
              material={materials["wood.013"]}
              material-roughness={1}
              material-emissiveIntensity={0.1}
              position={[-0.665, 0, 0.607]}
              scale={0.79}
            />
            <mesh
              castShadow
              geometry={nodes.Group_30.geometry}
              material={materials["leaves.003"]}
              material-roughness={1}
              material-emissiveIntensity={0.1}
              position={[0, 1.788, 0]}
              scale={0.573}
            />
          </group>
        </group>
      );
}

