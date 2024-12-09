// Define the type for DictionaryItems and its nested structures
export interface Definition {
	definition: string
	example?: string
}

export interface Meaning {
	partOfSpeech: string
	definitions: Array<Definition>
}

export interface DictionaryItem {
	word: string
	phonetic?: string
	meanings: Array<Meaning>
}

// SearchItem == DictionaryEntry
// Entry ->
//     headword: string
//     pronunciation: string
//     partOfSpeech: string
//     DEFs: [
//       definition: string
//       ¿translation: i18n?
//       example: string
//     ]
