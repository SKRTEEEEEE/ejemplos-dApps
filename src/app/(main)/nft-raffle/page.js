import NFTRaffle from '@/app/ui/main/NFTRaffle';
import { ChakraUIProvider } from '@/lib/ChakraUIProvider';


export default function NFTRafflePage() {
  return (
    <ChakraUIProvider>
        <NFTRaffle/>
    </ChakraUIProvider>

  );
}
