import { MantineSize } from "@mantine/core"
import { Definition, DictionaryItem } from "../../types"

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
	word: string
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
	
}
