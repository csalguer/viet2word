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
import styles from "./HeroSection.module.css"
import * as motion from "motion/client"
import { transform } from "framer-motion"
import { Gradients } from "../../styles/Gradients"
import { nanoid } from "nanoid"
import { useMediaQuery, create } from "@mantine/hooks"
import { Carousel } from "@mantine/carousel"
import { createStyles, getStylesRef } from "@mantine/core"
import Autoplay from "embla-carousel-autoplay"

const text =
	" Anim occaecat non anim nisi est sit officoia ipsum commodo consequat ex fugiat reprehenderit eu cupidatat tempor deserunt."

const CardsStock: ReactElement = [
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
	/>,
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
	/>,
	<VocabCard
		// ref={ref}
		word="شربرت"
		meanings={{
			partOfSpeech: "اسم",
			definitions: [
				{
					definition: "Sherbert",
					example: "Mango sherbert.",
				},
			],
		}}
		visible
		expanded
	/>,
	<VocabCard
		// ref={ref}
		word="ngọ gâi"
		meanings={{
			partOfSpeech: "danh từ",
			definitions: [
				{
					definition: "culantro",
					example: "......",
				},
			],
		}}
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
			<Center gap="xl">
				<Stack w="400px" gap="xl">
					<Text
						variant="gradient"
						gradient={{
							from: "#9a2225",
							to: "#ca6703",
							deg: 94,
						}}
						w="200px"
						fw={800}
						size="5rem"
					>
						{title}
					</Text>
					<Text fw={800} size="3rem">
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
			// pos={"absolute"}
			gap={"7rem"}
			style={{ zIndex: 0 }}
			// align={"center"}
		>
			<AuraCloudDiv
				colorA={lighten(Palette?.colorsEstimate[1], 0.15)}
				colorB={lighten(Palette?.colorsEstimate[2], 0.15)}
			/>
			<AuraCloudDiv
				colorA={lighten(Palette?.colorsEstimate[4], 0.15)}
				colorB={lighten(Palette?.colorsEstimate[5], 0.15)}
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
	const autoplay = useRef(Autoplay({ delay: 2000 }))

	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
	const slides = CardsStock.map((item) => (
		<Box>
			<Carousel.Slide key={nanoid(6)}>{item}</Carousel.Slide>
		</Box>
	))
	console.log(slides)
	return (
		<>
			<Center
				pos={"absolute"}
				// p={"xl"}
				h="800px"
				w="100%"
				size="xl"
			>
				<Center>
					<Center>
						<Container size="md">
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
								<Carousel
									loop
									align="start"
									slidesToScroll={mobile ? 1 : 2}
									w={"fit-content"}
									h={"215px"}
									withControls
									withIndicators
									classNames={styles.carousel}
								>
									<Flex dir="row" w={"400px"} h="215px">
										{slides}
									</Flex>
								</Carousel>
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
