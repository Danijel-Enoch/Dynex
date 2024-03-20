import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function HowItWorks() {
  return (
    <Box py="60px">
      <VStack align="left" gap="48px" w="full">
        <VStack align="left">
          <Heading
            bgGradient="linear(to-r, #34c153, #3489c1)"
            bgClip="text"
            fontSize={[32,64]}
            fontWeight={700}
          >
            SERVICES
          </Heading>
          <Text fontSize={18} maxW="720px">
            Our platform is where complexity meets simplicity, providing a
            seamless interface for clients to tap into a global network of AI
            nodes.
          </Text>
        </VStack>
        <Flex flexWrap="wrap" align="center">
          <VStack
            maxW="580px"
            gap="32px"
            w="full"
            align="left"
            justify="space-between"
          >
            <Flex flexDirection={["column", "row"]} align={["left","center"]} gap="24px">
              <Box
                bg="#34c1523e"
                px="24px"
                py="20px"
                w='fit-content'
                fontWeight={500}
                fontSize={24}
                rounded="16px"
              >
                01
              </Box>
              <VStack align="left" gap="16px">
                <Text fontSize={24} fontWeight={700}>
                  High-Performance GPU Mining
                </Text>
                <Text lineHeight="26px" color="whiteAlpha.700" fontWeight={300}>
                  At Dynex, we utilize state-of-the-art GPU hardware to provide
                  miners with the computational power needed to process Ethereum
                  transactions quickly and efficiently. Our high-performance
                  mining services are designed to maximize profitability and
                  minimize downtime, ensuring a smooth and seamless mining
                  experience for our clients.
                </Text>
              </VStack>
            </Flex>
            <Flex flexDirection={["column", "row"]} align={["left","center"]} gap="24px">
              <Box
                bg="#34c1523e"
                px="24px"
                py="20px"
                w='fit-content'
                fontWeight={500}
                fontSize={24}
                rounded="16px"
              >
                02
              </Box>
              <VStack align="left" gap="16px">
                <Text fontSize={24} fontWeight={700}>
                  Customized Mining Solutions
                </Text>
                <Text lineHeight="26px" color="whiteAlpha.700" fontWeight={300}>
                  Our team of experts works closely with miners to design
                  customized mining setups that suit their specific needs and
                  preferences. Whether you&apos;re a seasoned miner or just
                  starting out, we can tailor a mining solution that meets your
                  requirements and helps you achieve your mining goals.
                </Text>
              </VStack>
            </Flex>
            <Flex flexDirection={["column", "row"]} align={["left","center"]} gap="24px">
              <Box
                bg="#34c1523e"
                px="24px"
                py="20px"
                w='fit-content'
                fontWeight={500}
                fontSize={24}
                rounded="16px"
              >
                03
              </Box>
              <VStack align="left" gap="16px">
                <Text fontSize={24} fontWeight={700}>
                  24/7 Monitoring and Support
                </Text>
                <Text lineHeight="26px" color="whiteAlpha.700" fontWeight={300}>
                  We understand the importance of uptime and reliability in
                  mining operations. That&apos;s why we offer round-the-clock
                  monitoring and support to ensure the smooth operation of
                  mining rigs and address any issues promptly. With Dynex, you
                  can rest assured that your mining operations are in good
                  hands.
                </Text>
              </VStack>
            </Flex>
          </VStack>
          <Box>
            <Image src="/Gpu-mining.png" alt="" />
          </Box>
        </Flex>
        <VStack
          gap="16px"
          w="full"
          p="24px"
          bg="rgba(255, 255, 255, 0.06)"
          rounded="24px"
        >
          {/* <Text fontWeight={600} fontSize={24}>
            Get Started
          </Text> */}
          <Text
            maxW="600px"
            textAlign={"center"}
            lineHeight="26px"
            fontWeight={300}
          >
            Ready to elevate your Ethereum mining experience? Contact us today
            to learn more about our services and how we can help you achieve
            your mining goals.
          </Text>
          <Button
            variant="solid"
            rounded="full"
            px="32px"
            py="24px"
            bgGradient="linear(to-r, #34c153, #3489c1)"
            _hover={{ bg: "#34c153" }}
            color="white"
          >
            Get Started
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
