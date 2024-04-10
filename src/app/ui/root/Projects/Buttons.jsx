import Link from "next/link"
import styled from 'styled-components';

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





export const Buttons = ( {urlDApp, urlInfo, urlContrato} )=> {
     return (
        <Desc>
      <ButtonContainer>
          <Link href={urlDApp}><Button>dApp</Button></Link>
          <Link href={urlInfo}><Button>Info</Button></Link>
          <Link href={urlContrato}><Button>Contrato</Button></Link></ButtonContainer>
        </Desc>
     )
}