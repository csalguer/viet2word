import { StrictMode, Suspense } from "react"
import ReactDOM from "react-dom/client"
import {
	Outlet,
	RouterProvider,
	Link,
	createRouter,
	createRoute,
	createFileRoute,
	createRootRoute,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

import { Home } from "../pages/Home"
import { Reader } from "../pages/Reader"
import { Dictionary } from "../pages/Dictionary"

export const Route = createFileRoute("/")({
	component: Reader,
})

const readerRoute = createRoute({
	getParentRoute: () => Route,
	path: "/reader",
	component: Reader,
})

const dictRoute = createRoute({
	getParentRoute: () => Route,
	path: "/dictionary",
	component: Dictionary,
})

const routeTree = Route.addChildren([readerRoute, dictRoute])

const router = createRouter({ routeTree })

// declare module "@tanstack/react-router" {
// 	interface Register {
// 		router: typeof router
// 	}
// }


const rootElement = document.getElementById("app")
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<>
		<StrictMode>
		<Suspense fallback="loading">
		<App router={router} />
		</Suspense>
		</StrictMode>
		</>
	)
}


// const rootElement = document.getElementById("app")
// if (!rootElement?.innerHTML) {
// 	const root = ReactDOM.createRoot(rootElement)
// 	root.render(router)
// }
