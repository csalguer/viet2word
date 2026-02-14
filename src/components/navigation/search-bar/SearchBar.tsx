
import { useState, useRef, useEffect } from "react"
import { Input, Box, VStack, Text, Spinner, Group, InputAddon } from "@chakra-ui/react"
import { useDictionaryEntries } from "@/services/api"
import { useNavigate } from "@tanstack/react-router"
import { IconSearch } from "@tabler/icons-react"
import { useDebounce } from "@/hooks/useDebounce" // Assuming this exists or I'll implement it inline

export interface SearchBarProps {
	initialValue?: string
	variant?: "hero" | "nav"
	placeholder?: string
}

export const SearchBar = ({ initialValue = "", variant = "nav", placeholder = "Search dictionary..." }: SearchBarProps) => {
	const [query, setQuery] = useState(initialValue)
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()
	const containerRef = useRef<HTMLDivElement>(null)

	// Debounce query for API calls to avoid spamming
	const [debouncedQuery, setDebouncedQuery] = useState(query)
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query)
		}, 300)
		return () => clearTimeout(handler)
	}, [query])

	const { data, isLoading } = useDictionaryEntries(1, 5, debouncedQuery)
	const suggestions = debouncedQuery.length > 1 ? data?.data : []

	const handleSearch = (term: string) => {
		setIsOpen(false)
		navigate({ to: "/dictionary", search: { q: term } })
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch(query)
		}
	}

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	const isHero = variant === "hero"

	return (
		<Box position="relative" w={isHero ? "100%" : "300px"} maxW={isHero ? "600px" : "100%"} ref={containerRef}>
			<Group attached w="100%">
				<InputAddon bg={isHero ? "white" : "transparent"} borderRight="none" px={3}>
					<IconSearch size={20} color="gray" />
				</InputAddon>
				<Input
					placeholder={placeholder}
					value={query}
					onChange={(e) => {
						setQuery(e.target.value)
						setIsOpen(true)
					}}
					onKeyDown={handleKeyDown}
					onFocus={() => setIsOpen(true)}
					size={isHero ? "lg" : "md"}
					bg={isHero ? "white" : "transparent"}
					borderLeft="none"
					_focus={{ boxShadow: "none", borderColor: "blue.500" }}
					fontSize={isHero ? "lg" : "md"}
					borderRadius={isHero ? "lg" : "md"}
				/>
			</Group>

			{/* Dropdown Suggestions */}
			{isOpen && query.length > 1 && (
				<Box
					position="absolute"
					top="100%"
					left={0}
					right={0}
					zIndex={20}
					bg="white"
					_dark={{ bg: "gray.800", borderColor: "gray.700" }}
					border="1px solid"
					borderColor="gray.200"
					borderRadius="md"
					shadow="lg"
					mt={2}
					maxH="300px"
					overflowY="auto"
				>
					{isLoading ? (
						<Box p={4} display="flex" justifyContent="center">
							<Spinner size="sm" color="blue.500" />
						</Box>
					) : suggestions && suggestions.length > 0 ? (
						<VStack align="stretch" gap={0}>
							{suggestions.map((entry) => (
								<Box
									key={entry.id}
									p={3}
									borderBottom="1px solid"
									borderColor="gray.100"
									_dark={{ borderColor: "gray.700" }}
									_hover={{ bg: "blue.50", _dark: { bg: "whiteAlpha.100" }, cursor: "pointer" }}
									onClick={() => {
										setQuery(entry.word)
										handleSearch(entry.word)
									}}
								>
									<Text fontWeight="bold" fontSize="md">{entry.word}</Text>
									{entry.senses?.[0]?.glosses?.[0] && (
										<Text fontSize="sm" color="gray.500" noOfLines={1} mt={1}>
											{entry.senses[0].glosses[0]}
										</Text>
									)}
								</Box>
							))}
						</VStack>
					) : (
						<Box p={4} textAlign="center" color="gray.500">
							<Text fontSize="sm">No results found</Text>
						</Box>
					)}
				</Box>
			)}
		</Box>
	)
}
