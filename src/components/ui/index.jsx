import { Box, Flex, Text } from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <Box as="nav" py="24px">
      <Flex align="center" justify="space-between">
        {/* <Link to="/"> */}
        <img src={"logo-one.png"} alt="ADC Logo" width={100} />
        {/* </Link> */}
        <Flex align="center" gap="16px" display={{ base: "none", lg: "flex" }} fontWeight={400}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Contact</Text>
        </Flex>
        <Box display={{ base: "flex", lg: "none" }} color={"white"}>
          <GiHamburgerMenu size={30} />
        </Box>
      </Flex>
    </Box>
  );
}
