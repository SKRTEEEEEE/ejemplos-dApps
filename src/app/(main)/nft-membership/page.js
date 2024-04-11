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
    <section className='lg:block flex flex-col'>
      <h1 className='text-secondary text-3xl mb-4'>Tu NFT de membresía </h1>
      {error && <p>Error: {error.message}</p>}
      {isLoading && <p>Cargando...</p>}
      {/* {data.length === 0 && <p>No Membership NFT yet</p>} */}
      {data && data.length === 0 && <BuyMemberNFT />}
      {data &&
        data.map((nft, index) => (
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly" key={index}>
            <div>
              {/* <p>Owner: {nft.owner}</p> */}
              <p>Metadata: {nft.metadata.name}</p>
              <p>Descripción: {nft.metadata.description}</p>
              {/* <p>Quantity Owned: {nft.quantityOwned}</p> */}
              <p>Cantidad circulante: {nft.supply}</p>
              <p>Tipo de contrato: {nft.type}</p>
            </div>
            <div className='w-1/2'>
              <Image
                className=" rounded-md"
                src={nft.metadata.image}
                alt={nft.metadata.name}
                style={{

                  height: 'auto',
                }}
                width={500}
                height={300}
              /></div>
            {/* Aquí puedes mostrar más propiedades según tus necesidades */}
          </div>
        ))}
    </section>
  );
}
