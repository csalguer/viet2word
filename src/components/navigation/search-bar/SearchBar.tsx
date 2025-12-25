import type { ReactElement } from "react"
import { Input, Box, VStack, Text } from "@chakra-ui/react"
import { useDictionaryEntries } from "@/lib/api"

export interface SearchBarProps {
	word: string
	onSearch: (event: any) => Promise<void>
	onWordChange: (value: string) => void
}

export const SearchBar = ({
	word,
	onWordChange,
	onSearch,
}: SearchBarProps): ReactElement => {
	const { data } = useDictionaryEntries(1, 5, word)

	return (
		<Box position="relative" width="300px">
			<Input
				placeholder="Search"
				value={word}
				onChange={(e) => {
					onWordChange(e.target.value)
				}}
			/>
			{word && data?.data && data.data.length > 0 && (
				<Box
					position="absolute"
					top="100%"
					left={0}
					right={0}
					zIndex={10}
					border="1px solid"
					borderColor="gray.200"
					bg="white"
					_dark={{ bg: "gray.700", borderColor: "gray.600" }}
					maxH="200px"
					overflowY="auto"
					shadow="md"
					borderRadius="md"
					mt={1}
				>
					<VStack align="stretch" gap={0}>
						{data.data.map((entry) => (
							<Box
								key={entry.word}
								p={2}
								borderBottom="1px solid"
								borderColor="gray.100"
								_dark={{ borderColor: "gray.600" }}
								_hover={{
									bg: "gray.50",
									_dark: { bg: "gray.600" },
									cursor: "pointer",
								}}
								onClick={() => {
									onWordChange(entry.word)
								}}
							>
								<Text fontWeight="bold">{entry.word}</Text>
								{entry.meanings?.[0]?.definitions?.[0]?.definition && (
									<Text fontSize="sm" color="gray.500" lineClamp={1}>
										{entry.meanings[0].definitions[0].definition}
									</Text>
								)}
							</Box>
						))}
					</VStack>
				</Box>
			)}
		</Box>
	)
}

export default SearchBar
