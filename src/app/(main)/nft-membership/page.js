'use client';

import { useOwnedNFTs, useContract, useAddress } from '@thirdweb-dev/react';
import Image from 'next/image';
import { MEMBERSHIP_NFT_ADDRESS } from '../../../const/addresses';
import BuyMemberNFT from '@/app/ui/main/member-nft/BuyMemberNFT';


export default function OwnedNFTs() {
  const address = useAddress();
  const { contract } = useContract(MEMBERSHIP_NFT_ADDRESS);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  return (
    <section>
      <h1>My Membership NFTs</h1>
      {error && <p>Error: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {/* {data.length === 0 && <p>No Membership NFT yet</p>} */}
      {data && data.length === 0 && <BuyMemberNFT />}
      {data &&
        data.map((nft, index) => (
          <div className="flex items-center" key={index}>
            <div>
              <p>Owner: {nft.owner}</p>
              <p>Metadata: {nft.metadata.name}</p>
              <p>Description: {nft.metadata.description}</p>
              <p>Quantity Owned: {nft.quantityOwned}</p>
              <p>Supply: {nft.supply}</p>
              <p>Type: {nft.type}</p>
            </div>
            <Image
              className=" rounded-md"
              src={nft.metadata.image}
              alt={nft.metadata.name}
              width={'500'}
              height={'200'}
            />
            {/* Aquí puedes mostrar más propiedades según tus necesidades */}
          </div>
        ))}
    </section>
  );
}
