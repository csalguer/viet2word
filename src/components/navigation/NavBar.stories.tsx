import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	createRouter,
	RouterProvider,
	createRootRoute,
	createRoute,
	createMemoryHistory,
} from "@tanstack/react-router"
import { NavBar } from "./NavBar"

const StorybookRouterWrapper: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const router = React.useMemo(() => {
		const rootRoute = createRootRoute({
			component: () => <>{children}</>,
		})

		const indexRoute = createRoute({
			getParentRoute: () => rootRoute,
			path: "/",
			component: () => null,
		})

		const homeRoute = createRoute({
			getParentRoute: () => rootRoute,
			path: "/home",
			component: () => null,
		})

		const readerRoute = createRoute({
			getParentRoute: () => rootRoute,
			path: "/reader",
			component: () => null,
		})

		const dictionaryRoute = createRoute({
			getParentRoute: () => rootRoute,
			path: "/dictionary",
			component: () => null,
		})

		const routeTree = rootRoute.addChildren([
			indexRoute,
			homeRoute,
			readerRoute,
			dictionaryRoute,
		])

		return createRouter({
			routeTree,
			history: createMemoryHistory({
				initialEntries: ["/"],
			}),
		})
	}, [children])

	return <RouterProvider router={router} />
}

const meta: Meta<typeof NavBar> = {
	component: NavBar,
	tags: ["autodocs"],
	decorators: [
		(Story) => {
			return (
				<StorybookRouterWrapper>
					<Story />
				</StorybookRouterWrapper>
			)
		},
	],
}

export default meta

type Story = StoryObj<typeof NavBar>

export const Primary: Story = {}
