import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Define a function to fetch dictionary items
const fetchDictionaryItems = async (
	searchTerm: string
): Promise<DictionaryItem[]> => {
	const response = await axios.get(
		`https://api.dictionaryapi.com/api/v2/entries/en/${searchTerm}`
	)
	return response.data
}

// Create a TanStack Query function to fetch and manage the data
const useDictionaryItems = (searchTerm: string) => {
	return useQuery<DictionaryItem[], Error>({
		queryKey: ["dictionaryItems", searchTerm],
		queryFn: () => fetchDictionaryItems(searchTerm),
		enabled: !!searchTerm, // Only run the query if there is a search term
	})
}

// Example usage in a component
// const DictionarySearch = ({ searchTerm }: { searchTerm: string }) => {
// 	const { data, error, isLoading } = useDictionaryItems(searchTerm);

// 	if (isLoading) {return (<div>Loading</div>)}
// 	if (error) {return (<div>Error: {error.message}</div>)}

// 	return (
// 		<div>
// 			{data?.map((item, index) => (
// 				<div key={index}>
// 					<h2>{item?.word}</h2>
// 					{item?.phonetic && <p>{item?.phonetic}</p>}
// 					<ul>
// 						{item?.meanings.map((meaning, idx) => (
// 							<li key={idx}>
// 								<strong>{meaning.partOfSpeech}</strong>
// 								<ul>
// 									{meaning.definitions.map((def, defIdx) => (
// 										<li key={defIdx}>
// 											{def.definition}
// 											{def.example && <p><em>"{def.example}"</em></p>}
// 										</li>
// 									))}
// 								</ul>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			))}
// 		</div>
// 	);
// };
