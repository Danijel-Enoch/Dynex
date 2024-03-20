import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" py="24px">
      <Flex align="center" justify="space-between">
        {/* <Link to="/"> */}
        <img src={"logo-one.png"} alt="ADC Logo" width={100} />
        {/* </Link> */}
        <Flex
          align="center"
          gap="16px"
          display={{ base: "none", lg: "flex" }}
          fontWeight={400}
        >
          <Box as="a" _hover={{ color: "#34c153" }} href="#home">
            <Text>Home</Text>
          </Box>
          <Box as="a" _hover={{ color: "#34c153" }} href="#about">
            <Text>About</Text>
          </Box>
          <Box as="a" _hover={{ color: "#34c153" }} href="#service">
            <Text>Services</Text>
          </Box>
          <Box as="a" _hover={{ color: "#34c153" }} href="#contact">
            <Text>Contact</Text>
          </Box>
        </Flex>
        <Box
          onClick={onOpen}
          display={{ base: "flex", lg: "none" }}
          color={"white"}
        >
          <GiHamburgerMenu size={30} />
        </Box>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="#07091a">
          <DrawerCloseButton />
            <DrawerBody
              display="flex"
              flexDirection="column"
              my="30px"
              gap="24px"
            >
              <Box
                as="a"
                _hover={{ color: "#34c153" }}
                href="#home"
                onClick={onClose}
              >
                <Text>Home</Text>
              </Box>
              <Box
                as="a"
                _hover={{ color: "#34c153" }}
                href="#about"
                onClick={onClose}
              >
                <Text>About</Text>
              </Box>
              <Box
                as="a"
                _hover={{ color: "#34c153" }}
                href="#service"
                onClick={onClose}
              >
                <Text>Services</Text>
              </Box>
              <Box
                as="a"
                _hover={{ color: "#34c153" }}
                href="#contact"
                onClick={onClose}
              >
                <Text>Contact</Text>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
