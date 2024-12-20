import { useRef, useEffect, forwardRef, createRef } from "react"
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
import Palette from "../../styles/Palette"
import theme from "../../styles/Theme"

import * as motion from "motion/client"
import { transform } from "framer-motion"

const text =
	" Anim occaecat non anim nisi est sit officoia ipsum commodo consequat ex fugiat reprehenderit eu cupidatat tempor deserunt."

const SaffronCard = forwardRef((props, ref) => (
	<Box pos={"absolute"} top={"150px"} style={{ zIndex: 3 }} right={"150px"}>
		<VocabCard
			// ref={ref}
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
))
const GhostRef = forwardRef((props, ref) => (
	<Box pos={"absolute"} style={{ zIndex: 2 }} top={"10px"} right={"10px"}>
		<VocabCard
			// ref={ref}
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
))

const HeroText = ({
	title = "CHŨNG NÓI",
	content = "Velit sint enim esse eu ut cupidatat veniam aute amet magna proident culpa dolore ipsum.",
	verbAction = "Search Here",
}): ReactElement => {
	return (
		<>
			<Center gap="xl">
				<Stack w="400px" gap="xl">
					<Text
						style={{ fontFamily: "Calistoga" }}
						w="200px"
						fw={800}
						size="2.8rem"
					>
						{title}
					</Text>
					<Text
						w={"30vw"}
						style={{
							textWrap: "wrap",
							flexWrap: "wrap",
							fontFamily: "Spectral SC",
							lineHeight: "2.0rem",
						}}
						size="1.4rem"
					>
						{content}
					</Text>
					<Flex gap="lg">
						<Button>{verbAction}</Button>
						<Input placeholder="Search here" w="200px" h="auto"></Input>
					</Flex>
				</Stack>
			</Center>
		</>
	)
}

const HeroAnimatedAura = ({}): ReactElement => {
	return (
		<Flex
			dir="row"
			// justify={"stretch"}
			pos={"absolute"}
			gap={"7rem"}
			style={{ zIndex: 0 }}
			align={"center"}
		>
			<AuraCloudDiv
				colorA={lighten(Palette?.colorsEstimate[3], 0.45)}
				colorB={lighten(Palette?.colorsEstimate[5], 0.45)}
			/>
			<AuraCloudDiv
				colorA={lighten(Palette?.colorsEstimate[6], 0.45)}
				colorB={lighten(Palette?.colorsEstimate[11], 0.45)}
			/>
			<AuraCloudDiv
				colorB={lighten(Palette?.colorsEstimate[1], 0.45)}
				colorA={lighten(Palette?.colorsEstimate[7], 0.45)}
			/>
		</Flex>
	)
}

const AuraCloudDiv = ({ colorA, colorB }) => {
	const shadowColor = `25px 96px 89px 70px ${colorA},-79px -60px 72px 75px ${colorB}`
	return (
		// <motion.div animate={{}}>
		<Box
			styles={{
				filter: "blur(3.4px)",
				backgroundColor: Palette.neutrals.bluestone,
			}}
			color="transparent"
			w="95%"
			h="95%"
			style={{
				boxShadow: shadowColor,
			}}
		/>
		// </motion.div>
	)
}

export const HeroSection = (): ReactElement => {
	const theme = useMantineTheme()
	const ghostRef = createRef()
	const saffronRef = createRef()

	return (
		<>
			<Container
				pos={"absolute"}
				bg="white"
				p={"xl"}
				m="xl"
				h="800px"
				w="100%"
				size="xl"
			>
				<Flex
					// justify={"space-between"}
					gap={"lg"}
					m="xl"
					p="xl"
					align={"center"}
					h={"100%"}
					direction={"row"}
				>
					<HeroText />
				</Flex>
				{/* <Center pos={"relative"} w="auto" h="fit-content"> */}
				<Group>
					<GhostRef ref={ghostRef} />
					<SaffronCard ref={saffronRef} />
				</Group>
				<HeroAnimatedAura />

				{/* </Center> */}
			</Container>
		</>
	)
}

export default HeroSection
