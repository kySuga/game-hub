import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="game hub" boxSize="5em" />
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
