import { createLazyFileRoute } from "@tanstack/react-router"
import { Dictionary } from "../pages/Dictionary"

export const Route = createLazyFileRoute("/dictionary")({
	component: Dictionary,
})
