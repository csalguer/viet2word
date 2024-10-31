import { useCallback, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Group } from "@mantine/core"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { ReactElement } from "react"

export const MOCK_CARD_INFO = {
	data: [
		{
			word: "大学",
			meanings: [
				{
					partOfSpeech: "noun",
					definitions: [
						{
							definition: "a university, college, or institution",
							example: "University",
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

// 	const createElement = useCallback(() => {
// 		// for (let i = 0; i < data.length; i++) {
// 		// 	const { word, meanings } = data[i]
//     //     cardElements.push({})
//     // }
// 		// return cardElements
// }, [])
// data.forEach( item => createElement(item))
// {[...]}
// const createCard = ({word, meanings}):ReactElement => {
// }
// content.forEach((item, index, arr) => {
// 	createCard(item)
// })
// const cardElements = useCallback((item) => {
// 	}, [content])

export const MockInfoCards = (content: MockInfoCardType): ReactElement => {
	// const cards = []
	// for (let i = 0; i < data.length; i++) {
	// 	const {word, meanings} = data[i] as MockInfoCardType
	// 	if(!!card){
	// 		cards.push(cardElement)
	// 	}
	// }
	// const cardElement = (<InfoCard word={card.word} meanings={card.meanings} />)
	// content.data.map((item, index) => {
	// const cards = content.data.map((item) =>{
	// 		const {word, meanings} = item
	// 		return (
	// 			<InfoCard word={word} meanings={meanings} />
	// 		)
	// 	})
	// }
	const content = MOCK_CARD_INFO
	const {word, meanings} = content[0]
	return (
		<Group>
			// {content.map((item) => {
			// 		const { word, meanings } = item
			// 		if (!word) {
			// 	      console.error(`No word found at index ${index} in data:`, item)
			// 	      return null
			// 	    }
				
			// 		  return (
			// 					<Group>
			// 					</Group>
			// 		    )
			// 			})}
			 	<InfoCard word={word} meanings={meanings} />
			</Group>
				)
	
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
