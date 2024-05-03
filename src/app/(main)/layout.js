// import ProviderWrapper from '../ui/ProviderWrapper.jsx';

import Navbar from "@/app/ui/Navbar";

// import { ChakraUIProvider } from '../ui/ChakraUIProvider';

// import ProviderWrapper from '../ui/ProviderWrapper';

export const metadata = {
  title: 'Pruebas web3',
  description: 'Probando integracion con smart contracts',
};

export default function CounterLayout({ children }) {
  return (
    <body>
      {/* <ChakraUIProvider>*/}
      <main className="h-screen">
      <Navbar className="h-2/6 sm:h-1/6 z-10 w-full" />
      <div className="flex justify-center items-center h-4/6 sm:h-5/6">
      {children}</div></main>{/* </ChakraUIProvider>*/}
    </body>
  );
}
