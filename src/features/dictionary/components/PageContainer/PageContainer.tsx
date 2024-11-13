/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode, useCallback, type ReactElement } from "react"
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
} from "@mantine/core"
import { InfoCard, CardList } from "../InfoCard/InfoCard"
import { MOCK_CARD_INFO } from "../../api/mockData"

const PRIMARY_COL_HEIGHT = rem(300)

const LeadGrid = (): ReactElement => {
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`
	return <></>
}

export interface PageContainerProps {
	children?: ReactNode
}

const PageContainer = ({ children }: PageContainerProps): ReactElement => {
	return (
		<>
			<Container
				id={"container"}
				fluid
				style={{
					background:
						"radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
					height: "100vh",
				}}
			>
				<Flex
					w={"100%"}
					gap={"md"}
					direction={"row"}
					p={"lg"}
					m={"md"}
					align={"center"}
					justify={"center"}
					wrap={"wrap"}
					id="page-container-flex"
				>
					{children}
				</Flex>
			</Container>
		</>
	)
}

export default PageContainer
