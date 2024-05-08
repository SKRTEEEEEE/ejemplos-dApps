// import Link from 'next/link';
import TailwindComponentTest from '@/app/ui/main/styled/TailwindComponent';
import StyledComponentsTest from '../../ui/main/styled/StyledComponents';
import {  Flex, Spinner, Text } from '@chakra-ui/react';
import { ChakraUIProvider } from '@/lib/ChakraUIProvider';

export default function StyledWith() {
  return (

     
      <section className="mt-60 flex flex-col justify-center items-center ">
        {/* Discover our blockchain number store{' '}
        <Link
          href="/counter"
          className="px-8 border-slate-400 border-2 rounded-md mx-2"
        >
          {' '}
          here
        </Link> */}
        <TailwindComponentTest />
        <StyledComponentsTest/>
        <ChakraUIProvider>
        
        <Flex gap="3">
        <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='md'
/> <Text fontSize="2xl">Styled with ChakraUI</Text>
        </Flex></ChakraUIProvider>
        
      </section>

  );
}