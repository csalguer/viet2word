import React from "react"

import styles from "./UserSettings.css"
import { Box } from "@chakra-ui/react"

enum GradientStyle {
	linear,
	radial,
}

interface Gradient {
	color: string[]
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
	return <>{darkMode}</>
}
