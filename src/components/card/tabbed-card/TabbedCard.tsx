import { useCallback, useState, useEffect, ReactElement, CSSProperties, Children } from "react"
import { Card, Tabs, Center, Stack, Flex } from "@mantine/core"
import styles from "./TabbedCard.css"
import palette from "../../../styles/palette"
import { withGreyedSelection } from "../../../lib/animations"
import { nanoid } from "nanoid"
export interface TabbedCardProps {
	tabs: string[]
	children: ReactElement[] | ReactElement
}

const getTabColor = (num: number): string =>
	palette?.highlighter[num % palette?.highlighter?.length]

const tabStyle = (num: number): CSSProperties => {
	return {
		fontSize: "1.0rem",
		fontWeight: "bold",
		background: getTabColor(num),
		color: "white",
		textTransform: "uppercase",
		cursor: "pointer",
		textOrientation: "mixed",
		writingMode: "vertical-rl",
		borderRadius: "0rem",
		borderBottomLeftRadius: "0.8rem",
		borderTopLeftRadius: "0.8rem",
	}
}

export function TabbedCard({ tabs, children }: TabbedCardProps) {
	const [activeTab, setActiveTab] = useState<string | null>(tabs[0])

	return (
		<Center id="tabbed-card">
			<Tabs
				orientation="vertical"
				variant="pills"
				radius="md"
				h={"auto"}
				value={activeTab}
				onChange={setActiveTab}
			>
				<Tabs.List
					style={{
						background: "white",
						color: "white",
						boxShadow: "0 0 0 1px gray.200",
						gap: "0rem",
					}}
					id="tabbed-list"
				>
					{tabs?.map((tab, index) => {
						return (
							<Tabs.Tab
								value={tab}
								key={nanoid(6)}
								color={getTabColor(index)}
								style={tabStyle(index)}
							>
								{tab}
							</Tabs.Tab>
						)
					})}
				</Tabs.List>
				{Children.map(children, (child, index) => {
					return (
						<Tabs.Panel
							key={nanoid(6)}
							value={tabs[index]}
							h={"100%"}
							w={"fit-content"}
							color="white"
							style={{ borderLeft: `1.0rem solid ${getTabColor(index)}` }}
						>
							<Center h={"100%"}>
								<TabbedCardContent>{child}</TabbedCardContent>
							</Center>
						</Tabs.Panel>
					)
				})}
				{Children.count(children) == 0 && children}
			</Tabs>
		</Center>
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
			<Flex
				id={"tabbed-card"}
				display={"flex"}
				justify="space-between"
				align={"center"}
				ml="md"
				mt="xs"
				mb="xs"
				bg="white"
				w={"100%"}
				h={"100%"}
			>
				{children}
			</Flex>
		</Card>
	)
}
