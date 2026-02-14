/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Center,
	HStack,
	Box,
	Flex,
	Button,
	useBreakpointValue,
} from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import { useState, ReactElement } from "react"
import { VocabCard } from "../vocab-card"
import { VocabCardProps } from "../vocab-card/types"
import { withFadeOut, withZoom } from "@/styles/animations"

interface CardListProps {
	content: VocabCardProps[]
}

export const CardList = ({ content }: CardListProps): ReactElement => {
	const [selectedId, setSelectedId] = useState<number | null>(null)
	const isMobile = useBreakpointValue({ base: true, md: false })

	if (!content) return <></>

	return (
		<Box pos="relative" minH="50vh">
			<AnimatePresence>
				{selectedId !== null && content[selectedId] && (
					<Center
						pos="fixed"
						top={0}
						left={0}
						right={0}
						bottom={0}
						zIndex={100}
						bg="blackAlpha.600"
						onClick={() => setSelectedId(null)}
						p={4}
					>
						<Box onClick={(e) => e.stopPropagation()}>
							{withZoom(
								<VocabCard
									word={content[selectedId].word}
									phonetic={content[selectedId].phonetic}
									expanded={true}
									meanings={content[selectedId].meanings}
								/>,
								isMobile ? 1.1 : 1.5
							)}
						</Box>
					</Center>
				)}
			</AnimatePresence>

			<Flex
				direction="row"
				justify="center"
				gap="4"
				wrap="wrap"
				filter={selectedId !== null ? "blur(5px)" : "none"}
				transition="filter 0.2s"
			>
				{content.map((item, index) => (
					<Button
						key={`${item.word}-${index}`}
						variant="plain"
						h="auto"
						w="auto"
						p={0}
						onClick={() => setSelectedId(index)}
						_hover={{ transform: "scale(1.05)" }}
						transition="transform 0.2s"
					>
						{withFadeOut(
							<Box w={{ base: "300px", sm: "25vw", lg: "20vw" }}>
								<VocabCard
									word={item.word}
									phonetic={""}
									meanings={item.meanings}
									expanded={false}
								/>
							</Box>
						)}
					</Button>
				))}
			</Flex>
		</Box>
	)
}

interface CarouselListProps {
	content: VocabCardProps[]
	handleScroll?: () => void
}

export const CarouselList = ({ content }: CarouselListProps): ReactElement => {
	return (
		<>
			<Flex h={{ base: 300, sm: 250, md: 300, lg: 400 }}>
				<HStack
					overflowX="auto"
					flex={1}
					gap="md"
					css={{
						"&::-webkit-scrollbar": {
							display: "none",
						},
						msOverflowStyle: "none",
						scrollbarWidth: "none",
					}}
				>
					{content?.map((item, index) => {
						return (
							<Box key={index} minW="25%">
								<VocabCard
									size={"lg"}
									word={item.word}
									phonetic={item.phonetic}
									meanings={item.meanings}
								/>
							</Box>
						)
					})}
				</HStack>
			</Flex>
		</>
	)
}
