// Distribution
// const gradients = {
//   sunset:
//     ` linear-gradient(48deg,${} 0%, ${}31%,${} 61%, ${})`,
// }

export const brand_base = ["#FFB556", "#EC6928", "#C73A67", "#9529AB"]
export interface Tone {
	name: string
	highlight: Color
}

export type Color = string

export enum ToneNames {
	NGANG = "NGANG",
	SAC = "SAC",
	HUYEN = "HUYEN",
	HOI = "HOI",
	NGA = "NGA",
	NANG = "NANG",
}

export const VnZhHighlightColor = {
	NGANG: "#9b9b9b",
	SAC: "#FED7D7",
	HUYEN: "#BEE3F8",
	HOI: "#E9D8FD",
	NGA: "#C6F6D5",
	NANG: "#FBD38D",
}

export const colorsEstimate = [
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
]

export const colorsPractical = [
	"#760000",
	"#f59a22",
	"#5eb279",
	"#93bfb3",
	"#71a201",
	"#0084a2",
	"#92bfb2",
	"#694d7d",
	"#bda28f",
	"#ccaba4",
	"#9b9b9b",
]

// TODO: Apply the changes listed in the side comments below:
//
export const toAdjust = [
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
]

export const Palette = {
	gray: {
		50: "#fceff2",
		100: "#ddd7d9",
		200: "#c1bfbf",
		300: "#a6a6a6",
		400: "#8c8c8c",
		500: "#737373",
		600: "#595959",
		700: "#413f40",
		800: "#292526",
		900: "#16090d",
	},
	// Try new one based on:   '#9a2225',
	red: {
		50: "#ffe7e9",
		100: "#f5bfc1",
		200: "#e99699",
		300: "#df6d70",
		400: "#d44448",
		500: "#bb2b2e",
		600: "#922023",
		700: "#691619",
		800: "#410b0d",
		900: "#1c0101",
	},
	orange: {
		50: "#fff3dc",
		100: "#ffddb1",
		200: "#fac782",
		300: "#f7b153",
		400: "#f59b23",
		500: "#dc810a",
		600: "#ab6405",
		700: "#7b4802",
		800: "#4b2a00",
		900: "#1d0c00",
	},
	yellow: {
		50: "#fff6dc",
		100: "#fbe3b2",
		200: "#f6d186",
		300: "#f2bf58",
		400: "#eeac2b",
		500: "#d49311",
		600: "#a5720a",
		700: "#775205",
		800: "#483100",
		900: "#1d0f00",
	},
	//  '#4f762d',

	// green: {
	//   50: '#f5ffde',
	//   100: '#e7ffaf',
	//   200: '#d8fe7f',
	//   300: '#c8fe4e',
	//   400: '#bafe1f',
	//   500: '#a0e408',
	//   600: '#7cb101',
	//   700: '#577f00',
	//   800: '#344c00',
	//   900: '#101a00',
	// },
	green: {
		50: "#effae5",
		100: "#d7ebc5",
		200: "#bcdca2",
		300: "#a3ce7e",
		400: "#8ac05a",
		500: "#70a640",
		600: "#578131",
		700: "#3d5c22",
		800: "#233712",
		900: "#071300",
	},
	teal: {
		50: "#dcfcff",
		100: "#b0f2ff",
		200: "#82e8fd",
		300: "#55dffb",
		400: "#31d4f9",
		500: "#23bbe0",
		600: "#1292ae",
		700: "#02687d",
		800: "#003f4c",
		900: "#00171d",
	},
	cyan: {
		50: "#d9ffff",
		100: "#aefcfd",
		200: "#81f8fa",
		300: "#53f5f8",
		400: "#2df2f6",
		500: "#1bd8dd",
		600: "#07a8ac",
		700: "#00787b",
		800: "#00494b",
		900: "#001a1c",
	},
	blue: {
		50: "#e5f8ff",
		100: "#bbe9fb",
		200: "#8fd9f8",
		300: "#67cbf7",
		400: "#4cbdf5",
		500: "#3ea4dc",
		600: "#3080ab",
		700: "#225b79",
		800: "#113649",
		900: "#00121a",
	},
	purple: {
		50: "#f7edfc",
		100: "#dbcfe5",
		200: "#c2b0cf",
		300: "#a991bb",
		400: "#9171a7",
		500: "#77578d",
		600: "#5d446e",
		700: "#423150",
		800: "#291c31",
		900: "#100816",
	},
	pink: {
		50: "#ffe6f7",
		100: "#f7bce0",
		200: "#ee91ca",
		300: "#e666b4",
		400: "#de3c9e",
		500: "#c42385",
		600: "#991a68",
		700: "#6e114a",
		800: "#43082e",
		900: "#1b0012",
	},
	// Might have to expand
	neutrals: {
		beige: "#bda28f",
		warm: "#ccaba4",
		shale: "#9b9b9b",
		slate: "#7b7b7b",
		bluestone: "#58748f",
		legalpad: "#e9d8a6",
		white: "#ede0d4",
	},
}

export default Palette
