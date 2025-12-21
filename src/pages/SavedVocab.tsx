import type { ReactElement } from "react"
import { HStack, Center, Stack, Heading, Text } from "@chakra-ui/react"
import { PageContainer, CardList } from "../components/dictionary"
import { Navigation } from "../components/navigation/navigation"
import { MOCK_CARD_INFO } from "../lib/mockData"
import { useSavedVocabStore } from "../lib/store"

export function SavedVocab(): ReactElement {
	const { savedWords } = useSavedVocabStore()

	const savedContent = MOCK_CARD_INFO.data.filter((card) =>
		savedWords.includes(card.word)
	)

	return (
		<>
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
						<Stack gap={8} w="100%" pt={8}>
							<Center>
								<Heading size="xl">Saved Vocabulary</Heading>
							</Center>
							{savedContent.length > 0 ? (
								<CardList content={savedContent} />
							) : (
								<Center>
									<Text color="gray.500">No saved words yet.</Text>
								</Center>
							)}
						</Stack>
					</PageContainer>
				</HStack>
			</Navigation>
		</>
	)
}
