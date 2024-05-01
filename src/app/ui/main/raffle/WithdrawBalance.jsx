'use client';

import { RAFFLE_CONTRACT_ADDRESS } from '@/const/addresses';
import { isntAdmin } from '@/utils/miniParse';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { Web3Button, useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

export default function WithdrawBalance() {
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);
  const address  = useAddress();

  const { data: contractBalance, isLoading: contractBalanceLoading } =
    useContractRead(contract, 'getBalance');

  return (
    <Box>
      <Box>
        <Text fontWeight={'bold'} mb={4} fontSize={'xl'}>
          Contract Balance
        </Text>
        {!contractBalanceLoading ? (
          <Text fontSize={'xl'}>
            {ethers.utils.formatEther(contractBalance)} MATIC
          </Text>
        ) : (
          <Spinner />
        )}
      </Box>
      <Web3Button
        contractAddress={RAFFLE_CONTRACT_ADDRESS}
        action={(contract) => contract.call('withdrawBalance')}
        isDisabled={isntAdmin(address)}
      >
        Withdraw Balance
      </Web3Button>
    </Box>
  );
}
