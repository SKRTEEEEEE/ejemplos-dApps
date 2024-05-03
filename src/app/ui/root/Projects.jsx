"use client"

import styled from 'styled-components';
import { useState } from 'react';
import styles from "./projects-list.module.css"
import { ProjectsSelector } from './Projects/ProjectsSelector';
import { dataProjects } from '@/const/const';


const Section = styled.section`
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
  @media only screen and (max-width: 768px) {
    gap: 0px;
  }
`;

function Projects() {
  const [work, setWork] = useState('NFT MemberShip');

  return (
    <Section id='projects'>
      <Container>
        <Left>
          <List>
            {dataProjects.map((item) => (
              <li
                onClick={() => {setWork(item.name)}}
                translate="no"
                text={item.name}
                key={item.name}
                className={styles.projectList}
                
              >
                {item.name}
              </li>
            ))}
          </List>
        </Left>
        <Right>
          <ProjectsSelector work={work}/>
        </Right>
      </Container>
    </Section>
  );
}

export default Projects;
