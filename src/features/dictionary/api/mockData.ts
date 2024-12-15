import { useCallback, useEffect, ReactElement } from "react"
import { useQuery } from "@tanstack/react-query"
import { Group } from "@mantine/core"
import { InfoCard } from "../components/VocabCard"

export const MOCK_CARD_INFO = {
	data: [
		{
			word: "vẹt đuôi dài",
			phonetic: "vɛːkᴰ² ɗuːjᴬ¹ jaːjᴬ²",
			meanings: [
				{
					partOfSpeech: "verb",
					definitions: [
						{
							definition: "a macaw",
							example: "The macaw flew and landed on the ground",
						},
					],
				},
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "金刚鹦鹉",
							example: "金刚鹦鹉落下在地上",
						},
					],
				},
			],
		},

		{
			word: "感恩",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "cảm ơn",
							example: "thanks",
						},
					],
				},
			],
		},
		{
			word: "犬",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "chó",
							example: "dog",
						},
					],
				},
			],
		},
		{
			word: "mèo",
			phonetic: "mɛːwᴬ²",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "cat",
							example: "猫",
						},
					],
				},
			],
		},
		{
			word: "công tác",
			phonetic: "kɔŋ͡mᴬ¹ taːkᴰ¹",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "工作",
							example: "homework",
						},
					],
				},
			],
		},

		{
			word: "Conch",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "Mollusk",
							example:
								"A plate is plate dem	countably plural in Patois, a famous dish of which is Conch Salad.",
						},
					],
				},
			],
		},
		{
			word: "junction",
			phonetic: "jəNG(k)SHən",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "a point where two or more things are joined",
							example: ": the junction of the two rivers.",
						},
						{
							definition:
								"Electronics a region of transition in a semiconductor between a part where conduction is mainly by electrons and a part where it is mainly by holes.",
							example: ": the junction of the two rivers.",
						},
						{
							definition: "the action or fact of joining or being joined",
							example:
								"the vena cava is formed by the junction of three veins | the junction of two roundels produces a triangular space",
						},
					],
				},
			],
		},
	],
}

export const EXTRA = {
	data: [
		{
			word: "Doohickey",
			meanings: [
				{
					partOfSpeech: "名词",
					definitions: [
						{
							definition: "General word for an item",
							example:
								"Give me that thing, that um, that , what's it called? That doohickey over there.",
						},
					],
				},
			],
		},
		{
			word: "ą́ą́ę́ę́į́į́į́ííǫ́ǫ́tłṃḗṣṭṛ",
			meanings: [
				{
					partOfSpeech: "动词",
					definitions: [
						{
							definition: "~",
							example: "Testing font coverage",
						},
						{
							definition: "~",
							// TODO: Add translation support during i18n feature work (hover + segment)
							example: "Bilasáana shaa ninííł.   |    You give me apples.",
						},
					],
				},
			],
		},
		{
			word: "भ",
			meanings: [
				{
					partOfSpeech: "TEST",
					definitions: [
						{
							definition: "TESTING FONT COVERAGE",
							example: "",
						},
					],
				},
			],
		},
		{
			word: "          ",
			meanings: [
				{
					partOfSpeech: "Sustantivo",
					definitions: [
						{
							definition: "",
							example: "",
						},
					],
				},
			],
		},
	],
}

export const DATA = MOCK_CARD_INFO.data.concat(EXTRA.data)

type Meaning = {
	meanings: {
		partOfSpeech: string
		definitions: {
			definition: string
			example: string
		}
	}
}

interface MockInfoCardType {
	content: {
		word: string
		meanings: Meaning[]
	}[]
}
