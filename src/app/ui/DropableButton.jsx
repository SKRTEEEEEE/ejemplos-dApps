"use client"

import { ChakraUIProvider } from "@/lib/ChakraUIProvider";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


function DropableButton() {
  return (
    <ChakraUIProvider>
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
           📎 Ir a 
        </MenuButton>
        <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
</Menu>
    </ChakraUIProvider>
  );
}

export default DropableButton;     
