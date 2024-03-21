import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Image,
	Text,
	VStack
} from "@chakra-ui/react";

export default function Hero() {
	return (
		<Box py="60px" id="home">
			<Flex flexWrap="wrap" align="center" justify="space-between">
				<VStack align="left" gap="24px">
					<Heading fontSize={[32, 64]}>
						Welcome to Dynex: <br /> Empowering <br />{" "}
						<Box
							as="span"
							bgGradient="linear(to-r, #34c153, #3489c1)"
							bgClip="text"
						>
							DYNEX Mining
						</Box>
					</Heading>
					<Text
						maxW="520px"
						lineHeight="26px"
						fontSize={15}
						color="whiteAlpha.600"
					>
						Dynex is the premier GPU mining revolution with
						cutting-edge GPU technology, empowering miners worldwide
						to achieve peak performance and profitability. Explore
						our services and join us in shaping the future of
						Ethereum Networrk.
					</Text>
					<ButtonGroup gap="24px" orientation="horizontal">
						<Button
							as="a"
							target="_blalnk"
							href="http://gpu.dynexgpu.xyz"
							variant="solid"
							rounded="full"
							px="32px"
							py="24px"
							bgGradient="linear(to-r, #34c153, #3489c1)"
							_hover={{ bg: "#34c153" }}
							color="white"
						>
							Start App
						</Button>
						<Button
							as="a"
							target="_blalnk"
							href="https://dynexgpu-technology.gitbook.io/dynexgpu-technology/"
							variant="outline"
							color="white"
							rounded="full"
							_hover={{
								bgGradient: "linear(to-r, #34c153, #3489c1)"
							}}
							px="32px"
							py="24px"
						>
							View Docs
						</Button>
					</ButtonGroup>
				</VStack>
				<Image src="/GPU.png" alt="gpu image" width="420px" />
			</Flex>
		</Box>
	);
}
