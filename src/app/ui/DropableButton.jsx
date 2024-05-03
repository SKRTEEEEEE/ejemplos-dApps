"use client"

import { ChakraUIProvider } from "@/lib/ChakraUIProvider";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";


function DropableButton() {
  return (
    <ChakraUIProvider>
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
           📎 Ir a 
        </MenuButton>
        <MenuList bgColor="black">
        <MenuItem bgColor="black"><Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-white text-md w-full text-center rounded-xl hover:shadow-xl hover:shadow-white/50" href="/">Ves al principio 🧑‍💻</Link></MenuItem>
            <MenuItem bgColor="black"><Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-white text-md w-full text-center rounded-xl hover:shadow-xl hover:shadow-white/50" href="/styled-with">Estilos usados 💅</Link></MenuItem>
            
            <MenuItem bgColor="black"><Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-white text-md w-full text-center rounded-xl hover:shadow-xl hover:shadow-white/50" href="/membership-page">Exclusivo miembros 🪙</Link></MenuItem>
            <MenuItem bgColor="black"><Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-white text-md w-full text-center rounded-xl hover:shadow-xl hover:shadow-white/50" href="/other">Futuras dApps ➕</Link></MenuItem>
            <MenuItem bgColor="black"><Link className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-white text-md w-full text-center rounded-xl hover:shadow-xl hover:shadow-white/50" href="/#">ℹ️ Blockchain ⛓️</Link></MenuItem>
        </MenuList>
</Menu>
    </ChakraUIProvider>
  );
}

export default DropableButton;     
