import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { PaginatedResponse, WordPublic } from "./types"

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
	
	const response = await api.get<PaginatedResponse<WordPublic>>("/words", {
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
	const response = await api.get<WordPublic>(`/words/${lookup}`)
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
    
    // Ideally backend should support batch fetch, e.g. /words?ids=1,2,3
    // For now, we'll do parallel requests (limit concurrency in real app)
    // Or if backend supports text search that finds exact matches?
    
    // Strategy: We will use Promise.all. A production app needs a batch endpoint.
    const requests = ids.map(id => 
        api.get<WordPublic>(`/words/${id}`).then(r => r.data).catch(() => null)
    );
    
    const results = await Promise.all(requests);
    return results.filter(w => w !== null) as WordPublic[];
}

export const useSavedWords = (ids: string[]) => {
    return useQuery({
        queryKey: ["saved-words", ids],
        queryFn: () => fetchWordsByIds(ids),
        enabled: ids.length > 0,
    })
}
