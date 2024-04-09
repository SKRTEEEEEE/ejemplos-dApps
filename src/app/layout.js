import { Inter } from 'next/font/google';
import './globals.css';
import ThirdWebProviderWrapper from "../lib/ThirdWebProvider";
import StyledComponentsRegistry from '../lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'QUEEN420 beta',
  description: 'Working in the new future of web',
};

export default function RootLayout({ children }) {
  return (
    <ThirdWebProviderWrapper>
      <html lang="en">

        <body className={inter.className}>
          {/* <Cuadrito /> 
        El ProviderWrapper aveces lanza un warning del re hidratación de react, si lo pongo en page.js creo que no pasa
        Solo cuando refresco la url /counter
        Esta es la mejor combinación para usar varios Wrappers
        */}<StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThirdWebProviderWrapper>
  );
}
