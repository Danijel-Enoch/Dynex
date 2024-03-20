import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export default function Features() {
  return (
    <Box my="60px" id="service">
      <VStack w="full" align="left" gap="48px">
        <VStack gap="48px" align="center">
          <Heading
            fontSize={[32, 64]}
            bgGradient="linear(to-r, #34c153, #3489c1)"
            bgClip="text"
          >
            Why Choose Dynex
          </Heading>
          <SimpleGrid
            columns={[1, 2, 3]}
            gap="28px"
            w="full"
            justify="space-between"
          >
            <VStack
              align="center"
              gap="18px"
              border="1px"
              borderColor="whiteAlpha.200"
              rounded="28px"
              p="28px"
              bg="rgba(255, 255, 255, 0.06)"
              opacity="1"
              backdropFilter="blur(40px)"
            >
              <Text fontSize={20} fontWeight={700}>
                Advanced Technology
              </Text>
            </VStack>
            <VStack
              align="center"
              gap="18px"
              border="1px"
              borderColor="whiteAlpha.200"
              rounded="28px"
              p="28px"
              bg="rgba(255, 255, 255, 0.06)"
              opacity="1"
              backdropFilter="blur(40px)"
            >
              <Text fontSize={20} fontWeight={700}>
                Expertise and Support
              </Text>
            </VStack>
            <VStack
              align="center"
              gap="18px"
              border="1px"
              borderColor="whiteAlpha.200"
              rounded="28px"
              p="28px"
              bg="rgba(255, 255, 255, 0.06)"
              opacity="1"
              backdropFilter="blur(40px)"
            >
              <Text fontSize={20} fontWeight={700}>
                Reliability and Transparency
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
