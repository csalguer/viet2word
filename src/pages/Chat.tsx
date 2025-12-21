import { ReactElement, useState } from "react"
import {
	Box,
	VStack,
	HStack,
	Input,
	IconButton,
	Text,
	Container,
	Heading,
} from "@chakra-ui/react"
import { IconSend } from "@tabler/icons-react"
import { Navigation } from "../components/navigation/navigation"
import { PageContainer } from "../components/dictionary"

interface Message {
	id: string
	text: string
	sender: "user" | "bot"
	timestamp: Date
}

const MOCK_MESSAGES: Message[] = [
	{
		id: "1",
		text: "Xin chào! Bạn khỏe không?",
		sender: "bot",
		timestamp: new Date(Date.now() - 60000),
	},
]

export function Chat(): ReactElement {
	const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES)
	const [inputValue, setInputValue] = useState("")

	const handleSendMessage = () => {
		if (!inputValue.trim()) return

		const newMessage: Message = {
			id: Date.now().toString(),
			text: inputValue,
			sender: "user",
			timestamp: new Date(),
		}

		setMessages((prev) => [...prev, newMessage])
		setInputValue("")

		// Mock bot response
		setTimeout(() => {
			const botResponse: Message = {
				id: (Date.now() + 1).toString(),
				text: "Tôi là một bot học tiếng Việt. Tôi có thể giúp gì cho bạn?",
				sender: "bot",
				timestamp: new Date(),
			}
			setMessages((prev) => [...prev, botResponse])
		}, 1000)
	}

	return (
		<Navigation>
			<HStack
				style={{
					background:
						"radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
					minHeight: "100vh",
					alignItems: "flex-start",
				}}
				w="100%"
			>
				<PageContainer>
					<Container maxW="container.md" h="80vh" py={8}>
						<VStack h="100%" gap={4} align="stretch">
							<Heading size="lg" textAlign="center">
								Chat Practice
							</Heading>

							<VStack
								flex={1}
								bg="whiteAlpha.800"
								borderRadius="xl"
								p={4}
								overflowY="auto"
								gap={4}
								shadow="sm"
							>
								{messages.map((msg) => (
									<Box
										key={msg.id}
										alignSelf={
											msg.sender === "user" ? "flex-end" : "flex-start"
										}
										bg={msg.sender === "user" ? "blue.500" : "gray.100"}
										color={msg.sender === "user" ? "white" : "black"}
										px={4}
										py={2}
										borderRadius="lg"
										maxW="80%"
									>
										<Text>{msg.text}</Text>
									</Box>
								))}
							</VStack>

							<HStack gap={2}>
								<Input
									placeholder="Type a message..."
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === "Enter") handleSendMessage()
									}}
									bg="white"
								/>
								<IconButton
									aria-label="Send message"
									onClick={handleSendMessage}
									colorPalette="blue"
								>
									<IconSend size={20} />
								</IconButton>
							</HStack>
						</VStack>
					</Container>
				</PageContainer>
			</HStack>
		</Navigation>
	)
}
