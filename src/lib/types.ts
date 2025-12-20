export type FunctionComponent = React.ReactElement | null

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>
type IconProps = HeroIconSVGProps & {
	title?: string
	titleId?: string
}
export type Heroicon = React.FC<IconProps>

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
