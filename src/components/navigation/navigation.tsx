import { useState, useCallback, ReactNode, FormEvent } from "react"
import { AppShell, useMantineColorScheme, Group } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import styles from "./navigation.css"
import { PageContainer } from "../layout/page-container"
import { SearchBar } from "./search-bar/SearchBar"
import { ThemeToggle } from "../terra/ThemeToggle"
export interface NavigationProps {
	prop?: string
	children: ReactNode
}

type DefinitionType = { definition?: string; example?: string }
const NULL_DEFINITION = { definition: null, example: null }

export function Navigation({ children }: NavigationProps) {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure()
	const [word, setWord] = useState("")
	const [definition, setDefinition] = useState(NULL_DEFINITION)
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

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
			<AppShell
				w={"100%"}
				h={"100vh"}
				// padding={{ base: 0, sm: 0, md: "md", lg: "md" }}
				style={{
					background: "radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
					overflow: "scroll",
				}}
			>
				<AppShell.Header
					styles={{
						header: {
							background: "transparent",
							border: "none",
						},
					}}
					w={"100vw"}
				>
					<Group justify="space-between" px="md" py="xs">
						<SearchBar
							word={word}
							onSearch={handleSearch}
							onWordChange={setWord}
						/>
						<ThemeToggle />
					</Group>
				</AppShell.Header>
				<PageContainer>{children}</PageContainer>
			</AppShell>
		</>
	)
}

export default Navigation
