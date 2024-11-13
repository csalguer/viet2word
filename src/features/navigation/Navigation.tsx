import { useState, useCallback } from "react"
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import styles from "./Navigation.css"
import { SearchBar } from "../dictionary/components"
export interface navigationProps {
	prop?: string
}

type DefinitionType = { definition?: string; example?: string }
const NULL_DEFINITION = { definition: null, example: null }

export function Navigation({ children }: navigationProps) {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure()
	const [word, setWord] = useState("")
	const [definition, setDefinition] = useState(NULL_DEFINITION)
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const handleSearch = async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		// TODO: Implement API call to fetch word definition
		// const data = await getWordDefinition(null && "")
		setDefinition(NULL_DEFINITION)
		setError("")
		setLoading(false)
	}

	return (
		<AppShell
			header={{
				// height: { base: 48, sm: 60, lg: 76 },
				// breakpoint: "sm",
				width: "100vw",
				// height: "10vh",
				// collapsed: { mobile: mobileOpened, desktop: desktopOpened },
			}}
			// navbar={{
			// 	// hidden: "md",
			// 	// hiddenFrom: "sm",
			// 	breakpoint: "sm",
			// 	collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			// }}
			padding={"md"}
		>
			<AppShell.Header width={"100vw"}>
				<SearchBar word={word} onSearch={handleSearch} onWordChange={setWord} />
			</AppShell.Header>

			{/* <AppShell.Navbar>"Navbar"</AppShell.Navbar> */}
			{children}
		</AppShell>
	)
}
