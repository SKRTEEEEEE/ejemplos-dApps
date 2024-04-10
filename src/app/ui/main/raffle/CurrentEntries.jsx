import { Container, Spinner } from '@chakra-ui/react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import EntryCard from './EntryCard';
import { RAFFLE_CONTRACT_ADDRESS } from '@/const/addresses';

export default function CurrentEntries() {
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: entries, isLoading: entriesLoading } = useContractRead(
    contract,
    'getPlayers'
  );

  return (
    <div className='py-4'>
      {!entriesLoading ? (
        entries.map((entry, index) => (
          <EntryCard mx={4} key={index} walletAddress={entry} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}
