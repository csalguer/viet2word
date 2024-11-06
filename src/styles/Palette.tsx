import { ColorPalette } from "./types"

const colors = {
	primary: "#3182ce",
	secondary: "#f2f2f2",
	success: "#4caf50",
	info: "#2196f3",
	warning: "#ff9800",
	error: "#f44336",

	gray: [
		"#f8f8f8",
		"#f2f2f2",
		"#e0e0e0",
		"#bdbdbd",
		"#9e9e9e",
		"#757575",
		"#616161",
		"#424242",
		"#212121",
		"#111111",
	],
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
	highlight: ["#ca6703", "#ee9b00", "#90a955", "#cddc39", "#58748f", "#025f72"],
	edit: [],
}

const palette: ColorPalette = {
	...colors,
	warm,
	greens,
	cool,
	...paperPreview,
}

export default palette
