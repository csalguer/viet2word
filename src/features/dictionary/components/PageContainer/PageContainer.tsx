/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode, useCallback, type ReactElement } from "react"
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
import { InfoCard, MockInfoCards } from "../InfoCard/InfoCard"
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
			<Group id="page-container" className={styles.section}>
				<MockInfoCards content={MOCK_CARD_INFO.data} />
				{children}
			</Group>
		</>
	)
}

export default PageContainer
