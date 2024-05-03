"use client"


import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import { Cube } from '../three-models/Cube';
import Navbar from '../Navbar';
import Link from "next/link"



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 40px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtittle = styled.h2`
  color: pink;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  padding-right: 100px;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
const Button = styled.button`
  background-color: pink;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  width: 200px;
  padding: 10px;
`;

function Who() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={3} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Ejemplos aplicaciones descentralizadas</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtittle>Web3</Subtittle>
          </WhatWeDo>
          <Desc>
            Todas las posibilidades de la blockchain con ejemplos prácticos
          </Desc>
          <Button><Link href={"#projects"}>dApps 👇</Link></Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
