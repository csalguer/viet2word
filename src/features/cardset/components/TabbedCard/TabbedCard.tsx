import { useCallback, useState, useEffect, ReactElement } from "react"
import { Card, Tabs, Center, Stack } from "@mantine/core"
import styles from "./TabbedCard.css"
import palette from "../../../../styles/Palette"

export interface TabbedCardProps {
	tabs: string[]
	children: ReactElement[] | ReactElement
}

export function TabbedCard({ tabs, children }: TabbedCardProps) {
	return (
		<>
			<Center>
				<Tabs
					defaultValue="gallery"
					orientation="vertical"
					variant="pills"
					radius="md"
					onClick={() => setActiveTab(index)}
				>
					<Tabs.List>
						{tabs?.map((tab, index) => {
							console.log()
							const color =
								palette?.highlight[index % palette?.highlight?.length]
							return (
								<Tabs.Tab
									value={tab}
									color={palette?.highlight[index % palette?.highlight?.length]}
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",

										textTransform: "uppercase",
										cursor: "pointer",
										textOrientation: "mixed",
										writingMode: "vertical-lr",
										// transition: "color 0.3s ease",
										// "&:hover": {
										// 	color: "gray.800",
										// },
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
								<Tabs.Panel value={tabs[index]}>
									<TabbedCardContent>{child}</TabbedCardContent>
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
			h="auto"
			w={{ base: 300, sm: "100%", md: "30vw" }}
			radius="md"
			withBorder
		>
			<Stack display={"flex"} justify="space-between" ml="md" mt="xs" mb="xs">
				{children}
			</Stack>
		</Card>
	)
}
