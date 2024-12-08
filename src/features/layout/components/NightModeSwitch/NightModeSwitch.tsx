import { useState, useEffect } from "react"

import { useColorScheme } from "@mantine/hooks"
import { Switch, ActionIcon, rem } from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { colorsPractical } from "../../styles/Palette"

export interface NightModeSwitchProps {
	darkMode: boolean
}

export function NightModeSwitch({ prop }: NightModeSwitchProps) {
	const colorScheme = useColorScheme()

	const sunIcon = (
		<IconSun
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[1]}
		/>
	)

	const moonIcon = (
		<IconMoon
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[5]}
		/>
	)

	return (
		<Switch
			size="xl"
			color={"gray"}
			onLabel={<sunIcon />}
			offLabel={<moonIcon />}
		></Switch>
	)
}

export const NightModeButton = ({ props }) => {
	const colorScheme = useColorScheme()

	const sunIcon = (
		<IconSun
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[1]}
		/>
	)

	const moonIcon = (
		<IconMoon
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[5]}
		/>
	)
	return (
		<ActionIcon variant="filled" color="gray" size="xl" aria-label="Night Mode">
			{/* <IconAdjustments style={{ width: "70%", height: "70%" }} stroke={1.5} /> */}
			{colorScheme ? <sunIcon /> : <moonIcon />}
		</ActionIcon>
	)
}
