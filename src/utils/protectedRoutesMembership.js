'use client';

import ConnectWalletButton from '@/app/ui/ConnectWallet';
// import { Inter } from 'next/font/google';
import { MEMBERSHIP_NFT_ADDRESS } from '@/const/addresses';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
// import ThirdWebProviderWrapper from './ui/ThirdWebProvider';
import { useRouter } from 'next/navigation';



export default function ProtectedRoutesMembership({ children }) {
  const router = useRouter();
  const address = useAddress();
  const { contract } = useContract(MEMBERSHIP_NFT_ADDRESS);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);
  // console.log("address: ", address);
  const hasDesiredNFT = data?.length > 0;
  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  

  if(address !== undefined){
    if (isLoading) {
    return <div>Loading...</div>;
  } else if (hasDesiredNFT) {
    //<body>{children}</body> -> Imposibilitava el renderizado del layout!!!
    return <>{children}</>;
  } else {
    alert('You need to own a membership NFT to access this page');
    router.back();
    return null;
  }}else{
    return <div>
      Please log in with your membership address
      <ConnectWalletButton/>
    </div>
  }
}