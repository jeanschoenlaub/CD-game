import { useThree } from '@react-three/fiber';
import * as THREE from "three"
import gsap from 'gsap';
import { useEffect } from 'react';

export function FadeToBlack({ yearNumber }) {
    const { scene, camera, gl } = useThree();
    const material = new THREE.MeshBasicMaterial({ color: 'black', transparent: true, opacity: 0 });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(gl.domElement.width, gl.domElement.height), material);
    
    useEffect(() => {

        const distanceInFrontOfCamera = 5; // How far in front of the camera the plane should be
        plane.position.copy(camera.position); // Start with the camera's position
        plane.quaternion.copy(camera.quaternion); // Align the plane's rotation with the camera
        plane.translateZ(-distanceInFrontOfCamera); 


        scene.add(plane);
        const tl = gsap.timeline({ 
            onComplete: () => {scene.remove(plane)} 
        });
    
        tl.to(material, { opacity: 1, duration: 1 })
          .to(material, { opacity: 0, duration: 1 });
    
    }, [yearNumber]);
    
  
    return null; // This component doesn't directly return any JSX
  }