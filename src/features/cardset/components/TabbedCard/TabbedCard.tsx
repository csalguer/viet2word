import { useCallback, useState, useEffect, ReactElement } from "react"
import { Card, Tabs, Center, Stack, Flex } from "@mantine/core"
import styles from "./TabbedCard.css"
import palette from "../../../../styles/Palette"
import { withGreyedSelection } from "../../../animation/hooks"
import { nanoid } from "nanoid"
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
					orientation="vertical"
					variant="pills"
					radius="md"
					h={"auto"}
					value={activeTab}
					onChange={setActiveTab}
				>
					<Tabs.List
						style={{
							color: "white",
							boxShadow: "0 0 0 1px gray.200",
							gap: "0rem",
							borderTopRightRadius: "md",
							borderTopLeftRadius: "md",
						}}
					>
						{tabs?.map((tab, index) => {
							const color =
								palette?.highlight[index % palette?.highlight?.length]
							return
							<>
								{withGreyedSelection(
								<Tabs.Tab
									value={tab}
									key={nanoid(6)}
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
										writingMode: "vertical-rl",
										borderRadius: "0rem",
										borderBottomLeftRadius: "0.8rem",
										borderTopLeftRadius: "0.8rem",
									}}
								>
									{tab}
								</Tabs.Tab>
								)}
							</>
						})}
					</Tabs.List>
					{children?.length &&
						children?.map((child, index) => {
							const color =
								palette?.highlight[index % palette?.highlight?.length]
							return (
								<Tabs.Panel
									key={nanoid(6)}
									value={tabs[index]}
									h={"100%"}
									w={"fit-content"}
									color="white"
									style={{ borderLeft: `1.0rem solid ${color}` }}
								>
									<Center h={"100%"}>
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
		<Center
			shadow="sm"
			padding="lg"
			h="fit-content"
			w={{ sm: "85vw", md: "60vw" }}
			justify="center"
			radius="md"
			withBorder
		>
			<Flex
				display={"flex"}
				justify="space-between"
				align={"center"}
				ml="md"
				mt="xs"
				mb="xs"
			>
				{children}
			</Flex>
		</Center>
	)
}
