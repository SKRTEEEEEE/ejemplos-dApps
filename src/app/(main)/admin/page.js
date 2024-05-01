// "use client"
import AdminRuffleCost from '@/app/ui/main/raffle/AdminRaffleCost';
import AdminLotteryStatusCard from '@/app/ui/main/raffle/AdminRaffleStatus';
import AdminRaffleWinnerCard from '@/app/ui/main/raffle/AdminRaffleWinner';
import WithdrawBalance from '@/app/ui/main/raffle/WithdrawBalance';
import { ChakraUIProvider } from '@/lib/ChakraUIProvider';
// import { isntAdmin } from '@/utils/miniParse';
import {
    Box,
    Card,
    Container,
    Divider,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
// import { useAddress } from '@thirdweb-dev/react';

  
  export default function AdminPage() {
    // const address = useAddress()
    return (
        <ChakraUIProvider>
      <Container maxW={'1440px'} pt={60} mt={[60,0,0]} py={8}>
        <section className='flex sm:mt-0 mt-48 sm:flex-row flex-col'>
            <Box>
        <Heading>Admin Dashboard</Heading>
        <Text>Only admin can make changes</Text></Box>
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