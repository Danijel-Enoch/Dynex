import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	return (
		<Box my="30px" id="contact">
			<VStack
				rounded={24}
				bgGradient="linear(to-r, #34c153, #3489c1)"
				p="24px"
				w="full"
			>
				<Text fontWeight={700} fontSize={32} textAlign="center">
					Join the Dynex Community
				</Text>
				<Text
					maxW="660px"
					textAlign="center"
					fontWeight={300}
					lineHeight="26px"
				>
					Stay connected with Dynex and join our growing community of
					miners and blockchain enthusiasts. Follow us on social media
					and subscribe to our newsletter to receive the latest
					updates, news, and insights from the world of DYNEX mining.
				</Text>

				<Flex align="center" gap="16px">
					<Box
						as="a"
						target="_blank"
						href="https://t.me/Dynex_Portal"
						bg="whiteAlpha.400"
						p="12px"
						rounded="12px"
					>
						<FaTelegram size={20} />
					</Box>
					<Box
						as="a"
						target="_blank"
						href="http://Twitter.com/Dynex_ERC"
						bg="whiteAlpha.400"
						p="12px"
						rounded="12px"
					>
						<FaXTwitter size={20} />
					</Box>
				</Flex>
			</VStack>
		</Box>
	);
}
