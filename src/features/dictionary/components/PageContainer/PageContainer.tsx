/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback, type ReactElement } from "react"
import styles from "./PageContainer.module.css"
import {
	Container,
	SimpleGrid,
	Skeleton,
	Grid,
	rem,
	Box,
	Group,
} from "@mantine/core"
import InfoCard from "../InfoCard/InfoCard"
import { MockInfoCards } from "../../api/mockData"

const PRIMARY_COL_HEIGHT = rem(300)

const LeadGrid = (): ReactElement => {
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`
	return <></>
}

export interface PageContainerProps {
	prop?: string
}

const PageContainer = ({ prop = "" }: PageContainerProps): ReactElement => {
	return (
		<>
			<div id="page-container" className={styles.section}>
				{/* {infoCards()} */}
				{/* </LeadGrid> */}
				<MockInfoCards />
			</div>
		</>
	)
}

export default PageContainer
