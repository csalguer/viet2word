import { useCallback, useState, useEffect, ReactElement } from "react"
import { Card, Tabs, Center, Stack } from "@mantine/core"
import styles from "./TabbedCard.css"
import palette from "../../../../styles/Palette"
import { withGreyedSelection } from "../../../animation/hooks"

export interface TabbedCardProps {
	tabs: string[]
	children: ReactElement[] | ReactElement
}

export function TabbedCard({ tabs, children }: TabbedCardProps) {
	const [activeTab, setActiveTab] = useState<string | null>(tabs[0])

	return (
		<>
			<Center>
				<Tabs
					defaultValue="gallery"
					orientation="vertical"
					variant="pills"
					radius="md"
					h={"auto"}
					value={activeTab}
					onChange={setActiveTab}
					// onClick={() => setActiveTab(index)}
				>
					<Tabs.List
						style={{
							backgroundColor: "gray.800",
							color: "white",
							boxShadow: "0 0 0 1px gray.200",
						}}
					>
						{tabs?.map((tab, index) => {
							const color =
								palette?.highlight[index % palette?.highlight?.length]
							return withGreyedSelection(
								<Tabs.Tab
									value={tab}
									color={palette?.highlight[index % palette?.highlight?.length]}
									style={{
										fontSize: "1.0rem",
										fontWeight: "bold",
										background:
											palette?.highlight[index % palette?.highlight?.length],
										color: "white",
										textTransform: "uppercase",
										cursor: "pointer",
										textOrientation: "mixed",
										writingMode: "vertical-lr",
										borderRadius: "md",
										"&:after": {
											color: color,
											width: ".2rem",
											borderRadius: "md",
										},
										"&:before": {
											color: color,
											width: ".2rem",
											borderRadius: "md",
										},
										"&:hover": {
											color: "gray.800",
										},
									}}
								>
									{tab}
								</Tabs.Tab>
							)
						})}
					</Tabs.List>
					{children?.length &&
						children?.map((child, index) => {
							console.log(child)
							return (
								<Tabs.Panel value={tabs[index]} h={"100%"} color="white">
									<Center>
										<TabbedCardContent>{child}</TabbedCardContent>
									</Center>
								</Tabs.Panel>
							)
						})}
					{children?.length == 0 && children}
				</Tabs>
			</Center>
		</>
	)
}

export const TabbedCardContent = ({ children }) => {
	return (
		<Card
			shadow="sm"
			padding="lg"
			h="fit-content"
			w={{ sm: "85vw", md: "60vw" }}
			radius="md"
			withBorder
		>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				{children}
			</Stack>
		</Card>
	)
}
