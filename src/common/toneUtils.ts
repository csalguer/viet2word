// Map to input method helper function later, keep
// Diacritic marks a character -> Fn from Fn("e")--> "ệ"

// Tone (Diacritic, VnZhHighlightColor, index, Contours, Pitch (data for pitch accents), _in:(block out for intonation profile/etc.), )

import Palette, {
	Color,
	ToneNames,
	VnZhHighlightColor,
} from "../styles/Palette"

export const detectVietnameseTone = (word: string): string => {
	const toneMarks: Record<string, string> = {
		NGANG: "", // No diacritical mark
		HUYEN: "àầằèềìòồờùừỳ",
		SAC: "áấắéếíóốúứý",
		HOI: "ảẩẳẻểỉỏổởửủỷ",
		NGA: "ãẵẫễẽĩỡỗõũữỹ",
		NANG: "ạặậẹệịọộợụựỵ",
	}

	// Iterate through tone categories and check for matching characters
	for (const [tone, characters] of Object.entries(toneMarks)) {
		for (const char of word) {
			if (characters.includes(char)) {
				return tone // Return the first detected tone
			}
		}
	}
	return "" // Default to neutral tone if no mark is found
}

// Example usage

// export const VnDiacriticMap = {
// 	NGANG: {},
// 	SAC:{} ,
// 	HUYEN:{} ,
// 	HOI:{} ,
// 	NGA:{} ,
// 	NANG:{} ,
// }

// const getToneColor = (word: string): CSSStyleValue => {

// }

type Diacritic<Tone extends string | number | symbol> = Record<Tone, (s: string) => string>

const getToneInfo = {
	NGANG: (s: string) => {
		return {
			diacritic: " ",
			highlightColor: VnZhHighlightColor.NGANG,
			contours: 1,
			pitch: {
				data: [],
			},
		}
	},
	SÁC: (s: string) => {
		return {
			diacritic: " ",
			highlightColor: VnZhHighlightColor.SÁC,
			contours: 1,
			pitch: {
				data: [],
			},
		}
	},
	HUYỀN: (s: string) => {
		return {
			diacritic: " ",
			highlightColor: VnZhHighlightColor.HUYỀN,
			contours: 1,
			pitch: {
				data: [],
			},
		}
	},
	HỎI: (s: string) => {
		return {
			diacritic: " ",
			highlightColor: VnZhHighlightColor.HỎI,
			contours: 1,
			pitch: {
				data: [],
			},
		}
	},
	NGÃ: (s: string) => {
		return {
			diacritic: " ",
			highlightColor: VnZhHighlightColor.NGÃ,
			contours: 2,

			pitch: {
				data: [],
			},
		}
	},
	NẠNG: (s: string) => {
		return {
			diacritic: " ",
			highlightColor: VnZhHighlightColor.NẠNG,
			contours: 1,
			pitch: {
				data: [],
			},
		}
	},
}
