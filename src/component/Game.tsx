import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.tsx';
import { Loader } from '@react-three/drei'
import { AudioProvider } from '../features/Audio/AudioContext.tsx'
import InterfaceTop  from "../features/Hud/InterfaceTop.tsx"
import InterfaceRight  from "../features/Hud/InterfaceRight.tsx"
import { Perf } from "r3f-perf";

export default function Game() {
  return (
      <AudioProvider>
            <Canvas
                shadows
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ 2.5, 4, 6 ]
                } }
            >
                <Perf position='bottom-left'/>
                <Experience />
            </Canvas>

            {/* INTERFACE OUTSIDE CANVAS FOR BETTER PERFS */}
            <InterfaceTop/>
            <InterfaceRight/>
            
            {/* LOADER OUT OF THE BOX COMPONENT FOR NOW */}
            <Loader/>
      </AudioProvider>
  );
};