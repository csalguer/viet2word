import {
	Box,
	Container,
	VStack,
	Text,
	Spinner,
	Center,
} from "@chakra-ui/react"
import { useSearch } from "@tanstack/react-router"
import { useDictionaryEntries } from "@/services/api"
import { SearchBar } from "@/components/navigation/search-bar/SearchBar"
import { WordCard } from "@/components/dictionary/WordCard"

export const Dictionary = () => {
	const search = useSearch({ from: "/dictionary" }) as { q?: string }
	const query = search.q || ""

	const { data, isLoading, isError } = useDictionaryEntries(1, 20, query)

	return (
		<Container maxW="container.md" py={8}>
			<VStack gap={8} align="stretch">
				{/* Search Header */}
				<Box>
					<SearchBar
						initialValue={query}
						placeholder="Search dictionary..."
					/>
				</Box>

				{/* Results Header */}
				{query && (
					<Text fontSize="sm" color="fg.muted">
						Showing results for{" "}
						<Text as="span" fontWeight="bold" color="fg">
							"{query}"
						</Text>
					</Text>
				)}

				{/* Loading State */}
				{isLoading && (
					<Center py={12}>
						<Spinner
							size="xl"
							color="accent.fg"
							borderWidth="4px"
						/>
					</Center>
				)}

				{/* Error State */}
				{isError && (
					<Center py={12}>
						<VStack gap={2}>
							<Text fontSize="lg" fontWeight="medium" color="fg">
								Something went wrong
							</Text>
							<Text fontSize="sm" color="fg.muted">
								Could not fetch definitions. Is the backend
								running?
							</Text>
						</VStack>
					</Center>
				)}

				{/* Empty State */}
				{!isLoading && !isError && data?.data.length === 0 && (
					<Center py={12} flexDirection="column" gap={4}>
						<Text fontSize="lg" fontWeight="medium" color="fg.muted">
							No definitions found.
						</Text>
						<Text fontSize="sm" color="fg.muted">
							Try searching for simple words like "ăn", "ngủ",
							"yêu".
						</Text>
					</Center>
				)}

				{/* Results List */}
				<VStack gap={6} align="stretch" pb={20}>
					{data?.data.map((word) => (
						<WordCard key={word.id} word={word} />
					))}
				</VStack>
			</VStack>
		</Container>
	)
}
