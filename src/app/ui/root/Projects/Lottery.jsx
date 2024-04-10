import { OrbitControls } from '@react-three/drei';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CyberOrb } from '../../three-models/CyberOrb';

export const Lottery = () => {
  return (
   
      <Canvas>
        <CyberOrb scale={2} />
        <OrbitControls enableZoom={false} autoRotate rotateSpeed={4} />
        <ambientLight intensity={5} />
        <directionalLight position={[7, 2, 1]} />
      </Canvas>
    
       
  );
};
