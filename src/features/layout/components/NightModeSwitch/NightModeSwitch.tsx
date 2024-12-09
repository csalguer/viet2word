import { useState, useEffect } from "react"

import { useColorScheme } from "@mantine/hooks"
import { Switch, ActionIcon, rem, useMantineColorScheme } from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { colorsPractical } from "../../styles/Palette"

export interface NightModeSwitchProps {
	darkMode: boolean
}

export function NightModeSwitch({ prop }: NightModeSwitchProps) {
	const colorScheme = useColorScheme()

	const SUN = (
		<IconSun
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[1]}
		/>
	)

	const MOON = (
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
			onLabel={<SUN />}
			offLabel={<MOON />}
		></Switch>
	)
}

export const NightModeButton = ({ props }) => {
	s
	const {colorScheme, toggleColorScheme} = useMantineColorScheme()

	const SUN = (
		<IconSun
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[1]}
		/>
	)

	const MOON = (
		<IconMoon
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={colorsPractical[5]}
		/>
	)
	return (
		<Switch size="lg" color={'gray'}>
			{colorScheme ? <SUN /> : <MOON />}
		</Switch>
	)
}
