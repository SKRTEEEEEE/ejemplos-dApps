import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Laptop } from '../../three-models/Laptop';
import Link from "next/link"

const Desc = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  background-color: none;
  border-radius: 10px;
  color: lightskyblue;
  top: 70vh;
  font-size: 24px;
  font-weight: 30px;
  text-align: center;
  justify-content: justify-center;
  

  @media only screen and (max-width: 768px) {
    top: 0;
    /* bottom: 0; */
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
width: 12vw;
background-color: white;
color: lightskyblue;
font-size: 24px;
font-weight: 30px;
padding: 20px;
border-radius: 10px;
`;

export const MemberShip = () => {
  return (
    <>
      <Canvas>
        <Laptop scale={0.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={9} />
        <ambientLight intensity={5} />
        <directionalLight position={[3, 2, 1]} />
      </Canvas>
      <Desc>
      <ButtonContainer>
          <Link href={"./nft-membership"}><Button>dApp</Button></Link>
          <Link href={"#"}><Button>Info</Button></Link>
          <Link href={"#"}><Button>Contrato</Button></Link></ButtonContainer>
        </Desc>
      
    </>
  );
};
