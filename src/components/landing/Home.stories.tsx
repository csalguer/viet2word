import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { within, userEvent, expect } from "@storybook/test"
import { Home } from "../../pages/Home"
import {
	createRouter,
	RouterProvider,
	createRootRoute,
	createRoute,
	createMemoryHistory,
} from "@tanstack/react-router"

// Router wrapper for stories
const StorybookRouterWrapper: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
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
			history: createMemoryHistory({ initialEntries: ["/home"] }),
		})
	}, [children])

	return <RouterProvider router={router} />
}

const meta: Meta<typeof Home> = {
	title: "Pages/Home",
	component: Home,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"The landing page showcasing dictionary features, palette guide, and component demos.",
			},
		},
	},
	decorators: [
		(Story) => (
			<StorybookRouterWrapper>
				<Story />
			</StorybookRouterWrapper>
		),
	],
}

export default meta
type Story = StoryObj<typeof Home>

/**
 * Default landing page view
 */
export const Default: Story = {}

/**
 * Editorial mode layout
 */
export const EditorialMode: Story = {
	parameters: {
		docs: {
			description: {
				story: "Landing page in editorial layout mode for dictionary entries.",
			},
		},
	},
}

/**
 * Visual test for responsive behavior
 */
export const Mobile: Story = {
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
 * Visual test for tablet
 */
export const Tablet: Story = {
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
 * Interactive test - toggle mode
 */
export const InteractiveToggle: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// Find toggle switch and interact
		const toggleButton = canvas.queryByRole("button")
		if (toggleButton) {
			await userEvent.click(toggleButton)
		}
	},
}
