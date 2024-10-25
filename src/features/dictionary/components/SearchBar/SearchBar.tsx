"use client";
import { ReactElement, ReactNode } from "react";
import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo"
// import classes from "./SearchBar.module.css";

export interface SearchBarProps {
	prop?: string;
}

const links = [
	{ link: "/home", label: "HOME" },
	{ link: "/reader", label: "READER" },
	{ link: "/dictionary", label: "DICTIONARY" },
	{ link: "/pricing", label: "PRICING" },
	{ link: "/chat", label: "CHAT" },
];

export const SearchBar = (): ReactElement => {
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={classes.link}
			onClick={(event) => event.preventDefault()}
		>
			{link.label}
		</a>
	));

	return (
		<header className={classes.header}>
			<div className={classes.inner}>
				<Group>
					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
					{/* <MantineLogo size={28} /> */}
				</Group>

				<Group>
					<Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
						{items}
					</Group>
					<Autocomplete
						className={classes.search}
						placeholder="Search"
						leftSection={
							<IconSearch
								style={{ width: rem(16), height: rem(16) }}
								stroke={1.5}
							/>
						}
						data={[
							"大学  dai học",
							"猫	mèo",
							"犬	chó",
							"感恩	cảm ơn",
							"工作	công tác",
						]}
						visibleFrom="xs"
					/>
				</Group>
			</div>
		</header>
	);
};
