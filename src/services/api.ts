import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { PaginatedResponse, Word } from "@/types"

// Centralize API client config
const api = axios.create({
	baseURL: "/api/v1", // Go through Vite proxy
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

// Optional: Global error interceptor
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        console.error("API Error:", error.response?.status, error.message);
        return Promise.reject(error);
    }
);

export const fetchDictionaryEntries = async (
	page = 1,
	limit = 10,
	search = ""
) => {
	// Backend limit is 0-indexed offset 'skip', frontend uses 1-indexed 'page'
	const skip = (page - 1) * limit
	const params = { skip, limit, search }
	
	const response = await api.get<PaginatedResponse<Word>>("/words", {
		params,
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
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
        retry: 1,
	})
}

export const fetchWord = async (lookup: string) => {
	const response = await api.get<Word>(`/words/${lookup}`)
	return response.data
}

export const useWord = (lookup: string) => {
	return useQuery({
		queryKey: ["word", lookup],
		queryFn: () => fetchWord(lookup),
		enabled: !!lookup,
        retry: false, // Don't retry 404s
	})
}

// New: Fetch multiple words by ID (for Saved Vocab)
export const fetchWordsByIds = async (ids: string[]) => {
    if (ids.length === 0) return [];
    
    // Use the optimized batch endpoint
    const response = await api.post<Word[]>("/words/batch", ids);
    return response.data;
}

export const useSavedWords = (ids: string[]) => {
    return useQuery({
        queryKey: ["saved-words", ids],
        queryFn: () => fetchWordsByIds(ids),
        enabled: ids.length > 0,
    })
}
