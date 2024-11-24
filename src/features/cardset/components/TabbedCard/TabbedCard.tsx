import { useCallback, useState, useEffect, ReactElement } from "react"
import { Card, Tabs } from "@mantine/core"
import styles from "./TabbedCard.css"

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
					onClick={() => setActiveTab(index)}
				>
					<Tabs.List>
						{tabs.map((tab, index) => (
							<Tabs.Tab value={tab}>{tab}</Tabs.Tab>
						))}
					</Tabs.List>
				</Tabs>
				{children.map((child, index) => {
					return <Tabs.Panel value="index">{child}</Tabs.Panel>
				})}
			</Center>
		</>
	)
}

export const TabbedCardContent = ({ tabs, children, activeTab }) => {
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
