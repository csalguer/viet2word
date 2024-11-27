/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	ReactNode,
	useState,
	useLayoutEffect,
	useCallback,
	type ReactElement,
} from "react"
import styles from "./PageContainer.module.css"
import {
	Container,
	Center,
	Flex,
	SimpleGrid,
	Skeleton,
	Grid,
	rem,
	Box,
	Group,
	Switch,
} from "@mantine/core"
import { InfoCard, CardList } from "../InfoCard/InfoCard"
import { MOCK_CARD_INFO } from "../../api/mockData"
import { Gradients } from "../../../layout/styles/Gradients"
import { palette } from "../../../../styles/Palette"

const PRIMARY_COL_HEIGHT = rem(300)

const LeadGrid = (): ReactElement => {
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`
	return <></>
}

export interface PageContainerProps {
	children?: ReactNode
}

// export interface PageSettings {
// 	backgroundColor?: string
//   pageTitle?: string
//   pageSubtitle?: string
//   leadGrid?: boolean
//   primaryGridColumns?: number
//   secondaryGridColumns?: number
//   showSkeleton?: boolean
//   skeletonCount?: number
//   showCardList?: boolean
//   cardList?: CardListProps[]
//   cardListTitle?: string
//   cardListDescription?: string
//   cardListIcon?: ReactNode
//   cardListIconSize?: number
//   cardListIconColor?: string
//   cardListIconBackgroundColor?: string
//   cardListIconHoverBackgroundColor?: string
//   cardListIconHoverColor?: string
//   cardListIconHoverBorderRadius?: number
//   cardListIconHoverBorderWidth?: number
//   cardListIconHoverBorderColor?: string
//   cardListIconHoverBoxShadow?: string
//   cardListIconHoverTransition?: string
//   cardListIconHoverDuration?: number
//   cardListIconHoverDelay?: number
// }

import { IconSun, IconMoonStars } from "@tabler/icons-react"
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

const NightModeSwitch = (props): ReactElement => {
	return <Switch size={props.size} onLabel={sunIcon} offLabel={moonIcon} />
	const [nightMode, setNightMode] = useState(false)
}

const PageContainer = ({ children }: PageContainerProps): ReactElement => {
	const [backgroundColor, setBackgroundColor] = useState(Gradients.light)

	useLayoutEffect(() => {
		// PERMISSIONS FOR AUDIO STUFF

		// Loading of User Page Browser settings
		//system settings or set in browser
		setBackgroundColor(Gradients.light)
	}, [backgroundColor])

	return (
		<>
			<Container fluid id={"container"}>
				<Box
					style={{
						position: "absolute",
						top: "2rem",
						right: "2rem",
					}}
				></Box>
				<Center
					style={{
						background: "",
						height: "100%",
					}}
					mt="lg"
				>
					<Flex
						w={"100%"}
						gap={"md"}
						direction={"row"}
						p={"lg"}
						align={"center"}
						justify={"center"}
						wrap={"wrap"}
						id="page-container-flex"
					>
						{children}
					</Flex>
				</Center>
			</Container>
		</>
	)
}

export default PageContainer
