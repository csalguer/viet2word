import React from "react"

import styles from "./UserSettings.css"
import { MantineGradient, useMantineTheme } from "@mantine/core"
import { Color } from "@chakra-ui/react"

enum GradientStyle {
	linear,
	radial,
}

interface Gradient {
	color: Color[]
	style: GradientStyle
}

interface UserSettings {
	darkMode: boolean
	background: Gradient
}

export interface UserSettingsProps {
	settings: UserSettings
}

export function UserSettings({ settings }: UserSettingsProps) {
	const { darkMode, background } = settings
	const theme = useMantineTheme()
	return <>{darkMode}</>
}
