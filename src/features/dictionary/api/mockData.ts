import { useCallback, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Group } from "@mantine/core"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { ReactElement } from "react"

export const MOCK_CARD_INFO = {
	data: [
		{
			word: "vẹt đuôi dài",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "a macaw",
							example: "The macaw flew and landed on the ground",
						},
					],
				},
				{
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

// Finish stub for query api start
const fetchMockData: Promise<MockDataType> = async () => {
	return Promise.resolve(MOCK_DATA)
}

const mockDataGet = (): MockDataType => {
	return useMockData()
}
// const fetchMockData = (): MockDataType => { }

export const useMockData = () => {
	return useQuery<MockDataType>("mockData", fetchMockData)
}
