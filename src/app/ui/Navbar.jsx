"use client"

import React from 'react';
import ConnectWalletButton from './ConnectWallet';
import Link from 'next/link';
import DropableButton from './DropableButton';

function Navbar() {
  return (
    <div style={{
      zIndex: 9999,
    }}>
      <div className=" rounded-b-lg color-change-2x p-1 px-4 flex flex-col sm:flex-row items-center w-full sm:gap-8 justify-evenly">
        
          <Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-gray/50" style={{"width": "172px", "text-align": "center"}} href="/">Ves al principio 🧑‍💻</Link>
        <ConnectWalletButton />
        <Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-gray/50" style={{"width": "172px", "text-align": "center"}} href="/styled-with">Estilos usados 💅</Link>
          <DropableButton/>

      </div>
    </div>
  );
}

export default Navbar;
