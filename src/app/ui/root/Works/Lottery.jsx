import { OrbitControls } from '@react-three/drei';
import React from 'react';

import { Canvas } from '@react-three/fiber';
import { CyberOrb } from '../../three-models/CyberOrb';

import styled from 'styled-components';

const Desc = styled.div`
  width: 80%;
  position: absolute;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  color: lightskyblue;
  top: 70vh;
  font-size: 24px;
  font-weight: 30px;
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    top: 0;
    /* bottom: 0; */
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Lottery = () => {
  return (
    <>
      <Canvas>
        <CyberOrb scale={2} />
        <OrbitControls enableZoom={false} autoRotate rotateSpeed={4} />
        <ambientLight intensity={5} />
        <directionalLight position={[7, 2, 1]} />
      </Canvas>
      <Desc>Creative Evolution</Desc>
    </>
  );
};
