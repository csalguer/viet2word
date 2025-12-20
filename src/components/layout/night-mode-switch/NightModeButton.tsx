import { ActionIcon } from "@mantine/core"
import { IconAdjustments } from "@tabler/icons-react"

export const NightModeButton = (props) => {
	return (
		<ActionIcon variant="filled" color="gray" size="xl" aria-label="Night Mode">
			<IconAdjustments style={{ width: "70%", height: "70%" }} stroke={1.5} />
		</ActionIcon>
	)
}
