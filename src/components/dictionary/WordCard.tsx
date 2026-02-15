import { Box, HStack, VStack, Text, Badge, IconButton } from "@chakra-ui/react"
import { IconBookmark, IconBookmarkFilled, IconVolume } from "@tabler/icons-react"
import { Word } from "@/types"
import { useSavedVocabStore } from "@/stores/savedVocab"

interface WordCardProps {
	word: Word
}

export const WordCard = ({ word }: WordCardProps) => {
	const { toggleSaved, isSaved } = useSavedVocabStore()
	const saved = isSaved(word.id)

	return (
		<Box
			p={6}
			bg="surface"
			border="1px solid"
			borderColor="border"
			borderRadius="xl"
			shadow="sm"
			_hover={{ shadow: "md", borderColor: "accent" }}
			transition="all 0.2s ease"
		>
			<HStack justify="space-between" align="start" mb={4}>
				<VStack align="start" gap={0}>
					<HStack gap={3} align="baseline">
						<Text
							fontFamily="editorialSerif"
							fontSize={{ base: "2xl", md: "3xl" }}
							fontWeight="bold"
							color="accent.fg"
						>
							{word.word}
						</Text>
						<Badge
							colorPalette="blue"
							variant="subtle"
							fontSize="0.7rem"
						>
							{word.pos}
						</Badge>
					</HStack>

					{word.sounds?.[0]?.ipa && (
						<HStack gap={2} mt={1}>
							<Text fontSize="md" color="fg.muted" fontFamily="mono">
								/{word.sounds[0].ipa}/
							</Text>
							{word.sounds[0].audio && (
								<IconButton
									aria-label="Play pronunciation"
									size="xs"
									variant="ghost"
									color="accent.fg"
								>
									<IconVolume size={16} />
								</IconButton>
							)}
						</HStack>
					)}
				</VStack>

				<IconButton
					aria-label={saved ? "Remove from saved" : "Save word"}
					variant="ghost"
					color={saved ? "accent" : "fg.muted"}
					_hover={{ color: "accent" }}
					onClick={() => toggleSaved(word.id)}
				>
					{saved ? <IconBookmarkFilled size={20} /> : <IconBookmark size={20} />}
				</IconButton>
			</HStack>

			<VStack align="start" gap={3} pl={0}>
				{word.senses?.map((sense, idx) => (
					<Box key={sense.id}>
						<HStack align="baseline">
							<Text fontWeight="bold" color="fg.muted" w="20px">
								{idx + 1}.
							</Text>
							<VStack align="start" gap={1}>
								{sense.glosses?.map((gloss, gIdx) => (
									<Text key={gIdx} fontSize="lg" lineHeight="short" color="fg">
										{gloss}
									</Text>
								))}
								{sense.examples?.map((ex: any, eIdx) => (
									<Text
										key={eIdx}
										fontSize="sm"
										color="fg.muted"
										fontStyle="italic"
										pl={2}
										borderLeft="2px solid"
										borderColor="border"
									>
										"{ex.text}"{" "}
										{ex.translation && `— ${ex.translation}`}
									</Text>
								))}
							</VStack>
						</HStack>
					</Box>
				))}
			</VStack>

			{word.etymology_text && (
				<Box
					mt={4}
					pt={3}
					borderTop="1px dashed"
					borderColor="border"
					w="full"
				>
					<Text fontSize="xs" color="fg.muted" lineClamp={2}>
						<Text as="span" fontWeight="bold">
							Etymology:{" "}
						</Text>
						{word.etymology_text}
					</Text>
				</Box>
			)}
		</Box>
	)
}
