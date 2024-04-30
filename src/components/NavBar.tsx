import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="0.625rem">
      <Image src={logo} alt="game hub" boxSize="4rem" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
