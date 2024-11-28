// Map to input method helper function later, keep
// Diacritic marks a character -> Fn from Fn("e")--> "ệ"

// Tone (Diacritic, VnZhHighlightColor, index, Contours, Pitch (data for pitch accents), _in:(block out for intonation profile/etc.), )

import {Color, ToneNames, VnZhHighlightColor, Palette} from "../styles/Palette"


function detectVietnameseTone(word: string): string {
	const toneMarks: Record<string, string> = {
		NGA: "", // No diacritical mark
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
	return "ngang" // Default to neutral tone if no mark is found
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


type Diacritic<Tone> = Record<Tone, (s:string) => string>
{
  Tone.NGANG: (s:string) => {return {
    diacritic: ' ',
    highlightColor: VnZhHighlightColor.NGANG,
    contours: 1,
    pitch: {
      // type: 'accent',
      data: [
        // {
        //   pitch: 1,
        //   level: 0.2,
        // },
        // {
        //   pitch: 2,
        //   level: 0.3,
        // },
      ],
    },
    // _in: false,
  }},
  Tone.SÁC : (s:string) => {return {return {
    diacritic: ' ',
    highlightColor: VnZhHighlightColor.SÁC,
    contours: 1,
    contours: 1,
    pitch: {
      data: [
      ],
    },
    // _in: false,
  }}},
  Tone.HUYỀN: (s:string) => {return {return {
    diacritic: ' ',
    highlightColor: VnZhHighlightColor.HUYỀN,
    contours: 1,
    pitch: {
      data: [
      ],
    },
    // _in: false,
  }}},
  Tone.HỎI: (s:string) => {return {return {
    diacritic: ' ',
    highlightColor: VnZhHighlightColor.HỎI,
    contours: 1,
    pitch: {
      data: [
      ],
    },
    // _in: false,
  }}},
  Tone.NGÃ: (s:string) => {return {return {
    diacritic: ' ',
    highlightColor: VnZhHighlightColor.NGÃ,
    contours: 2,
    
    pitch: {
      data: [
      ],
    },
    // _in: false,
  }}},
  Tone.NẠNG: (s:string) => {return {return {
    diacritic: ' ',
    highlightColor: VnZhHighlightColor.NẠNG,
    contours: 1,
    pitch: {
      data: [
      ],
    },
    // _in: false,
  }}},
}
