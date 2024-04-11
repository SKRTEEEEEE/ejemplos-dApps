'use client';

import { HERO_IMAGE_URL, RAFFLE_CONTRACT_ADDRESS } from '@/const/addresses';
import CurrentEntries from '@/app/ui/main/raffle/CurrentEntries';
import PrizeNFT from '@/app/ui/main/raffle/PrizeNFT';
import RaffleStatus from '@/app/ui/main/raffle/RaffleStatus';
import {
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  min-height: 40vh;
  margin-top: 30vh;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;


export default function NFTRaffle() {
  const address = useAddress();
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);
  const { data: entryCost, isLoading: isLoadingEntryCost } = useContractRead(
    contract,
    'entryCost'
  );

  const { data: totalEntries, isLoading: totalEntriesLoading } =
    useContractRead(contract, 'totalEntries');

  const { data: raffleStatus, isLoading: isLoadingRaffleStatus } =
    useContractRead(contract, 'raffleStatus');

  const entryCostInEther = entryCost
    ? ethers.utils.formatEther(entryCost)
    : '0';

  const [entryAmount, setEntryAmount] = useState(0);
  const entryCostOnSubmit = parseFloat(entryCostInEther) * entryAmount;
  console.log(entryAmount);

  function increaseTicketAmount() {
    setEntryAmount(entryAmount + 1);
  }

  function decreaseTicketAmount() {
    if (entryAmount > 0) {
      setEntryAmount(entryAmount - 1);
    }
  }
  return (
    <Container style={{ zIndex: 0 }}>
      
      <FlexContainer>
        <div>
          <div>
            <h1 className='text-secondary font-bold lg:text-4xl text-xl'>Raffle app</h1>
            <p style={{ fontWeight: 'bold', fontSize: '4xl' }}>
              Buy a ticket to win the NFT Prize
            </p>
          </div>
          <p>
            Buy entries for a chance to win the NFT! This NFT will give you access to our exclusive membership page.
          </p>
          <RaffleStatus status={raffleStatus} />
          {!isLoadingEntryCost && (
            <p style={{ fontWeight: 'bold', fontSize: '2xl' }}>
              Cost Per Entry: {entryCostInEther} SEPOLIA
            </p>
          )}
          {address ? (
            <section className='flex justify-evenly'>
              <div className='flex gap-2'>

                <button className='w-12 p-2 bg-secondary/20 text-center border-2 rounded-md border-secondary' onClick={decreaseTicketAmount}>-</button>
                <input
                  className='w-12 p-2 text-center border-2 rounded-md border-secondary'
                  value={entryAmount}
                  type={'number'}
                  onChange={(e) => setEntryAmount(parseInt(e.target.value))}
                />
                <button className='w-12 p-2 bg-secondary/20 text-center border-2 rounded-md border-secondary' onClick={increaseTicketAmount}>+</button>
              </div>
              <Web3Button
                contractAddress={RAFFLE_CONTRACT_ADDRESS}
                action={(contract) =>
                  contract.call('buyEntry', [entryAmount], {
                    value: ethers.utils.parseEther(entryCostOnSubmit.toString()),
                  })
                }
                isDisabled={!raffleStatus}
              >
                Buy Ticket(s)
              </Web3Button>
              {!totalEntriesLoading && <p>Total Entries: {totalEntries.toString()}</p>}
            </section>
          ) : (
            <p>Connect your wallet to buy entries!</p>
          )}
        </div>
      </FlexContainer>

      <FlexContainer>
        {raffleStatus ? (
          <PrizeNFT />
        ) : (
          <MediaRenderer src={HERO_IMAGE_URL} width="90%" height="90%" />
        )}
      </FlexContainer>    

      <FlexContainer style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 'xl' }}>Current Raffle Entries:</p>
        <CurrentEntries />
      </FlexContainer>
    </Container>
  );
}
