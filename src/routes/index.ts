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
	component: Home,
})
