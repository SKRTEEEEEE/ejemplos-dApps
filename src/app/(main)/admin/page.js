import AdminRuffleCost from '@/app/ui/main/raffle/AdminRaffleCost';
import AdminLotteryStatusCard from '@/app/ui/main/raffle/AdminRaffleStatus';
import AdminRaffleWinnerCard from '@/app/ui/main/raffle/AdminRaffleWinner';
import WithdrawBalance from '@/app/ui/main/raffle/WithdrawBalance';
import { ChakraUIProvider } from '@/lib/ChakraUIProvider';
import {
    Card,
    Container,
    Divider,
    Heading,
    Stack,
  } from '@chakra-ui/react';

  
  export default function AdminPage() {
    return (
        <ChakraUIProvider>
      <Container maxW={'1440px'} pt={60} mt={[60,0,0]} py={8}>
        <section className='flex sm:mt-0 mt-48 sm:flex-row flex-col'>
        <Heading>Admin Dashboard</Heading>
        <section className='flex sm:flex-row flex-col'>
          <AdminLotteryStatusCard />
          <Card p={4} mt={4} mr={10} w={["75%","50%",'25%']}>
            <Stack spacing={4}>
              <AdminRuffleCost />
              <Divider />
              <WithdrawBalance />
            </Stack>
          </Card>
          <AdminRaffleWinnerCard />
        </section></section>
      </Container></ChakraUIProvider>
    );
  }