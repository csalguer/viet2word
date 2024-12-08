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
