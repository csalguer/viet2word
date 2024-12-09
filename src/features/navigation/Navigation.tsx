import { useState, useCallback } from "react"
import { AppShell, useMantineColorScheme } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import styles from "./Navigation.css"
import { PageContainer, SearchBar } from "../dictionary/components"
import { Gradients } from "../layout/styles/Gradients"
export interface NavigationProps {
	prop?: string
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
				padding={{ base: 0, sm: 0, md: "md", lg: "md" }}
				style={{
					background: Gradients.light,
					overflow: "scroll",
				}}
			>
				<AppShell.Header width={"100vw"}>
					<SearchBar
						word={word}
						onSearch={handleSearch}
						onWordChange={setWord}
					/>
				</AppShell.Header>
				<PageContainer>{children}</PageContainer>
			</AppShell>
		</>
	)
}

export default Navigation
