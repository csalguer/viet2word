import type { Plugin } from "vite"
import fs from "node:fs"
import path from "node:path"
import readline from "node:readline"

interface DictionaryEntry {
	word: string
	phonetic?: string
	meanings: {
		partOfSpeech: string
		definitions: {
			definition: string
			example?: string
		}[]
	}[]
}

export function mockApiPlugin(): Plugin {
	let entries: DictionaryEntry[] = []

	return {
		name: "vite-plugin-mock-api",
		configureServer(server) {
			// Load data on server start
			const dataDir = path.resolve(process.cwd(), "data")
			const files = [
				"chinese_nom_entries.jsonl",
				"kaikki.org-dictionary-Vietnamese.jsonl",
				"standard_dictionary.jsonl",
			]

			console.log("Loading mock data...")

			const loadData = async () => {
				for (const file of files) {
					const filePath = path.join(dataDir, file)
					if (!fs.existsSync(filePath)) {
						console.warn(`File not found: ${filePath}`)
						continue
					}

					const fileStream = fs.createReadStream(filePath)
					const rl = readline.createInterface({
						input: fileStream,
						crlfDelay: Infinity,
					})

					for await (const line of rl) {
						try {
							const raw = JSON.parse(line) as any
							// Map to our schema
							const entry: DictionaryEntry = {
								word: raw.word,
								phonetic: raw.sounds?.[0]?.ipa,
								meanings: [
									{
										partOfSpeech: raw.pos || "unknown",
										definitions:
											raw.senses?.map((sense: any) => ({
												definition:
													sense.glosses?.[0] ||
													sense.raw_glosses?.[0] ||
													"No definition",
												example: sense.examples?.[0]?.text,
											})) || [],
									},
								],
							}
							entries.push(entry)
						} catch (e) {
							// Ignore parse errors
						}
					}
				}
				console.log(`Loaded ${entries.length} entries.`)
			}

			loadData()

			server.middlewares.use("/api/dictionary", (req, res, next) => {
				if (req.method !== "GET") {
					next()
					return
				}

				const url = new URL(req.url || "", `http://${req.headers.host}`)
				const page = parseInt(url.searchParams.get("page") || "1")
				const limit = parseInt(url.searchParams.get("limit") || "10")
				const search = url.searchParams.get("search")?.toLowerCase()

				let filtered = entries
				if (search) {
					filtered = entries.filter((e) =>
						e.word.toLowerCase().includes(search)
					)
				}

				const start = (page - 1) * limit
				const end = start + limit
				const paginated = filtered.slice(start, end)

				res.setHeader("Content-Type", "application/json")
				res.end(
					JSON.stringify({
						data: paginated,
						total: filtered.length,
						page,
						limit,
						totalPages: Math.ceil(filtered.length / limit),
					})
				)
			})
		},
	}
}
