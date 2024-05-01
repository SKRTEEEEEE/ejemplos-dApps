'use client';

import { RAFFLE_CONTRACT_ADDRESS } from '@/const/addresses';
import { isntAdmin } from '@/utils/miniParse';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
  useContractRead,
  useNFT,
} from '@thirdweb-dev/react';

const RaffleNFTTransfer = ({ nftContractAddress, tokenId }) => {
  const address = useAddress();
  const { contract: raffleContract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: raffleStatus } = useContractRead(
    raffleContract,
    'raffleStatus'
  );

  const { contract: prizeNftContract } = useContract(
    nftContractAddress,
    'nft-drop'
  );
  const { data: prizeNftContractMetadata } =
    useContractMetadata(prizeNftContract);

  const { data: nft, isLoading: nftLoading } = useNFT(
    prizeNftContract,
    tokenId
  );

  return (
    <Box>
      <Flex my={10} flexDirection={'row'} alignItems={'center'}>
        {!nftLoading && <ThirdwebNftMedia metadata={nft?.metadata} />}
        <Box ml={4}>
          <Text fontSize={'xl'} fontWeight={'bold'}>
            {prizeNftContractMetadata?.name}
          </Text>
          <Text fontWeight={'bold'} fontSize={'xl'}>
            {nft?.metadata.name}
          </Text>
        </Box>
      </Flex>
      <Web3Button
        contractAddress={RAFFLE_CONTRACT_ADDRESS}
        action={async () => {
          await prizeNftContract?.setApprovalForToken(
            RAFFLE_CONTRACT_ADDRESS,
            tokenId
          );

          await raffleContract?.call('selectWinner');
        }}
        isDisabled={raffleStatus || isntAdmin(address)}
      >
        Select Winner
      </Web3Button>
    </Box>
  );
};

export default RaffleNFTTransfer;
