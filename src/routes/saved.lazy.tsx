import { createLazyFileRoute } from "@tanstack/react-router"
import { SavedVocab } from "../pages/SavedVocab"

export const Route = createLazyFileRoute("/saved")({
	component: SavedVocab,
})
