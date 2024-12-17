import { MantineSize } from "@mantine/core"
import { Definition, DictionaryItem } from "../../types"
import { RefObject } from "react"

export interface DictionaryItemProps {
	// Make sure this is used for all vocab as schema for data
	item: DictionaryItem
}

type VocabCard = DictionaryItem<typeof T>

export interface Cards<T> {
	content: {
		items: T[]
	}[]
}

export interface WordProps {
	word?: string
	partOfSpeech?: string
	isRTL?: boolean
}
export interface DefinitionsListProps {
	definitions: Definition[]
	onClick?: () => void
}

export interface VocabCardProps extends DictionaryItem {
	visible?: boolean
	expanded?: boolean
	size?: MantineSize
	vertical?: boolean
	onClick?: () => void
	ref: RefObject
}

// TODO:
// ReGenerate all the types with all the tables and ReUnite
// De+ReCompose all the *Props types
//

// Significant in Relevancy(s)o/000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                5 kp-=
// trgt src matters, and so does the meaning, what is it? what time is it? what YEAR is it?!?!?!
