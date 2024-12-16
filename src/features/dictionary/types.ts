import { number, string } from "prop-types"
import { DefinitionsList } from "./components"

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

// Definitions {
// 	id: uuid
// 	definition: string
// 	example: string
// 	word: Word (ForeignKey)
// 	tags: jsonb
// }

// Word: {
//  id: uuid
// 	headword: string
// 	hanNom: string,
// 	chuNom: string,
// 	pronunciation: uuid,
//  frequency: number,
//  rank: number,
//  pinyin: string
//  pinyinTraditional: string
// 	phonetic: string,
// 	synonyms: string[], // Relationship 1->Many
// 	antonyms: string[], // Relationship 1->Many
// 	level: string //A1-C2,
// 	source: string //Dict from
// 	strokeOrder: uuid //dict from
// }

// Pronunciations: {
//  id: uuid
// 	language: string
// 	transcription: string
// 	phonetic: string
// 	word: Word (ForeignKey)
// 	accent: AccentType (ForeignKey)
// 	audio: binary
// 	length: number
// 	verified: boolean
// 	isUser: boolean
// 	isDatasetAvailable: boolean
// }

// AccentType: {
// 	language: string
// 	region: string
// }

// ScriptType
// type: string/enum
// rToL: boolean
// language: enum/string
