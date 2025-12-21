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
	Box,
	HStack,
} from "@chakra-ui/react"
import { InfoCard, CardList } from "../../dictionary"
import { MOCK_CARD_INFO } from "../../../lib/mockData"
import Palette from "../../../styles/palette"
import { IconSun, IconMoonStars } from "@tabler/icons-react"

const PRIMARY_COL_HEIGHT = "300px"

const LeadGrid = (): ReactElement => {
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--chakra-spacing-4) / 2)`
	return <></>
}

export interface PageContainerProps {
	children?: ReactNode
}

const PageContainer = ({ children }: PageContainerProps): ReactElement => {
	return (
		<>
			<Container maxW="full" id={"container"}>
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
						display={{ base: "flex", md: "none" }}
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
						display={{ base: "none", lg: "flex" }}
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
