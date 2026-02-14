import { useRef, useEffect, forwardRef, createRef, ReactElement } from "react"
import {
	Box,
	Flex,
	Heading,
	Text,
	Button,
	Container,
	Stack,
	Input,
	Center,
	SimpleGrid,
} from "@chakra-ui/react"
import { VocabCard } from "../../dictionary"
import PageContainer from "../page-container/PageContainer"
import palette from "../../../styles/palette"
import styles from "./HeroSection.module.css"
import { motion, transform } from "framer-motion"
import { nanoid } from "nanoid"

const text =
	" Anim occaecat non anim nisi est sit officoia ipsum commodo consequat ex fugiat reprehenderit eu cupidatat tempor deserunt."

const CardsStock: ReactElement[] = [
	<VocabCard
		// ref={ref}
		word="azafrán"
		meanings={[
			{
				partOfSpeech: "SUST",
				definitions: [
					{
						definition:
							"Rich and deep yellow spice made from the pistils of the saffron flower",
						example:
							"Para un toque auténtico y mejor color, se le debe agregar un poco de azafrán al arroz.",
					},
				],
			},
		]}
		visible
		expanded={true}
	/>,
	<VocabCard
		// ref={ref}
		word="魔鬼"
		meanings={[
			{
				partOfSpeech: "名词",
				definitions: [
					{
						definition: "Ghost, spirit",
						example: "黑魔者让了魔鬼从村农出去。",
					},
				],
			},
		]}
		visible
		expanded
	/>,
	<VocabCard
		// ref={ref}
		word="شربرت"
		meanings={[
			{
				partOfSpeech: "اسم",
				definitions: [
					{
						definition: "Sherbert",
						example: "Mango sherbert.",
					},
				],
			},
		]}
		visible
		expanded
	/>,
	<VocabCard
		// ref={ref}
		word="ngọ gâi"
		meanings={[
			{
				partOfSpeech: "danh từ",
				definitions: [
					{
						definition: "culantro",
						example: "......",
					},
				],
			},
		]}
		visible
		expanded
	/>,
]

const HeroText = ({
	title = "VLT",
	content = "Cast off the crast, and focus your craft.",
	verbAction = "Search Here",
}): ReactElement => {
	return (
		<>
			<Center>
				<Stack w="400px" gap="xl">
					<Text
						bgGradient="linear(to-r, #9a2225, #ca6703)"
						bgClip="text"
						w="200px"
						fontWeight={800}
						fontSize="5rem"
					>
						{title}
					</Text>
					<Text fontWeight={800} fontSize="3rem">
						Go from livid to love it.
					</Text>
					<Text
						w={"30vw"}
						style={{
							textWrap: "wrap",
							flexWrap: "wrap",
							fontFamily: "Vủ Thành An",
							lineHeight: "2.0rem",
						}}
						fontSize="1.4rem"
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
			// pos={"absolute"}
			gap={"7rem"}
			style={{ zIndex: 0 }}
			// align={"center"}
		>
			{/* Colors are undefined in palette, commenting out to prevent crash */}
			{/* <AuraCloudDiv
				colorA={lighten(palette?.colorsEstimate[1], 0.15)}
				colorB={lighten(palette?.colorsEstimate[2], 0.15)}
			/>
			<AuraCloudDiv
				colorA={lighten(palette?.colorsEstimate[4], 0.15)}
				colorB={lighten(palette?.colorsEstimate[5], 0.15)}
			/> */}
		</Flex>
	)
}

const AuraCloudDiv = ({ colorA, colorB }) => {
	const shadowColor = `25px 96px 89px 70px ${colorA},-79px -60px 72px 75px ${colorB}`
	return (
		// <motion.div animate={{}}>
		<Box
			w="95%"
			h="95%"
			style={{
				filter: "blur(3.4px)",
				backgroundColor: palette.neutrals.bluestone,
				boxShadow: shadowColor,
			}}
		/>
		// </motion.div>
	)
}

export const HeroSection = (): ReactElement => {
	const slides = CardsStock.map((item) => (
		<Box key={nanoid(6)} minW="300px" p={2}>
			{item}
		</Box>
	))

	return (
		<>
			<Center
				pos={"absolute"}
				// p={"xl"}
				h="800px"
				w="100%"
			>
				<Center>
					<Center>
						<Container maxW="md">
							<Center>
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
								<Box
									w={"fit-content"}
									h={"215px"}
									overflowX="auto"
									display="flex"
								>
									<Flex dir="row" w={"400px"} h="215px">
										{slides}
									</Flex>
								</Box>
							</Center>
						</Container>
					</Center>
					<HeroAnimatedAura />
				</Center>
			</Center>
		</>
	)
}

export default HeroSection
