import { useState, useEffect } from "react"

import { useColorScheme } from "@mantine/hooks"
import {
	Switch,
	ActionIcon,
	rem,
	useMantineColorScheme,
	Button,
} from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { colorsPractical } from "../../styles/Palette"

export interface NightModeSwitchProps {
	darkMode: boolean
}

const SUN = () => (
	<IconSun
		style={{ width: rem(16), height: rem(16) }}
		stroke={2.5}
		color={colorsPractical[1]}
	/>
)

const MOON = () => (
	<IconMoon
		style={{ width: rem(16), height: rem(16) }}
		stroke={2.5}
		color={colorsPractical[5]}
	/>
)
export function NightModeSwitch({ darkMode }: NightModeSwitchProps) {
	const colorScheme = useColorScheme()
	return (
		<Switch
			size="xl"
			color={"gray"}
			onLabel={<SUN />}
			offLabel={<MOON />}
		></Switch>
	)
}

export const NightModeButton = ({ props }) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	return (
		<Button size="lg" color={"gray"}>
			{colorScheme == "light" ? <SUN /> : <MOON />}
		</Button>
	)
}
