import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DictionaryItem } from "./types"

export interface DictionaryResponse {
	data: DictionaryItem[]
	total: number
	page: number
	limit: number
	totalPages: number
}

export const fetchDictionaryEntries = async (
	page = 1,
	limit = 10,
	search = ""
) => {
	const response = await axios.get<DictionaryResponse>("/api/dictionary", {
		params: { page, limit, search },
	})
	return response.data
}

export const useDictionaryEntries = (
	page: number,
	limit: number,
	search: string
) => {
	return useQuery({
		queryKey: ["dictionary", page, limit, search],
		queryFn: () => fetchDictionaryEntries(page, limit, search),
	})
}

// TODO: useInfiniteQuery you can use for infinite scrolling in the future

// TODO: Add a check to search query to clean or sanitize input if necessary
// and account for telex weirdness (simple, manual tone, no-accents, wrong input)

// TODO:: Implement filtering and category look-ups in the future

// TODO: Ensure proper error handling and loading states in the UI components using this API during data fetching

// TODO: Consider adding caching strategies or stale time for the queries to optimize performance

// TODO:
