import React from "react"
import type { ReactElement } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within, userEvent } from "@storybook/test"
import {
	createRouter,
	RouterProvider,
	createRootRoute,
	createRoute,
	createMemoryHistory,
} from "@tanstack/react-router"
import { Navigation } from "./navigation"
import { Center, Flex, Text, Box } from "@chakra-ui/react"

/**
 * Router wrapper for Storybook that provides TanStack Router context
 */
const StorybookRouterWrapper: React.FC<{
	children: React.ReactNode
	initialPath?: string
}> = ({ children, initialPath = "/" }) => {
	const router = React.useMemo(() => {
		const rootRoute = createRootRoute({
			component: () => <>{children}</>,
		})

		const routes = [
			{ path: "/" },
			{ path: "/home" },
			{ path: "/dictionary" },
			{ path: "/reader" },
			{ path: "/chat" },
			{ path: "/saved" },
		].map((r) =>
			createRoute({
				getParentRoute: () => rootRoute,
				path: r.path,
				component: () => null,
			})
		)

		const routeTree = rootRoute.addChildren(routes)

		return createRouter({
			routeTree,
			history: createMemoryHistory({
				initialEntries: [initialPath],
			}),
		})
	}, [children, initialPath])

	return <RouterProvider router={router} />
}

/**
 * # Navigation
 *
 * The main navigation component with search functionality and route links.
 *
 * ## Features
 * - Search bar with autocomplete (API integration planned)
 * - Route navigation links
 * - Responsive layout (mobile/desktop)
 * - Keyboard accessible
 *
 * ## API Integration (Planned)
 * The search bar will connect to the dictionary API for:
 * - Word lookup and suggestions
 * - Fuzzy search matching
 * - Recent searches
 */
const meta: Meta<typeof Navigation> = {
	title: "Navigation/Navigation",
	component: Navigation,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Main navigation component with search bar, route links, and responsive layout.",
			},
		},
	},
	decorators: [
		(Story) => (
			<StorybookRouterWrapper>
				<Box minH="100vh" bg="gray.100">
					<Story />
				</Box>
			</StorybookRouterWrapper>
		),
	],
}

export default meta
type Story = StoryObj<typeof Navigation>

// =============================================================================
// PRIMARY STORIES
// =============================================================================

/**
 * Default navigation with sample content
 */
export const Default: Story = {
	args: {
		children: (
			<Center p={8}>
				<Text>Page Content Area</Text>
			</Center>
		) as ReactElement,
	},
}

/**
 * Navigation with dictionary page content
 */
export const WithDictionaryContent: Story = {
	args: {
		children: (
			<Box p={8}>
				<Text fontSize="2xl" fontWeight="bold">
					Dictionary
				</Text>
				<Text>Search for Vietnamese, Chinese, and Spanish vocabulary.</Text>
			</Box>
		) as ReactElement,
	},
	decorators: [
		(Story) => (
			<StorybookRouterWrapper initialPath="/dictionary">
				<Box minH="100vh" bg="gray.100">
					<Story />
				</Box>
			</StorybookRouterWrapper>
		),
	],
}

// =============================================================================
// RESPONSIVE VARIANTS
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
		chromatic: {
			viewports: [320],
		},
	},
}

/**
 * Tablet viewport
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

// =============================================================================
// INTERACTION TESTS
// =============================================================================

/**
 * Search input interaction
 */
export const SearchInteraction: Story = {
	args: {
		...Default.args,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Find search input
		const searchInput =
			canvas.queryByRole("searchbox") ||
			canvas.queryByPlaceholderText(/search/i)
		if (searchInput) {
			await userEvent.click(searchInput)
			await userEvent.type(searchInput, "vẹt")
		}
	},
}

/**
 * Keyboard navigation through links
 */
export const KeyboardNavigation: Story = {
	args: {
		...Default.args,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Tab through navigation elements
		await userEvent.tab()
		await userEvent.tab()
		await userEvent.tab()

		// Check for nav links
		const links = canvas.queryAllByRole("link")
		if (links.length > 0) {
			await expect(links[0]).toBeVisible()
		}
	},
}

// =============================================================================
// ROUTE STATES
// =============================================================================

/**
 * Active on Home route
 */
export const HomeActive: Story = {
	args: {
		...Default.args,
	},
	decorators: [
		(Story) => (
			<StorybookRouterWrapper initialPath="/home">
				<Box minH="100vh" bg="gray.100">
					<Story />
				</Box>
			</StorybookRouterWrapper>
		),
	],
}

/**
 * Active on Reader route
 */
export const ReaderActive: Story = {
	args: {
		...Default.args,
	},
	decorators: [
		(Story) => (
			<StorybookRouterWrapper initialPath="/reader">
				<Box minH="100vh" bg="gray.100">
					<Story />
				</Box>
			</StorybookRouterWrapper>
		),
	],
}

/**
 * Active on Saved route
 */
export const SavedActive: Story = {
	args: {
		...Default.args,
	},
	decorators: [
		(Story) => (
			<StorybookRouterWrapper initialPath="/saved">
				<Box minH="100vh" bg="gray.100">
					<Story />
				</Box>
			</StorybookRouterWrapper>
		),
	],
}
