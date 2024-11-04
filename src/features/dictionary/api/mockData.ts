import { useCallback, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Group } from "@mantine/core"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { ReactElement } from "react"

// {
// 	word: "大学",
// 	meanings: [
// 		{
// 			partOfSpeech: "noun",
// 			definitions: [
// 				{
// 					definition: "a university, college, or institution",
// 					example: "University",
// 				},
// 			],
// 		},
// 	],
// },

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
