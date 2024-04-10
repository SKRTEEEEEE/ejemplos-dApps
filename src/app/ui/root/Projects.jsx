"use client"

import styled from 'styled-components';
import { useState } from 'react';
import "./projects-list.css"
import { ProjectsSelector } from './Projects/ProjectsSelector';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const data = [ 
    'Safe Storage',
  'NFT MemberShip',
  'Lottery',
//   'Marketing 3.0',
  'Other',
];

function Projects() {
  const [work, setWork] = useState('NFT MemberShip');
  return (
    <Section id='projects'>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <li
                onClick={() => setWork(item)}
                translate="no"
                text={item}
                key={item}
              >
                {item}
              </li>
            ))}
          </List>
        </Left>
        <Right>
          {/* {work === 'Safe Storage' ? (
           <ProjectsSelector work={work}/>
          ) : work === 'NFT MemberShip' ? (
            <ProjectsSelector work={work}/>
          ) : work === 'Lottery' ? (
            <ProjectsSelector work={work}/>
          ) : work === 'Marketing 3.0' ? (
            <ProjectsSelector work={work}/>
          ) : work === "Other" ? (
            <ProjectsSelector work={work}/>
          ): <p>Error</p>} */}
          <ProjectsSelector work={work}/>
          
        </Right>
      </Container>
    </Section>
  );
}

export default Projects;
