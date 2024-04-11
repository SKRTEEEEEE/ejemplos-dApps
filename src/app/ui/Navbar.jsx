import React from 'react';
import ConnectWalletButton from './ConnectWallet';
import Link from 'next/link';

function Navbar() {
  return (
    <div style={{
      zIndex: 9999,
    }}>
      <div className="color-change-2x p-1 px-4 flex items-center sm:gap-8 justify-between">
        <div>
          Hola, esto es el navbar de un proyecto <Link href="/">web3</Link>
        </div>
        <div><Link href="/styled-with">GO</Link></div>
        <ConnectWalletButton />
      </div>
    </div>
  );
}

export default Navbar;
