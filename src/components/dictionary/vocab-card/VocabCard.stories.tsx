import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"


import { DefinitionsList, VocabCard, VocabContent, Word } from "./VocabCard"
import { CardList } from "../card-list"
import { MOCK_CARD_INFO } from "@/test/mockData"
import { Separator, Stack, Container, HStack, Flex } from "@chakra-ui/react"

const { data } = MOCK_CARD_INFO

/**
 * # VocabCard
 *
 * The primary vocabulary display component for dictionary entries.
 * Supports multiple languages including Vietnamese, Chinese, Spanish, and English.
 *
 * ## Features
 * - Expandable card with word, phonetic transcription, and definitions
 * - Multiple meaning support with part-of-speech labels
 * - Bookmark and favorite actions
 * - RTL language support (planned)
 *
 * ## Phonetic Notation
 * Currently uses IPA (International Phonetic Alphabet) with tone markers.
 * Future: Toggle between IPA and language-specific phonetic systems.
 *
 * ## Accessibility
 * - Keyboard navigable
 * - Screen reader friendly with semantic HTML
 * - High contrast text for readability
 */
const meta: Meta<typeof VocabCard> = {
	title: "Dictionary/VocabCard",
	component: VocabCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Vocabulary card displaying word, phonetic transcription, meanings, and examples. Supports multiple languages and expandable view.",
			},
		},
	},
	argTypes: {
		word: {
			control: "text",
			description: "The headword or vocabulary term",
		},
		phonetic: {
			control: "text",
			description: "IPA phonetic transcription with tone markers",
		},
		expanded: {
			control: "boolean",
			description: "Whether the card shows full definitions",
		},
		visible: {
			control: "boolean",
			description: "Controls card visibility for animations",
		},
		vertical: {
			control: "boolean",
			description: "Vertical layout mode for narrow containers",
		},
		onClick: {
			action: "clicked",
			description: "Callback when card is clicked",
		},
	},
	args: {
		onClick: () => {},
	},
}

export default meta
type Story = StoryObj<typeof VocabCard>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default expanded card with Vietnamese word
 */
export const Default: Story = {
	args: {
		expanded: true,
		...data[0],
	},
}

/**
 * Collapsed card showing only headword
 */
export const Collapsed: Story = {
	args: {
		expanded: false,
		...data[0],
	},
}

/**
 * Card with no phonetic transcription
 */
export const NoPhonetic: Story = {
	args: {
		expanded: true,
		...data[1], // 感恩 - Chinese word without phonetic
	},
}

/**
 * Empty/loading state with skeleton
 */
export const Loading: Story = {
	args: {
		word: undefined,
		phonetic: undefined,
		meanings: [],
	},
}

// =============================================================================
// LANGUAGE VARIANTS
// =============================================================================

/**
 * Vietnamese word with full IPA tone notation
 */
export const Vietnamese: Story = {
	name: "Vietnamese (Tiếng Việt)",
	args: {
		word: "vẹt đuôi dài",
		phonetic: "vɛːkᴰ² ɗuːjᴬ¹ jaːjᴬ²",
		expanded: true,
		meanings: data[0].meanings,
	},
}

/**
 * Chinese character with meanings
 */
export const Chinese: Story = {
	name: "Chinese (中文)",
	args: {
		word: "感恩",
		expanded: true,
		meanings: [
			{
				partOfSpeech: "名词",
				definitions: [
					{
						definition: "Gratitude, thankfulness",
						example: "我们应该对父母感恩。",
					},
				],
			},
		],
	},
}

/**
 * Spanish word example
 */
export const Spanish: Story = {
	name: "Spanish (Español)",
	args: {
		word: "azafrán",
		phonetic: "/a.θa.ˈfɾan/",
		expanded: true,
		meanings: [
			{
				partOfSpeech: "sustantivo",
				definitions: [
					{
						definition:
							"Rich and deep yellow spice made from the pistils of the saffron flower",
						example:
							"Para un toque auténtico, se le debe agregar un poco de azafrán al arroz.",
					},
				],
			},
		],
	},
}

// =============================================================================
// PART OF SPEECH VARIANTS
// =============================================================================

/**
 * Word with multiple meanings and parts of speech
 */
export const MultipleMeanings: Story = {
	args: {
		word: "run",
		phonetic: "/rʌn/",
		expanded: true,
		meanings: [
			{
				partOfSpeech: "verb",
				definitions: [
					{
						definition: "To move swiftly on foot",
						example: "She runs every morning.",
					},
					{
						definition: "To operate or function",
						example: "The machine runs smoothly.",
					},
				],
			},
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition: "An act of running",
						example: "He went for a run in the park.",
					},
				],
			},
		],
	},
}

// =============================================================================
// SUBCOMPONENT STORIES
// =============================================================================

/**
 * Headword component showing word and phonetic
 */
export const HeadwordOnly: Story = {
	render: () => (
		<Stack gap={4} p={4} bg="white" minW="300px">
			{data.slice(0, 5).map((item, index) => (
				<React.Fragment key={index}>
					<Word word={item.word} phonetic={item.phonetic} />
					{index < 4 && <Separator />}
				</React.Fragment>
			))}
		</Stack>
	),
}

/**
 * Definitions list with default styling
 */
export const DefinitionsDefault: Story = {
	render: () => (
		<Stack gap={4}>
			{data.slice(0, 3).map((item, index) => (
				<Container bg="white" key={index} p={4}>
					<VocabContent meanings={item.meanings} expanded />
				</Container>
			))}
		</Stack>
	),
}

/**
 * Definitions list with variant styling
 */
export const DefinitionsVariant: Story = {
	render: () => (
		<Stack gap={4}>
			{data.slice(0, 3).map((item, index) => (
				<Container bg="white" key={index} p={4}>
					<VocabContent variant meanings={item.meanings} expanded />
				</Container>
			))}
		</Stack>
	),
}

// =============================================================================
// RESPONSIVE & ACCESSIBILITY
// =============================================================================

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}

/**
 * Vertical layout for narrow containers
 */
export const Vertical: Story = {
	args: {
		...Default.args,
		vertical: true,
	},
}

/**
 * Keyboard navigation test
 */
export const KeyboardNavigation: Story = {
	args: {
		...Default.args,
	},
}
