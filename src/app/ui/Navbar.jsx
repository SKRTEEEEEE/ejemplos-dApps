import ConnectWalletButton from './ConnectWallet';
import DropableButton from './DropableButton';

function Navbar() {
  return (
    <div style={{
      zIndex: 9999,
    }}>
      <div className=" rounded-b-lg color-change-2x p-1 px-4 flex flex-col sm:flex-row items-center w-full sm:gap-8 justify-evenly">
        
          
        <ConnectWalletButton />
        
        <DropableButton/>

      </div>
    </div>
  );
}

export default Navbar;
