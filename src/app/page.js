"use client"

import Projects from './ui/root/Projects';
import Who from './ui/root/Who';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url('./img/bg.jpeg');
&::-webkit-scrollbar {
  display: none;
}
`;

export default function Home() {
  return (
    <Container>
      
      <Who />
      <Projects />
  
    </Container>
  );
}
