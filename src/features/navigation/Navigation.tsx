import React from "react"

import styles from "./Navigation.css"

export interface navigationProps {
	prop?: string
}

export function Navigation({ children }: navigationProps) {
	return (
		<AppShell
			header={{
				height: { base: 48, sm: 60, lg: 76 },
				breakpoint: "sm",
				width: "100vw",
				collapsed: { mobile: mobileOpened, desktop: desktopOpened },
			}}
			navbar={{
				// hidden: "md",
				// hiddenFrom: "sm",
				breakpoint: "sm",
				collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			}}
			padding={"md"}
		>
			<AppShell.Header width={"100vw"}>"HEADER"</AppShell.Header>

			<AppShell.Navbar>"Navbar"</AppShell.Navbar>
			{children}
		</AppShell>
	)
}
