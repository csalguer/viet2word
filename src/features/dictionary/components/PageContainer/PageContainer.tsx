/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback, type ReactElement } from "react"
import styles from "./PageContainer.module.css"
import { Container, SimpleGrid, Skeleton, Grid, rem, Box} from "@mantine/core"
import InfoCard from "../InfoCard/InfoCard"

const PRIMARY_COL_HEIGHT = rem(300)

const LeadGrid = (): ReactElement => {
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`

	// const [columns, setColumns] = useState(null)
	// const GridCol = useCallback(() => {

	// }, []);

	// useEffect(() => {{

	// }}, []

	// return (
	//   <Grid
	//     columns={{ base: 1, md: 2 }}
	//     gap="md"
	//     className={styles.grid}
	// 		>
	// 			{columns}
	// 		</Grid>
	//	or
	// <Grid
	//   columns={{ base: 1, md: 2 }}
	//   gap="md"
	// className={styles.grid}
	return (
		// <Container size="xl" my="xs"
		// <Grid staticComponents={}>
			// <Box
			// 	span={10}
			// 	height={PRIMARY_COL_HEIGHT}
			// 	className={styles.primaryColumn}
			// >
			<div>
				<InfoCard
					word={"大学"}
					meanings={[
						{
							partOfSpeech: "noun",
							definitions: [{
								
								definition: "a university, college, or institution"}
								example: "example"
							],
						} 
					]}
					/>
			// </Box>
			// <Box
			// 	span={10}
			// 	height={PRIMARY_COL_HEIGHT}
			// 	className={styles.primaryColumn}
			// >
			<InfoCard
			word={"dai học"}
			meanings={[
				{
					partOfSpeech: "noun",
					definitions: ["a university, college, or institution"],
				},
			]}
			/>
		</div>
			// </Box>
		// </Grid>
		// <SimpleGrid cols={{ base: 1, lg: 1 }} spacing="md">
		// 	<Skeleton animate={false} height={PRIMARY_COL_HEIGHT} radius="md" />
		// 	{/* <Grid gutter="md">
		// 			<Grid.Col span={2}>
		// 				<Skeleton
		// 					animate={false}
		// 					height={SECONDARY_COL_HEIGHT}
		// 					radius="md"
		// 				/>
		// 			</Grid.Col>
		// 			<Grid.Col span={10}>
		// 			</Grid.Col>
		// 		</Grid> */}
		// 	<Skeleton animate={false} height={SECONDARY_COL_HEIGHT} radius="md" />
		// </SimpleGrid>
		// </Container>
	)
}

export interface PageContainerProps {
	prop?: string
}

const PageContainer = ({ prop = "" }: PageContainerProps): ReactElement => {
	return (
		<div id="page-container" className={styles.section}>
			<LeadGrid>
				{/* <InfoCard
					word={"大学"}
					meanings={[
						{
							partOfSpeech: "noun",
							definitions: ["a university, college, or institution"],
						},
					]}
				/>
				<InfoCard
					word={"dai học"}
					meanings={[
						{
							partOfSpeech: "noun",
							definitions: ["a university, college, or institution"],
						},
					]}
				/> */}
			</LeadGrid>
		</div>
	)
}

export default PageContainer
