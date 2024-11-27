import React from "react"

import styles from "./NightModeSwitch.css"
import { useMantineTheme } from "@mantine/core"

export interface NightModeSwitchProps {
	prop?: string
}

const sunIcon = (
	<IconSun
		style={{ width: rem(16), height: rem(16) }}
		stroke={2.5}
		color={"yellow"}
	/>
)

const moonIcon = (
	<IconMoonStars
		style={{ width: rem(16), height: rem(16) }}
		stroke={2.5}
		color={"blue"}
	/>
)

// TODO: Extend for difficulty / accessibility modes
const NightModeSwitch = (props): ReactElement => {
	const theme = useMantineTheme()
	const [nightMode, setNightMode] = useState(false)

	useLayoutEffect(() => {
		// PERMISSIONS FOR AUDIO STUFF

		// Loading of User Page Browser settings

		//system settings or set in browser
		setBackgroundColor(nightMode ? Gradients.night : Gradients.light)
	}, [backgroundColor])

	return <Switch size={props.size} onLabel={sunIcon} offLabel={moonIcon} />
}

export default NightModeSwitch
