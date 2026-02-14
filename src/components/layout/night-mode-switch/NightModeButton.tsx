import { IconButton } from "@chakra-ui/react"
import { IconAdjustments } from "@tabler/icons-react"

export const NightModeButton = (props) => {
	return (
		<IconButton
			variant="solid"
			colorPalette="gray"
			size="xl"
			aria-label="Night Mode"
		>
			<IconAdjustments style={{ width: "70%", height: "70%" }} stroke={1.5} />
		</IconButton>
	)
}
