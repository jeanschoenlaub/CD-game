import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import { Float, Text, Html } from "@react-three/drei"
import { useControls, button } from 'leva'
import React, { useEffect } from "react";
import { useAudio } from "../features/Audio/AudioContext";
import useGame from "../stores/useGame";


export const Menu = () => {
    const { title_position, title_color, version_color } = useControls('title',{
        title_position: {
            value: { x: 0, y: 2.5},
            step: 0.01,
            joystick: 'invertY'
        },
        title_color: '#22c55e',
        version_color: '#9300db',
        clickMe: button((() =>{
            console.log("clicked")
        }) )
    })

    const { downloadTrack } = useAudio();

    useEffect(() => {
        downloadTrack(0, true); // Replace 0 with the index of the track you want to download
    }, [downloadTrack]);
    const { scene } = useThree();

    const start = useGame((state) => state.start)

    return(
    <>
        <Html
            position={[0,1,0]}
            wrapperClass="MenuButton"
        > 
            <button onClick={() => {
                const newColor = new THREE.Color('#5982B3');
                scene.background = newColor;
                start()
            }}>
            Start Game
            </button> 
        </Html>

        <Html
            position={[0,-1,0]}
            className="text-3xl"
            //wrapperClass="MenuButton"
        > 
            <button  style={{ fontSize: '24px'}}>
            Load Game
            </button> 
        </Html>

        <Float floatIntensity={3} speed={3}>
        <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={ 1 }
            color={title_color}
            position-y={ title_position.y }
            position-x={ title_position.x }
            maxWidth={ 20 }
            textAlign="center"
        >
            CoolDown
        </Text>
        <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={ 0.5 }
            color={version_color}
            position-y={ title_position.y -0.3 }
            position-x={ title_position.x + 2.5 }
            maxWidth={ 20 }
            textAlign="center"
        >
            v-0.1
        </Text>
        </Float>
    </>
)
}