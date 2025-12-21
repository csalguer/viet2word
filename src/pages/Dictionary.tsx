/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactElement } from "react"
import { useState } from "react"
import { HStack, Center, Stack } from "@chakra-ui/react"
import { PageContainer, SearchBar, CardList } from "../components/dictionary"
import { Navigation } from "../components/navigation/navigation"
import { MOCK_CARD_INFO } from "../lib/mockData"

export function Dictionary(): ReactElement {
	const [searchWord, setSearchWord] = useState("")

	const filteredContent = MOCK_CARD_INFO.data.filter((card) =>
		card.word.toLowerCase().includes(searchWord.toLowerCase())
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
									onWordChange={setSearchWord}
									onSearch={async () => {}}
								/>
							</Center>
							<CardList content={filteredContent} />
						</Stack>
					</PageContainer>
				</HStack>
			</Navigation>
		</>
	)
}
