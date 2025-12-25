/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactElement } from "react"
import { useState } from "react"
import { HStack, Center, Stack, Text, Button } from "@chakra-ui/react"
import { PageContainer, SearchBar, CardList } from "../components/dictionary"
import { Navigation } from "../components/navigation/navigation"
import { useDictionaryEntries } from "../lib/api"

export function Dictionary(): ReactElement {
	const [searchWord, setSearchWord] = useState("")
	const [page, setPage] = useState(1)
	const limit = 12

	const { data, isLoading, isError } = useDictionaryEntries(
		page,
		limit,
		searchWord
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
								<SearchBar
									word={searchWord}
									onWordChange={(w) => {
										setSearchWord(w)
										setPage(1)
									}}
									onSearch={async () => {}}
								/>
							</Center>
							{isLoading ? (
								<Center>
									<Text>Loading...</Text>
								</Center>
							) : isError ? (
								<Center>
									<Text color="red.500">Error loading data</Text>
								</Center>
							) : (
								<>
									<CardList content={data?.data || []} />
									<HStack justify="center" mt={4} pb={8}>
										<Button
											onClick={() => setPage((p) => Math.max(1, p - 1))}
											disabled={page === 1}
										>
											Prev
										</Button>
										<Text>
											Page {page} of {data?.totalPages || 1}
										</Text>
										<Button
											onClick={() =>
												setPage((p) => Math.min(data?.totalPages || 1, p + 1))
											}
											disabled={page === (data?.totalPages || 1)}
										>
											Next
										</Button>
									</HStack>
								</>
							)}
						</Stack>
					</PageContainer>
				</HStack>
			</Navigation>
		</>
	)
}
