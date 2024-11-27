import { createLazyFileRoute } from "@tanstack/react-router"
import { Dictionary } from "../pages/Dictionary"

export const Route = createLazyFileRoute("/dicionary")({
	component: Dictionary,
})
