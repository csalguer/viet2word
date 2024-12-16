import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { HeroSection } from "./HeroSection"

const meta: Meta<typeof HeroSection> = {
	component: HeroSection,
	decorators: [],
}

type Story = StoryObj<typeof HeroSection>

// TODO: Multiple examples and how to render
// TODO: Styling for origin of the definition (jargon, industry, study/field) // keep consistent per language
// TODO: Phonetic vs IPA
// TODO: Syllable/written word-break * notation
export const Primary: Story = {
	args: {
		primary: true,
		label: "HeroSection",
	},
}
export const Empty: Story = {
	args: {
		label: "HeroSection",
	},
}

// export const Headword: Story = {
// 	args: {
// 		label: "HeroSection",
// 		// ...data[3],
// 	},
// 	render: () => {
// 		return data.map((item, index) => {
// 			const { word, phonetic } = item
// 			return (
// 				<>
// 					<Stack bg="white" border="2px dashed #555555">
// 						<Word word={word} phonetic={phonetic} />
// 					</Stack>
// 					<Divider my={"md"} />
// 				</>
// 			)
// 		})
// 	},
// }

export default meta
