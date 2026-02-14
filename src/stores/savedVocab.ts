import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SavedVocabState {
	savedWords: string[]
	toggleSaved: (word: string) => void
	isSaved: (word: string) => boolean
}

export const useSavedVocabStore = create<SavedVocabState>()(
	persist(
		(set, get) => ({
			savedWords: [],
			toggleSaved: (word) =>
				set((state) => {
					const isAlreadySaved = state.savedWords.includes(word)
					return {
						savedWords: isAlreadySaved
							? state.savedWords.filter((w) => w !== word)
							: [...state.savedWords, word],
					}
				}),
			isSaved: (word) => get().savedWords.includes(word),
		}),
		{
			name: "saved-vocab-storage",
		}
	)
)
