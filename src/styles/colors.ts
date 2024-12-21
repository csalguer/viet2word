import {
	MantineProvider,
	createTheme,
	MantineColorsTuple,
	MantineThemeOther,
} from "@mantine/core"

const rouge: MantineColorsTuple = [
	"#fbefef",
	"#efdbdb",
	"#e3b3b3",
	"#d78988",
	"#cd6564",
	"#c84f4c",
	"#c64340",
	"#af3533",
	"#9c2e2c",
	"#892424",
]

const orange: MantineColorsTuple = [
	"#fff3e6",
	"#fee5d0",
	"#fcc99f",
	"#fbab6a",
	"#fa923e",
	"#f98223",
	"#fa7a15",
	"#de6809",
	"#c75b03",
	"#ad4d00",
]

const jaune: MantineColorsTuple = [
	"#fff7e0",
	"#ffedcc",
	"#fcdb9d",
	"#f9c76a",
	"#f6b63e",
	"#f5ab22",
	"#f5a510",
	"#da9000",
	"#c28000",
	"#a96d00",
]
const verte: MantineColorsTuple = [
	"#f4f9f0",
	"#e8f1e1",
	"#cfe2bd",
	"#b3d397",
	"#9cc676",
	"#8dbe61",
	"#85ba56",
	"#72a346",
	"#64913c",
	"#547e30",
]

const sage: MantineColorsTuple = [
	"#f6f8f2",
	"#ebede6",
	"#d4dac7",
	"#bcc5a5",
	"#a7b488",
	"#9aaa76",
	"#93a46b",
	"#7f8f5a",
	"#717f4e",
	"#606e3f",
]

const tropiqueaux: MantineColorsTuple = [
	"#f0faf8",
	"#e3f1ee",
	"#c0e2db",
	"#9bd3c7",
	"#7cc7b6",
	"#69bfac",
	"#5dbba6",
	"#4da591",
	"#419381",
	"#2e7f6e",
]

const eaux: MantineColorsTuple = [
	"#eff9fb",
	"#e0eff2",
	"#bbdfe6",
	"#94ceda",
	"#75bfcf",
	"#62b6c9",
	"#57b2c7",
	"#479cb0",
	"#3a8b9d",
	"#23788a",
]

const bleu: MantineColorsTuple = [
	"#eaf4ff",
	"#d8e4f9",
	"#b0c6eb",
	"#86a6dd",
	"#638bd2",
	"#4c7acb",
	"#3f71c9",
	"#3060b3",
	"#2655a1",
	"#164990",
]
const mauve: MantineColorsTuple = [
	"#f2f2f8",
	"#e1e2e9",
	"#c0c2d5",
	"#9ca0c1",
	"#7f83af",
	"#6c70a5",
	"#6267a1",
	"#52568d",
	"#484d7f",
	"#3c4271",
]

const rose: MantineColorsTuple = [
	"#faf0f5",
	"#eedde6",
	"#e0b7cb",
	"#d18fb0",
	"#c56d98",
	"#be588a",
	"#bb4d83",
	"#a53f70",
	"#943664",
	"#822b57",
]
const marron: MantineColorsTuple = [
	"#fff0ec",
	"#f2e2de",
	"#ddc4be",
	"#c7a49c",
	"#b6887f",
	"#ab776c",
	"#a76e61",
	"#925c51",
	"#845146",
	"#75443a",
]
/////////////////////////////////

const autre: MantineThemeOther = {
	other: {
		neutrals: {
			beige: "#bda28f",
			warm: "#ccaba4",
			slate: "#9b9b9b",
			bluestone: "#58748f",
		},
		paper: {
			legalpad: "#e9d8a6",
			white: "#ede0d4",
		},
		ink: {
			black: "#001219",
			blue: "#001249",
			red: "#760000",
			teal: "#025f72",
		},
		assorted: {
			currant: "#5f0f40",
			grape: "#694d7d",
			green: "#4f762d",
			aqua: "#069396",
			gray: "#9b9b9b",
		},
	},
}

export const couleurs = {
	rouge,
	orange,
	jaune,
	verte,
	sage,
	tropiqueaux,
	eaux,
	bleu,
	mauve,
	rose,
	marron,
	autre,
}
