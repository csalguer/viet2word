import {
	Box,
	Container,
	Heading,
	Text,
	VStack,
	Center,
	Spinner,
	IconButton,
	HStack,
} from "@chakra-ui/react"
import { IconTrash, IconList, IconLayoutGrid } from "@tabler/icons-react"
import { useSavedVocabStore } from "@/stores/savedVocab"
import { useSavedWords } from "@/services/api"
import { WordCard } from "@/components/dictionary/WordCard"
import { CardList } from "@/components/dictionary/card-list/CardList"
import { useState } from "react"

export const SavedVocab = () => {
    const [viewMode, setViewMode] = useState<"list" | "card">("list")
	const { savedWords, toggleSaved } = useSavedVocabStore()
	const { data: words, isLoading, isError } = useSavedWords(savedWords)

	return (
		<Container maxW="container.md" py={8}>
			<VStack gap={8} align="stretch">
				<VStack gap={2}>
					<Heading
						fontFamily="editorialSerif"
						size="xl"
						textAlign="center"
						color="fg"
					>
						Saved Vocabulary
					</Heading>
					<Text fontSize="sm" color="fg.muted" textAlign="center">
						{savedWords.length} word{savedWords.length !== 1 ? "s" : ""} saved
					</Text>
				</VStack>

				{/* Loading */}
				{isLoading && savedWords.length > 0 && (
					<Center py={12}>
						<Spinner size="xl" color="accent.fg" borderWidth="4px" />
					</Center>
				)}

				{/* Error */}
				{isError && (
					<Center py={12}>
						<VStack gap={2}>
							<Text fontSize="lg" fontWeight="medium" color="fg">
								Could not load saved words
							</Text>
							<Text fontSize="sm" color="fg.muted">
								Make sure the backend is running.
							</Text>
						</VStack>
					</Center>
				)}

				{/* Empty State */}
				{savedWords.length === 0 && (
					<Center py={16} flexDirection="column" gap={4}>
						<Box
							fontSize="5xl"
							opacity={0.3}
						>
							📚
						</Box>
						<Text fontSize="lg" fontWeight="medium" color="fg.muted">
							No words saved yet.
						</Text>
						<Text fontSize="sm" color="fg.muted">
							Click the bookmark icon on any word to save it here.
						</Text>
					</Center>
				)}

				{!isLoading && !isError && words && words.length > 0 && (
					<>
						<HStack justify="end">
							<HStack gap={1} bg="surface" p={1} borderRadius="lg" border="1px solid" borderColor="border">
								<IconButton
									aria-label="List view"
									variant={viewMode === "list" ? "solid" : "ghost"}
									size="sm"
									colorPalette="gray"
									onClick={() => setViewMode("list")}
								>
									<IconList size={18} />
								</IconButton>
								<IconButton
									aria-label="Card view"
									variant={viewMode === "card" ? "solid" : "ghost"}
									size="sm"
									colorPalette="gray"
									onClick={() => setViewMode("card")}
								>
									<IconLayoutGrid size={18} />
								</IconButton>
							</HStack>
						</HStack>

						{viewMode === "list" ? (
							<VStack gap={6} align="stretch" pb={20}>
								{words.map((word) => (
									<WordCard key={word.id} word={word} />
								))}
							</VStack>
						) : (
							<Box pb={20}>
								<CardList
									content={words.map((word) => ({
										word: word.word,
										phonetic: word.sounds?.[0]?.ipa,
										meanings: word.senses.map((sense) => ({
											partOfSpeech: word.pos,
											definitions: (sense.glosses || []).map((def) => ({
												definition: def,
												example: (sense.examples?.[0] as any)?.text,
											})),
										})),
									}))}
								/>
							</Box>
						)}
					</>
				)}
			</VStack>
		</Container>
	)
}

