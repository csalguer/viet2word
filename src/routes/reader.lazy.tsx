import { createLazyFileRoute } from "@tanstack/react-router"
import { Reader } from "../pages/Reader"

export const Route = createLazyFileRoute("/reader")({
	component: Reader,
})
