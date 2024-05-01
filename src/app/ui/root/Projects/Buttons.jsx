import Link from "next/link"
import styled from 'styled-components';
import ButtonPopUpInfo from "./ButtonPopUpInfo";
import { dataProjects } from "@/const/const";

const Main = styled.div`
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
width: 20vw;
background-color: rgba(255, 255, 255, 0.2);
color: lightskyblue;
font-size: 24px;
font-weight: 30px;
padding: 20px;
border-radius: 10px;
@media only screen and (max-width: 768px) {
  width: 25vw;
  font-size: 12px;
}
&:hover {
  border: 2px solid lightskyblue;
  text-shadow: 0 0 10px #ff00aa, 0 0 20px #ff00aa, 0 0 30px #ff00aa;

}
`;

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
    font-size: 15px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Buttons = ({ id }) => {
  const project = dataProjects.find(project => project.id === id);

  return (
    <>
      {project.active ?
        <Main><ButtonContainer>
          <Link href={project.path}><Button>dApp {project.title}</Button></Link>
          <ButtonPopUpInfo id={id}>Info {project.title}</ButtonPopUpInfo>
          <Link href={project.contractUrl} target="_blank"><Button>Contrato {project.title}</Button></Link>
        </ButtonContainer> </Main> :
        <Desc>Construyendo otras dApps, Descubrirlas Aquí</Desc>
      }</>

  )
}