"use client"
import type { ReactElement } from "react"

import { Autocomplete, Group, Burger, rem } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconSearch } from "@tabler/icons-react"
// import { MantineLogo } from "@mantinex/mantine-logo"
import classes from "../SearchBar/SearchBar.module.css"

export interface SearchBarProps {
	prop?: string
}

const links = [
	{ link: "/home", label: "HOME" },
	{ link: "/reader", label: "READER" },
	{ link: "/dictionary", label: "DICTIONARY" },
	{ link: "/pricing", label: "PRICING" },
	{ link: "/chat", label: "CHAT" },
]

export const SearchBar = (): ReactElement => {
	const [opened, { toggle }] = useDisclosure(false)

	const items = links.map((link) => (
		<a
			key={link.label}
			className={classes.link}
			href={link.link}
			onClick={(event) => {
				event.preventDefault()
			}}
		>
			{link.label}
		</a>
	))

	return (
		<header className={classes.header}>
			<div className={classes.inner}>
				<Group>
					<Burger hiddenFrom="sm" opened={opened} size="sm" onClick={toggle} />
					{/* <MantineLogo size={28} /> */}
				</Group>

				<Group>
					<Group className={classes.links} gap={5} ml={50} visibleFrom="sm">
						{items}
					</Group>
					<Autocomplete
						className={classes.search}
						placeholder="Search"
						visibleFrom="xs"
						// data={["猫	mèo", "犬	chó", "感恩	cảm ơn", "工作	công tác"]}
						leftSection={
							<IconSearch
								stroke={1.5}
								style={{ width: rem(16), height: rem(16) }}
							/>
						}
					/>
				</Group>
			</div>
		</header>
	)
}

export default SearchBar
