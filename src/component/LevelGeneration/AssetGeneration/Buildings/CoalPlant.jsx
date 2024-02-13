import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CoalPlant(props) {
  const { nodes, materials } = useGLTF("/models/coal-plant/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials.YellowBody}
        position={[-7.576, 0.587, -1.792]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials.MetallicGray}
        position={[-8.341, 1.253, -1.792]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.YellowBody}
        position={[-9.104, 0.587, -1.792]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials.MettalicBllack}
        position={[-8.341, 1.508, -1.808]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.YellowBody}
        position={[-7.576, 0.587, 1.521]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.MetallicGray}
        position={[-8.341, 1.253, 1.521]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.YellowBody}
        position={[-9.104, 0.587, 1.521]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.MettalicBllack}
        position={[-8.341, 1.508, 1.505]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={materials.YellowBody}
        position={[-2.613, 0.587, -7.41]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={materials.MetallicGray}
        position={[-2.996, 1.253, -8.073]}
        rotation={[Math.PI, -Math.PI / 6, Math.PI]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube078.geometry}
        material={materials.YellowBody}
        position={[-3.377, 0.587, -8.734]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube079.geometry}
        material={materials.MettalicBllack}
        position={[-2.982, 1.508, -8.081]}
        rotation={[0, -Math.PI / 3, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube080.geometry}
        material={materials.YellowBody}
        position={[-5.482, 0.587, -5.754]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube081.geometry}
        material={materials.MetallicGray}
        position={[-5.865, 1.253, -6.417]}
        rotation={[Math.PI, -Math.PI / 6, Math.PI]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube082.geometry}
        material={materials.YellowBody}
        position={[-6.246, 0.587, -7.077]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube083.geometry}
        material={materials.MettalicBllack}
        position={[-5.852, 1.508, -6.424]}
        rotation={[0, -Math.PI / 3, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials.MetallicGray}
        position={[-8.313, 1.253, -5.099]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials.MettalicBllack}
        position={[-8.341, 1.508, -5.065]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials.YellowBody}
        position={[-8.312, 0.587, -4.788]}
        rotation={[-Math.PI, -Math.PI / 3, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials.YellowBody}
        position={[-7.251, 0.587, -4.192]}
        rotation={[-Math.PI, -Math.PI / 3, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials.MetallicGray}
        position={[-0.105, 1.253, -9.746]}
        rotation={[Math.PI, -Math.PI / 6, Math.PI]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials.MettalicBllack}
        position={[-0.148, 1.508, -9.753]}
        rotation={[0, -Math.PI / 3, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={materials.YellowBody}
        position={[-0.374, 0.587, -9.59]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={materials.YellowBody}
        position={[-0.36, 0.587, -8.372]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={materials.YellowBody}
        position={[4.787, 0.587, -5.96]}
        rotation={[-Math.PI, Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={materials.MetallicGray}
        position={[5.17, 1.253, -6.623]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={materials.YellowBody}
        position={[5.551, 0.587, -7.284]}
        rotation={[-Math.PI, Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={materials.MettalicBllack}
        position={[5.183, 1.508, -6.615]}
        rotation={[Math.PI, -Math.PI / 3, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={materials.YellowBody}
        position={[1.918, 0.587, -7.617]}
        rotation={[-Math.PI, Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials.MetallicGray}
        position={[2.3, 1.253, -8.28]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={materials.YellowBody}
        position={[2.682, 0.587, -8.94]}
        rotation={[-Math.PI, Math.PI / 6, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials.MettalicBllack}
        position={[2.314, 1.508, -8.272]}
        rotation={[Math.PI, -Math.PI / 3, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube084.geometry}
        material={materials.MetallicGray}
        position={[8.019, 1.253, -4.945]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube085.geometry}
        material={materials.MettalicBllack}
        position={[8.004, 1.508, -4.987]}
        rotation={[Math.PI, -Math.PI / 3, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube086.geometry}
        material={materials.YellowBody}
        position={[7.749, 0.587, -5.1]}
        rotation={[-Math.PI, Math.PI / 3, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087.geometry}
        material={materials.YellowBody}
        position={[6.702, 0.587, -4.479]}
        rotation={[-Math.PI, Math.PI / 3, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.YellowBody}
        position={[7.142, 0.587, 1.172]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.MetallicGray}
        position={[7.908, 1.253, 1.172]}
        rotation={[0, 1.571, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials.YellowBody}
        position={[8.671, 0.587, 1.172]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials.MettalicBllack}
        position={[7.908, 1.508, 1.187]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials.YellowBody}
        position={[7.142, 0.587, -2.141]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials.MetallicGray}
        position={[7.908, 1.253, -2.141]}
        rotation={[0, 1.571, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials.YellowBody}
        position={[8.671, 0.587, -2.141]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials.MettalicBllack}
        position={[7.908, 1.508, -2.126]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube088.geometry}
        material={materials.MetallicGray}
        position={[7.88, 1.253, 4.478]}
        rotation={[0, 1.571, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube089.geometry}
        material={materials.MettalicBllack}
        position={[7.908, 1.508, 4.445]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube090.geometry}
        material={materials.YellowBody}
        position={[7.879, 0.587, 4.167]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube091.geometry}
        material={materials.YellowBody}
        position={[6.817, 0.587, 3.571]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={materials.YellowBody}
        position={[2.128, 0.587, 6.738]}
        rotation={[0, Math.PI / 6, -Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube065.geometry}
        material={materials.MetallicGray}
        position={[2.511, 1.253, 7.401]}
        rotation={[0, Math.PI / 6, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={materials.YellowBody}
        position={[2.892, 0.587, 8.062]}
        rotation={[0, Math.PI / 6, -Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube067.geometry}
        material={materials.MettalicBllack}
        position={[2.498, 1.508, 7.409]}
        rotation={[-Math.PI, Math.PI / 3, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube092.geometry}
        material={materials.YellowBody}
        position={[4.997, 0.587, 5.082]}
        rotation={[0, Math.PI / 6, -Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={materials.MetallicGray}
        position={[5.38, 1.253, 5.745]}
        rotation={[0, Math.PI / 6, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094.geometry}
        material={materials.YellowBody}
        position={[5.762, 0.587, 6.405]}
        rotation={[0, Math.PI / 6, -Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095.geometry}
        material={materials.MettalicBllack}
        position={[5.367, 1.508, 5.752]}
        rotation={[-Math.PI, Math.PI / 3, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={materials.MetallicGray}
        position={[-0.367, 1.253, 9.03]}
        rotation={[0, Math.PI / 6, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={materials.MettalicBllack}
        position={[-0.323, 1.508, 9.037]}
        rotation={[-Math.PI, Math.PI / 3, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098.geometry}
        material={materials.YellowBody}
        position={[-0.098, 0.587, 8.874]}
        rotation={[0, 0, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099.geometry}
        material={materials.YellowBody}
        position={[-0.112, 0.587, 7.656]}
        rotation={[0, 0, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={materials.YellowBody}
        position={[-5.149, 0.587, 5.339]}
        rotation={[0, -Math.PI / 6, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials.MetallicGray}
        position={[-5.532, 1.253, 6.001]}
        rotation={[0, -Math.PI / 6, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={materials.YellowBody}
        position={[-5.913, 0.587, 6.662]}
        rotation={[0, -Math.PI / 6, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={materials.MettalicBllack}
        position={[-5.545, 1.508, 5.994]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100.geometry}
        material={materials.YellowBody}
        position={[-2.28, 0.587, 6.995]}
        rotation={[0, -Math.PI / 6, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={materials.MetallicGray}
        position={[-2.69, 1.253, 7.642]}
        rotation={[0, -Math.PI / 6, 0]}
        scale={[1.593, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102.geometry}
        material={materials.YellowBody}
        position={[-3.044, 0.587, 8.319]}
        rotation={[0, -Math.PI / 6, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103.geometry}
        material={materials.MettalicBllack}
        position={[-2.676, 1.508, 7.65]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104.geometry}
        material={materials.MetallicGray}
        position={[-8.381, 1.253, 4.324]}
        rotation={[0, -Math.PI / 6, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={materials.MettalicBllack}
        position={[-8.366, 1.508, 4.365]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={materials.YellowBody}
        position={[-8.112, 0.587, 4.479]}
        rotation={[0, -Math.PI / 3, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials.YellowBody}
        position={[-7.065, 0.587, 3.857]}
        rotation={[0, -Math.PI / 3, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={materials.MetallicGray}
        position={[7.908, 1.253, 1.172]}
        rotation={[0, 1.571, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube071.geometry}
        material={materials.MettalicBllack}
        position={[7.908, 1.508, 1.187]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={materials.MetallicGray}
        position={[7.908, 1.253, 1.172]}
        rotation={[0, 1.571, 0]}
        scale={[1.632, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075.geometry}
        material={materials.MettalicBllack}
        position={[7.908, 1.508, 1.187]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.629, -0.118, -1.537]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={materials.YellowBody}
        position={[5.291, 0.587, -1.432]}
        rotation={[0, 0, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={materials.MetallicGray}
        position={[3.512, 1.253, -0.666]}
        scale={[3.294, 0.118, 1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={materials.YellowBody}
        position={[5.291, 0.587, 0.096]}
        rotation={[0, 0, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={materials.YellowBody}
        position={[0.606, 0.587, -1.432]}
        rotation={[0, 0, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114.geometry}
        material={materials.YellowBody}
        position={[0.606, 0.587, 0.096]}
        rotation={[0, 0, Math.PI]}
        scale={[0.114, 0.54, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115.geometry}
        material={materials.MettalicBllack}
        position={[3.481, 1.508, -0.666]}
        rotation={[Math.PI, 1.571, 0]}
        scale={[-0.629, -0.118, -3.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={materials.MettalicBllack}
        position={[3.311, 1.265, 2.792]}
        rotation={[Math.PI, 1.571, 0]}
        scale={[-2.319, -1.223, -2.982]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={materials.MettalicBllack}
        position={[3.311, 0.982, -3.588]}
        rotation={[Math.PI, 1.571, 0]}
        scale={[-1.82, -0.959, -2.341]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={materials.MettalicRed}
        position={[-2.562, 1.793, -0.136]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-2.694, -1.759, -5.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={materials.Window}
        position={[-2.689, 1.793, -0.136]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-2.694, -1.759, -5.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube070.geometry}
        material={materials.Window}
        position={[-2.562, 1.793, -0.136]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-2.694, -1.759, -5.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.MettalicRed}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.MettalicRed}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials.MettalicRed}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials.MettalicRed}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, -3.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, 2.59]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials.MettalicRed}
        position={[-2.654, 9.492, 2.59]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, 2.59]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials.MettalicRed}
        position={[-2.654, 9.492, 2.59]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials.MetallicGray}
        position={[-2.654, 9.492, 2.59]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 5.865, 1]}
      />
    </group>
  );
}