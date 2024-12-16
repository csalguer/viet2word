import React from "react"
import {
	useMantineTheme,
	Group,
	Title,
	Text,
	Flex,
	Button,
	Center,
	Stack,
	Input,
	getGradient,
	lighten,
	Box,
	Container,
} from "@mantine/core"
import { VocabCard } from "../../../dictionary/components"
import PageContainer from "../PageContainer/PageContainer"
import palette from "../../../../styles/Palette"

export const HeroSection = (): ReactElement => {
	const theme = useMantineTheme()

	return (
		<>
			<Container bg="white" p={"xl"} m="xl" size="lg">
				<Flex gap="xl" dir="row">
					<Center gap="xl">
						<Stack gap="xl">
							<Title size="2.8rem">Vietnamese Language Tools</Title>
							<Text size="1.4rem">
								Anim occaecat non anim nisi est sit officia ipsum commodo
								consequat ex fugiat reprehenderit eu cupidatat tempor deserunt.
							</Text>
							<Flex gap="lg">
								<Button>Try Now</Button>
								<Input placeholder="Search here" w="200px" h="auto"></Input>
							</Flex>
						</Stack>
					</Center>
					<Group
						// display={"flex"}
						w="fit-content"
						h="100%"
						m={"xl"}
						p={"xl"}
						pos={"relative"}
						styles={{ filter: "blur(3.4px)" }}
						color="transparent"
						style={{
							boxShadow:
								"25px 96px 89px 70px #4f762d42,-79px -60px 72px 75px #025f7245",
						}}
					>
						<Box
							// bg={getGradient(
							// 	{
							// 		from: lighten(palette.highlight[1], 0.7),
							// 		to: lighten(palette.highlight[2], 0.8),
							// 		deg: 90,
							// 	},
							// 	theme
							// )}
							pos="absolute"
							top={"0px"}
							left={"0px"}
							// style={{
							// 	boxShadow:
							// 		"inset 25px 96px 89px 70px #4f762d42,inset -79px -60px 72px 75px #025f7245",
							// }}
						>
							<VocabCard
								word="魔鬼"
								meanings={{
									partOfSpeech: "名词",
									definitions: [
										{
											definition: "Ghost, spirit",
											example: "黑魔者让了魔鬼从村农出去。",
										},
									],
								}}
								visible
								expanded
							/>
						</Box>
						<Box
							// bg={getGradient(
							// 	{
							// 		from: lighten(palette.highlight[4], 0.7),
							// 		to: lighten(palette.highlight[5], 0.8),
							// 		deg: 90,
							// 	},
							// 	theme
							// )}
							pos="inherit"
							top={"150px"}
							left={"100px"}
							m="xl"
							p="xl"
						>
							<VocabCard
								word="azafrán"
								meanings={{
									partOfSpeech: "SUST",
									definitions: [
										{
											definition:
												"Rich and deep yellow spice made from the pistils of the saffron flower",
											example:
												"Para un toque auténtico y mejor color, se le debe agregar un poco de azafrán al arroz.",
										},
									],
								}}
								visible
								expanded={true}
							/>
						</Box>
					</Group>
				</Flex>
			</Container>
		</>
	)
}
