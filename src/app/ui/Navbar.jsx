import Image from 'next/image';
import ConnectWalletButton from './ConnectWallet';
import DropableButton from './DropableButton';

function Navbar() {
  return (
    <div style={{
      zIndex: 9999,
    }}>
      <div className=" rounded-b-lg color-change-2x p-2 md:px-48 flex items-center w-full gap-2 sm:gap-8 justify-evenly">
        
          
        <ConnectWalletButton />
        <Image alt="logo" className=" " width={60} height={5} src="/img/skrt-white.png"/>
        <DropableButton/>

      </div>
    </div>
  );
}

export default Navbar;
