"use client"
import type { ReactElement } from "react"

import { Input, HStack, IconButton, Link, Box } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { IconSearch, IconMenu2 } from "@tabler/icons-react"
import classes from "./SearchBar.module.css"
import { NightModeButton } from "../../layout/night-mode-switch"
export interface SearchBarProps {
	prop?: string
	word: string
	onSearch: (event: any) => Promise<void>
	onWordChange: (value: string) => void
}

const links = [
	{ link: "/home", label: "HOME" },
	{ link: "/reader", label: "READER" },
	{ link: "/dictionary", label: "DICTIONARY" },
	// { link: "/pricing", label: "PRICING" },
	// { link: "/chat", label: "CHAT" },
]

export const SearchBar = ({
	word,
	onSearch,
	onWordChange,
}: SearchBarProps): ReactElement => {
	const { open: opened, onToggle: toggle } = useDisclosure()

	const items = links.map((link) => (
		<Link
			key={link.label}
			className={classes["link"]}
			href={link.link}
			onClick={(event) => {
				console.log(link)
				// event.preventDefault()
			}}
		>
			{link.label}
		</Link>
	))

	return (
		<div className={classes["inner"]}>
			<HStack>
				<IconButton
					display={{ base: "flex", sm: "none" }}
					onClick={toggle}
					size="sm"
					aria-label="Menu"
				>
					<IconMenu2 />
				</IconButton>
				{/* <MantineLogo size={28} /> */}
				<Box display={{ base: "none", sm: "flex" }}>{items}</Box>
			</HStack>
			{/* Autocomplete replacement */}
			<Input
				placeholder="Search"
				value={word}
				onChange={(e) => onWordChange(e.target.value)}
			/>
		</div>
	)
}

export default SearchBar
