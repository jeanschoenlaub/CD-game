import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Loader } from '@react-three/drei'
import {AudioProvider} from '../features/Audio/AudioContext'
import InterfaceTop  from "../features/Hud/InterfaceTop"
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
          <InterfaceTop/>
          <Loader/>
          {/* <Interface /> */}
      </AudioProvider>
  );
};