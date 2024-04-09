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
      <main className="h-screen ">
      <Navbar className="h-1/6" />
      <div className="flex justify-center items-center h-5/6">
      {children}</div></main>{/* </ChakraUIProvider>*/}
    </body>
  );
}
