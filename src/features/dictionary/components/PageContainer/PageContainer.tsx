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
import { IconSun, IconMoonStars } from "@tabler/icons-react"

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

const PageContainer = ({ children }: PageContainerProps): ReactElement => {
	return (
		<>
			<Container fluid id={"container"}>
				<Center
					style={{
						height: "100%",
					}}
					mt="xl"
				>
					<Flex
						w={"100%"}
						gap={"md"}
						direction={"row"}
						hiddenFrom="md"
						align={"center"}
						justify={"center"}
						wrap={"wrap"}
						// p={"lg"}
						id="page-container-flex"
					>
						{children}
					</Flex>
					<Flex
						w={"100%"}
						gap={"md"}
						direction={"row"}
						visibleFrom="lg"
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
