import { MapControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"
import * as THREE from "three" 


interface CameraPosition {
    x: number;
    y: number;
    z: number;
}

interface CameraProps {
    tileCount?: number;
}
  
export function CameraMovement({ tileCount = 20 }: CameraProps) {
    const { camera } = useThree();

    const [mapControlsEnabled, setMapControlsEnabled] = useState(true);
    const [mapControlsRotationEnabled, setMapControlsRotationEnabled] = useState(true);

    //Initial camera position near the city 
    const initCameraPosition= new THREE.Vector3(12,4,20);
    const initCameraTarget = new THREE.Vector3(8,1,12);  

    //Camera bounds
    const minBounds = new THREE.Vector3(-5, 1, -5);
    const maxBounds = new THREE.Vector3(5+tileCount*2, 10, 5+tileCount*2,);
    // const minYRotation = THREE.MathUtils.degToRad(10);
    // const maxYRotation = THREE.MathUtils.degToRad(60); doesn't work and bug around edge of map
    

    useEffect(() => {
        camera.position.copy(initCameraPosition);
        camera.lookAt(initCameraTarget);
        setMapControlsEnabled(true);
    }, []);

    //Setting bounds
    useFrame(() => {
        camera.position.clamp(minBounds, maxBounds);
    });
  
    return <>
        <MapControls 
            enabled={mapControlsEnabled}
            position={initCameraPosition} 
            target={initCameraTarget}
            enableRotate={mapControlsRotationEnabled} 
            maxDistance={10} 
            minDistance={1}
            />
    </>;
}
