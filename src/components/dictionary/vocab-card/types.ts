import { Definition, DictionaryItem, Meaning } from "../../../lib/types"
import { RefObject } from "react"

export interface DictionaryItemProps {
	// Make sure this is used for all vocab as schema for data
	item: DictionaryItem
}

export interface Cards<T> {
	content: {
		items: T[]
	}[]
}

export interface WordProps {
	word?: string
	phonetic?: string
	partOfSpeech?: string
	isRTL?: boolean
}
export interface DefinitionsListProps {
	definitions: Meaning[]
	onClick?: () => void
	variant?: boolean
}

export interface VocabCardProps extends DictionaryItem {
	visible?: boolean
	expanded?: boolean
	size?: string
	vertical?: boolean
	onClick?: () => void
	ref?: RefObject<HTMLDivElement>
}

export type InfoCardProps = VocabCardProps

export interface BookmarkProps {
	filled: boolean
	callback: (e?: any) => void
}

// TODO:
// ReGenerate all the types with all the tables and ReUnite
// De+ReCompose all the *Props types
//
