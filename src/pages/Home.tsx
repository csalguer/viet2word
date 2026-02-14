import {
	Box,
	Container,
	Heading,
	Text,
	VStack,
	SimpleGrid,
	HStack,
} from "@chakra-ui/react"
import { SearchBar } from "@/components/navigation/search-bar/SearchBar"
import { useDictionaryEntries } from "@/services/api"
import { Link } from "@tanstack/react-router"

const WordOfTheDay = () => {
	const { data, isLoading } = useDictionaryEntries(1, 1, "hạnh phúc")
	const word = data?.data?.[0]

	if (isLoading || !word)
		return <Box h="200px" bg="subtle" borderRadius="lg" />

	return (
		<Box
			p={8}
			bg="surface"
			border="1px solid"
			borderColor="border"
			borderRadius="xl"
			shadow="lg"
			maxW="md"
			mx="auto"
		>
			<Text
				fontSize="sm"
				fontWeight="bold"
				color="accent.fg"
				textTransform="uppercase"
				mb={2}
			>
				Word of the Day
			</Text>
			<Heading fontFamily="editorialSerif" size="2xl" mb={2} color="fg">
				{word.word}
			</Heading>
			<Text
				fontSize="xl"
				color="fg.muted"
				mb={4}
				fontStyle="italic"
				fontFamily="mono"
			>
				/ {word.sounds?.[0]?.ipa || "..."} /
			</Text>

			<VStack align="start" gap={3}>
				{word.senses?.[0]?.glosses?.map((gloss, idx) => (
					<Text key={idx} fontSize="lg" color="fg">
						{idx + 1}. {gloss}
					</Text>
				))}
			</VStack>

			<Box
				mt={6}
				pt={4}
				borderTop="1px solid"
				borderColor="border"
			>
				<Link
					to="/dictionary"
					search={{ q: word.word }}
					style={{ fontWeight: "bold" }}
				>
					<Text color="accent.fg" _hover={{ textDecoration: "underline" }}>
						View full details →
					</Text>
				</Link>
			</Box>
		</Box>
	)
}

export const Home = () => {
	return (
		<Box
			bg="canvas"
			minH="calc(100vh - 64px)"
			display="flex"
			flexDirection="column"
			justifyContent="center"
		>
			<Container maxW="container.lg" py={20}>
				<VStack gap={12} align="center">
					{/* Hero Section */}
					<VStack gap={6} maxW="2xl" textAlign="center">
						<Heading
							fontFamily="display"
							size={{ base: "3xl", md: "4xl" }}
							fontWeight="black"
							letterSpacing="tight"
							lineHeight="1.1"
							color="fg"
						>
							The Modern <br />
							<Text as="span" color="accent.fg">
								Vietnamese
							</Text>{" "}
							Dictionary
						</Heading>
						<Text fontSize="xl" color="fg.muted" maxW="lg">
							A beautiful, fast, and comprehensive bridge between
							Vietnamese and English.
						</Text>
					</VStack>

					{/* Hero Search */}
					<Box w="full" maxW="2xl" py={8}>
						<SearchBar
							variant="hero"
							placeholder="Search any word (e.g. 'yêu', 'love')..."
						/>
					</Box>

					{/* Word of the Day */}
					<SimpleGrid
						columns={{ base: 1, md: 1 }}
						w="full"
						gap={8}
						pt={10}
					>
						<WordOfTheDay />
					</SimpleGrid>

					{/* Trending Quick Links */}
					<HStack gap={6} pt={10} color="fg.muted" fontSize="sm">
						<Text>Trending:</Text>
						{["phở", "bánh mì", "cà phê", "áo dài"].map(
							(term) => (
								<Link
									key={term}
									to="/dictionary"
									search={{ q: term }}
									style={{ textDecoration: "underline" }}
								>
									{term}
								</Link>
							)
						)}
					</HStack>
				</VStack>
			</Container>
		</Box>
	)
}

export default Home
