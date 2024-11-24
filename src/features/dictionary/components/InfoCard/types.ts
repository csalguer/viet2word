export interface InfoCardProps {
	word: string
	phonetic?: string
	meanings: Array<{
		partOfSpeech: string
		definitions: Array<{
			definition: string
			example?: string
		}>
	}>
}

export interface Cards {
	content: {
		word: string
		meanings: {
			partOfSpeech: string
			definitions: {
				definition: string
				example: string
			}
		}[]
	}[]
}

export interface WordProps {
	word: string
	partOfSpeech?: string
}
export interface MeaningProps {
	meanings: {
		definition: string
		example?: string
	}[]
	onClick?: () => void
}
export interface VocabCardProps extends InfoCardProps {
	// hideDefinitions?: boolean
	visible?: boolean
	expanded?: boolean
	// toggleHidden?: () => void
	onClick?: () => void
	// word?: string
	// phonetic?: string
	// meanings?: Meaning[]
	// onClick?: () => void
	// content?: CardList[]["content"][]
	// createCards?: (item: CardList[]["content"][0], index: number) => ReactElement
	// cards?: ReactElement[]
}
