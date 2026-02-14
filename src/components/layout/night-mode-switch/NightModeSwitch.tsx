import { useState, useEffect } from "react"

import { useColorMode } from "@/components/ui/color-mode"
import { Switch, Button, IconButton } from "@chakra-ui/react"
import { IconSun, IconMoon } from "@tabler/icons-react"

export interface NightModeSwitchProps {
	darkMode: boolean
}

const SUN = () => (
	<IconSun style={{ width: "16px", height: "16px" }} stroke={2.5} />
)

const MOON = () => (
	<IconMoon style={{ width: "16px", height: "16px" }} stroke={2.5} />
)
export function NightModeSwitch({ darkMode }: NightModeSwitchProps) {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Switch.Root
			size="lg"
			colorPalette="gray"
			checked={colorMode === "dark"}
			onCheckedChange={(e) => toggleColorMode()}
		>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>{colorMode === "light" ? <SUN /> : <MOON />}</Switch.Label>
		</Switch.Root>
	)
}

export const NightModeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button size="lg" colorPalette="gray" onClick={toggleColorMode}>
			{colorMode == "light" ? <SUN /> : <MOON />}
		</Button>
	)
}
