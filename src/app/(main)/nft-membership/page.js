'use client';

import { useOwnedNFTs, useContract, useAddress } from '@thirdweb-dev/react';
import Image from 'next/image';
import { MEMBERSHIP_NFT_ADDRESS } from '../../../const/addresses';
import BuyMemberNFT from '@/app/ui/main/member-nft/BuyMemberNFT';
import Link from 'next/link';


export default function OwnedNFTs() {
  const address = useAddress();
  const { contract } = useContract(MEMBERSHIP_NFT_ADDRESS);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  return (
    <section className='lg:block flex flex-col'>
      <h1 className='text-secondary text-3xl mb-4'>NFT de membresía </h1>
      {error && <p>Error: {error.message}</p>}
      {isLoading && <p>Cargando...</p>}
      {data && data.length === 0 && <BuyMemberNFT />}
      {data && 
        data.map((nft, index) => (
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly" key={index}>
            <div className='flex flex-col items-center gap-3'>
              <p>Metadata: {nft.metadata.name}</p>
              <p>Descripción: {nft.metadata.description}</p>
              <p>Cantidad circulante: {nft.supply}</p>
              <p>Tipo de contrato: {nft.type}</p>
              <Link href="/membership-page" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-gray/50">Go to the Membership Page</Link>
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
              
          </div>
        ))}
    </section>
  );
}
