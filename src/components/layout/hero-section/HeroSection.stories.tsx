import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn, expect, within, userEvent } from "@storybook/test"

import { HeroSection } from "./HeroSection"
import { Box } from "@chakra-ui/react"

/**
 * # HeroSection
 *
 * The main hero/showcase section for the dictionary landing page.
 * Displays featured vocabulary cards with animated transitions.
 *
 * ## Features
 * - Animated card stack showcase
 * - Multiple language examples (Vietnamese, Chinese, Spanish)
 * - Responsive layout with scroll effects
 *
 * ## Phonetic Display Notes
 * Currently supports:
 * - **IPA** (International Phonetic Alphabet) - Universal standard
 *
 * Planned support:
 * - Vietnamese tone notation variants
 * - Pinyin for Chinese
 * - Syllable/word-break notation (e.g., hy·phen·a·tion)
 *
 * ## Origin Labels
 * Definition origins can be tagged by:
 * - Field of study (医学 Medicine, 法律 Law)
 * - Register (formal, informal, slang, jargon)
 * - Geographic region (British, American, Saigon dialect)
 */
const meta: Meta<typeof HeroSection> = {
	title: "Layout/HeroSection",
	component: HeroSection,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Hero showcase section with animated vocabulary card demonstrations for the landing page.",
			},
		},
	},
	argTypes: {
		primary: {
			control: "boolean",
			description: "Use primary styling variant",
		},
		label: {
			control: "text",
			description: "Section label for accessibility",
		},
	},
	decorators: [
		(Story) => (
			<Box minH="100vh">
				<Story />
			</Box>
		),
	],
}

export default meta
type Story = StoryObj<typeof HeroSection>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default hero section with card showcase
 */
export const Default: Story = {
	args: {
		primary: true,
		label: "HeroSection",
	},
}

/**
 * Secondary styling variant
 */
export const Secondary: Story = {
	args: {
		primary: false,
		label: "HeroSection",
	},
}

// =============================================================================
// RESPONSIVE VARIANTS
// =============================================================================

/**
 * Mobile viewport display
 */
export const Mobile: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
		chromatic: {
			viewports: [320],
		},
		docs: {
			description: {
				story: "Hero section adapted for mobile screens with stacked layout.",
			},
		},
	},
}

/**
 * Tablet viewport display
 */
export const Tablet: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		viewport: {
			defaultViewport: "tablet",
		},
		chromatic: {
			viewports: [768],
		},
	},
}

/**
 * Large desktop viewport
 */
export const Desktop: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		viewport: {
			defaultViewport: "desktop",
		},
		chromatic: {
			viewports: [1280],
		},
	},
}

// =============================================================================
// PHONETIC NOTATION EXAMPLES (Documentation)
// =============================================================================

/**
 * IPA Phonetic Examples
 *
 * Demonstrates IPA notation with tone markers for tonal languages.
 *
 * | Language | Word | IPA |
 * |----------|------|-----|
 * | Vietnamese | vẹt đuôi dài | vɛːkᴰ² ɗuːjᴬ¹ jaːjᴬ² |
 * | Vietnamese | mèo | mɛːwᴬ² |
 * | Spanish | azafrán | /a.θa.ˈfɾan/ |
 * | English | cat | /kæt/ |
 */
export const PhoneticExamples: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		docs: {
			description: {
				story: `
## Phonetic Notation Guide

### IPA (International Phonetic Alphabet)
Universal standard for phonetic transcription.

### Vietnamese Tone Markers
- ᴬ¹ - Ngang (level tone)
- ᴬ² - Huyền (falling tone)
- ᴰ¹ - Sắc (rising tone)
- ᴰ² - Nặng (low falling)

### Syllable Notation (Planned)
- hy·phen·a·tion - Dot separator for syllables
- stress markers: ˈprimary, ˌsecondary
        `,
			},
		},
	},
}

// =============================================================================
// ORIGIN/FIELD STYLING (Documentation)
// =============================================================================

/**
 * Definition Origin Labels
 *
 * Shows how definitions are tagged by field, register, or region.
 */
export const OriginLabels: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		docs: {
			description: {
				story: `
## Definition Origin Styling Guide

### Field of Study
- 医学 (Medicine) - Blue badge
- 法律 (Law) - Purple badge
- 技术 (Technology) - Green badge

### Register
- Formal - Standard text
- Informal - Italic text
- Slang - Orange badge
- Jargon - Gray badge

### Regional Variants
- 🇺🇸 American English
- 🇬🇧 British English
- 🇻🇳 Northern/Southern Vietnamese
        `,
			},
		},
	},
}

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Scroll animation behavior
 */
export const ScrollAnimation: Story = {
	args: {
		...Default.args,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Trigger scroll
		window.scrollBy({ top: 200, behavior: "smooth" })
		await new Promise((r) => setTimeout(r, 500))
	},
}

/**
 * Accessibility: keyboard navigation
 */
export const KeyboardAccessibility: Story = {
	args: {
		...Default.args,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Tab through section
		await userEvent.tab()
		await userEvent.tab()

		// Check for focusable elements
		const focusable = canvas.queryAllByRole("button")
		if (focusable.length > 0) {
			await expect(focusable[0]).toBeVisible()
		}
	},
}
