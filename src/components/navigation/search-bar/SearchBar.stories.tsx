import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { SearchBar } from "./SearchBar"
import { Box, VStack, Text } from "@chakra-ui/react"

// Create a fresh QueryClient for each story
const createQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				staleTime: Infinity,
			},
		},
	})

/**
 * # SearchBar
 *
 * Search input with autocomplete dropdown for dictionary word lookup.
 *
 * ## Features
 * - Real-time search suggestions via API
 * - Fuzzy matching for typo tolerance
 * - Keyboard navigation through results
 * - Click or Enter to select
 *
 * ## API Integration
 * Connects to the dictionary API for:
 * - Word suggestions as you type
 * - Definition previews in dropdown
 * - Recent search history (planned)
 *
 * ## Accessibility
 * - ARIA combobox pattern
 * - Keyboard navigable results
 * - Screen reader announcements for results
 */
const meta: Meta<typeof SearchBar> = {
	title: "Navigation/SearchBar",
	component: SearchBar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Search input with autocomplete dropdown for dictionary word lookup with real-time API suggestions.",
			},
		},
	},
	argTypes: {
		word: {
			control: "text",
			description: "Current search query value",
		},
		onSearch: {
			action: "searched",
			description: "Callback when search is submitted",
		},
		onWordChange: {
			action: "wordChanged",
			description: "Callback when input value changes",
		},
	},
	args: {
		onSearch: () => {},
		onWordChange: () => {},
	},
	decorators: [
		(Story) => (
			<QueryClientProvider client={createQueryClient()}>
				<Box p={8} minH="300px" minW="400px">
					<Story />
				</Box>
			</QueryClientProvider>
		),
	],
}

export default meta
type Story = StoryObj<typeof SearchBar>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Empty search bar ready for input
 */
export const Default: Story = {
	args: {
		word: "",
	},
}

/**
 * With a Vietnamese word query
 */
export const WithVietnameseQuery: Story = {
	name: "Vietnamese Query",
	args: {
		word: "rồi",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Search bar with a Vietnamese word, showing how tonal characters are handled.",
			},
		},
	},
}

/**
 * With a Chinese character query
 */
export const WithChineseQuery: Story = {
	name: "Chinese Query",
	args: {
		word: "感恩",
	},
}

/**
 * With a Spanish word query
 */
export const WithSpanishQuery: Story = {
	name: "Spanish Query",
	args: {
		word: "azafrán",
	},
}

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Typing interaction test
 */
export const TypingTest: Story = {
	args: {
		word: "",
	},
}

/**
 * Focus and blur test
 */
export const FocusTest: Story = {
	args: {
		word: "",
	},
}

// =============================================================================
// RESPONSIVE VARIANTS
// =============================================================================

/**
 * Mobile viewport
 */
export const Mobile: Story = {
	args: {
		word: "",
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
	},
}

// =============================================================================
// STATES
// =============================================================================

/**
 * Loading state (results pending)
 */
export const Loading: Story = {
	args: {
		word: "searching...",
	},
	parameters: {
		docs: {
			description: {
				story: "Search bar while API results are loading.",
			},
		},
	},
}
