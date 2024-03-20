import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Box py="40px" id="about">
      <VStack align="center" gap="32px">
        <Heading
          fontSize={[32,64]}
          fontWeight={700}
          bgGradient="linear(to-r, #34c153, #3489c1)"
          bgClip="text"
        >
          About Us
        </Heading>
        <Flex
          flexDirection={['column', 'row']}
          mb="30px"
          align="center"
          gap="64px"
          justify="center"
        >
          <VStack align="left" gap="16px">
            <Text fontSize={32} fontWeight={700}>
              Who we are
            </Text>
            <Text
              maxW="480px"
              lineHeight="26px"
              color="whiteAlpha.700"
              fontWeight={300}
            >
              At Dynex, we are passionate about revolutionizing Ethereum mining
              through innovation, efficiency, and reliability. With years of
              experience and expertise in the blockchain industry, our team is
              dedicated to providing miners with the tools and resources they
              need to succeed in the ever-evolving world of cryptocurrency
              mining.
            </Text>
          </VStack>
          <Image src="Crypto.png" alt="" width={300} />
        </Flex>
        <Flex flexDirection={['column-reverse', 'row']} align="center" gap="64px" justify="center">
          <Image src="graphics-card.png" alt="" width={300} />
          <VStack align="left" gap="16px">
            <Text fontSize={32} fontWeight={700}>
              Our Mission
            </Text>
            <Text
              maxW="480px"
              lineHeight="26px"
              color="whiteAlpha.700"
              fontWeight={300}
            >
              Our mission is to empower miners with high-performance GPU mining
              solutions tailored specifically for the Ethereum blockchain. We
              strive to deliver innovative, reliable, and sustainable mining
              services that maximize profitability and efficiency, while
              contributing to the growth and stability of the Ethereum network.
              mining.
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
}
