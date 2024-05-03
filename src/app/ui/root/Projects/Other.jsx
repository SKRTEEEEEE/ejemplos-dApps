import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Mac from '../../three-models/Mac';


export const Other = () => {
  return (
    <>
      <Canvas>
        <Mac scale={0.4} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
      </Canvas>    
    </>
  );
};
