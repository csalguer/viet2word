import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import { useState } from "react";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { SearchBar } from "./features/dictionary/components";
import { InfoCard } from "./features/dictionary/components/InfoCard/InfoCard";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export function Home() {
	const [word, setWord] = useState("");
	const [definition, setDefinition] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSearch = async (e: FormEvent) => {
		if (!word.trim()) return;
		setLoading(true);
		setError("");
		try {
			const data = await getWordDefinition(word);
			setDefinition(data);
		} catch (err) {
			setError("Word not found. Please try another word.");
			setDefinition(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 py-8 px-4">
			<div className="max-w-4xl mx-auto space-y-8">
				<h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
					Dictionary
				</h1>
				<SearchBar word={word} onWordChange={setWord} onSearch={handleSearch} />
				{loading && <div className="text-center text-gray-600">Loading...</div>}
				{error && <div className="text-center text-red-500">{error}</div>}
				{definition && (
					<InfoCard
						word={definition.word}
						phonetic={definition.phonetic}
						meanings={definition.meanings}
					/>
				)}
			</div>
		</div>
	);
}

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<ColorSchemeScript />
			<RouterProvider router={router} />
			{/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			<ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
};

export default App;
