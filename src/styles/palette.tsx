import { ColorPalette } from "./types"

const colors = {
	primary: "#3182ce",
	secondary: "#f2f2f2",
	success: "#4caf50",
	info: "#2196f3",
	warning: "#ff9800",
	error: "#f44336",
}

export const brand_base = ["#FFB556", "#EC6928", "#C73A67", "#9529AB"]
export interface Tone {
	name: string
	highlight: Color
}

export type Color = string

export enum ToneNames {
	NGANG = "NGANG",
	SÁC = "SÁC",
	HUYỀN = "HUYỀN",
	HỎI = "HỎI",
	NGÃ = "NGÃ",
	NẠNG = "NẠNG",
}

export const VnZhHighlightColor = {
	NGANG: "#ffffff",
	SÁC: "#FED7D7",
	HUYỀN: "#BEE3F8",
	HỎI: "#E9D8FD",
	NGÃ: "#C6F6D5",
	NẠNG: "#FBD38D",
}

const warm = ["#9a2225", "#ae2112", "#ba3d04", "#ca6703", "#ee9b00", "#f2b559"]

const greens = ["#90a955", "#4f762d", "#31572c"]

const cool = [
	"#5f0f40",
	"#6a4c93",
	"#6d597a",
	"#58748f",
	"#069396",
	"#025f72",
	"#001219",
]

const paperPreview = {
	highlight: [
		"#8b3125",
		"#9a2225",
		"#ca6703",
		"#ee9b00",
		"#4f762d",
		"#025f72",
		"#58748f",
	],
	edit: [
		"#9b9b9b", // Main backgr NOT SHADOW TOO WARM
		"#760000", // Main Correction
		"#f59a22", // USED IN NOTES ALREADY AS ORANGE< NOT YELLOW TOO CLOSE
		"#f2b559", // ADDED FROM ABOVE AS YELLOW
		"#71a201",
		"#025f72", // Main Writing
		"#069396",
		"#001219", // INK BLUE ~ For strokes not visuals
		"#694d7d",
		"#5f0f40",
	],

	neutrals: {
		beige: "#bda28f",
		warm: "#ccaba4",
		slate: "#9b9b9b",
		bluestone: "#58748f",
		legalpad: "#e9d8a6",
		white: "#ede0d4",
	},
}

export const colorsPractical = [
	"#5f0f40",
	"#6a4c93",
	"#6d597a",
	"#58748f",
	"#069396",
	"#025f72",
	"#001219",
]

const palette: ColorPalette = {
	...colors,
	warm,
	greens,
	cool,
	edit: paperPreview.edit,
	highlighter: paperPreview.highlight,
	gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
	neutrals: paperPreview.neutrals,
	colorsEstimate: [
		"#9a2225",
		"#ae2112",
		"#ba3d04",
		"#ca6703",
		"#ee9b00",
		"#f2b559",
		"#90a955",
		"#4f762d",
		"#31572c",
		"#069396",
		"#58748f",
		"#025f72",
		"#001219",
		"#6d597a",
		"#6a4c93",
		"#5f0f40",
		"#ef466f",
		"#e9d8a6",
		"#ede0d4",
	],
}

export default palette
