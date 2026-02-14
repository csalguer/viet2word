export type FunctionComponent = React.ReactElement | null

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>
type IconProps = HeroIconSVGProps & {
	title?: string
	titleId?: string
}
export type Heroicon = React.FC<IconProps>

// === Backend-aligned types ===

export interface SensePublic {
	id: string
	word_id: string
	glosses: string[] | null
	tags: string[] | null
	display_label: string | null
	examples: Record<string, unknown>[] | null
	links: unknown[] | null
	synonyms: Record<string, unknown>[] | null
	antonyms: Record<string, unknown>[] | null
	related: Record<string, unknown>[] | null
	derived: Record<string, unknown>[] | null
}

export interface SoundPublic {
	id: string
	word_id: string
	ipa: string | null
	audio: string | null
	tags: string[] | null
}

export interface FormPublic {
	id: string
	word_id: string
	form: string | null
	tags: string[] | null
}

export interface WordPublic {
	id: string
	word: string
	pos: string
	lang_code: string
	etymology_text: string | null
	head_templates: Record<string, unknown>[] | null
	etymology_templates: Record<string, unknown>[] | null
	senses: SensePublic[]
	sounds: SoundPublic[]
	forms: FormPublic[]
	created_at: string
	updated_at: string
}

export interface PaginatedResponse<T> {
	data: T[]
	count: number
	page: number
	limit: number
	total_pages: number
}

// Legacy alias for compatibility during migration
export type DictionaryItem = WordPublic
