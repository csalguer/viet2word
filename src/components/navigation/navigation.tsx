import { useState, useCallback, ReactNode, FormEvent } from "react"
import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import styles from "./navigation.css"
import { PageContainer } from "../layout/page-container"
import { SearchBar } from "./search-bar/SearchBar"
import { NightModeSwitch } from "../layout/night-mode-switch/NightModeSwitch"

export interface NavigationProps {
	prop?: string
	children: ReactNode
}

type DefinitionType = { definition?: string; example?: string }
const NULL_DEFINITION = { definition: null, example: null }

export function Navigation({ children }: NavigationProps) {
	const { open: mobileOpened, onToggle: toggleMobile } = useDisclosure()
	const { open: desktopOpened, onToggle: toggleDesktop } = useDisclosure()
	const [word, setWord] = useState("")
	const [definition, setDefinition] = useState(NULL_DEFINITION)
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const { colorMode, toggleColorMode } = useColorMode()

	const handleSearch = async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		// TODO: Implement API call to fetch word definition
		// const data = await getWordDefinition(null && "")
		setDefinition(NULL_DEFINITION)
		setError("")
		setLoading(false)
	}

	return (
		<>
			<Box
				w={"100%"}
				h={"100vh"}
				// padding={{ base: 0, sm: 0, md: "md", lg: "md" }}
				style={{
					background:
						"radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
					overflow: "scroll",
				}}
			>
				<Box as="header" w={"100vw"} bg="transparent" border="none">
					<HStack justify="space-between" px="md" py="xs">
						<SearchBar
							word={word}
							onSearch={handleSearch}
							onWordChange={setWord}
						/>
						<NightModeSwitch darkMode={colorMode === "dark"} />
					</HStack>
				</Box>
				<PageContainer>{children}</PageContainer>
			</Box>
		</>
	)
}

export default Navigation
