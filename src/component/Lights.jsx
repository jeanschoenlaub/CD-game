import { useRef } from 'react'

export default function Lights()
{
    const light = useRef()
    
    // useFrame((state) =>
    // {
    //     light.current.position.z = state.camera.position.z + 1 - 4
    //     light.current.target.position.z = state.camera.position.z - 4
    //     light.current.target.updateMatrixWorld()
    // })

    return <>
        <directionalLight
            ref={ light }
            castShadow
            position={ [ 10, 10, 15 ] }
            intensity={ 5 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 20 }
            shadow-camera-top={ 20 }
            shadow-camera-right={ 20 }
            shadow-camera-bottom={ - 20 }
            shadow-camera-left={ - 20 }
        />
        <ambientLight intensity={2} />
    </>
}