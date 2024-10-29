// import { } from 'react'
import { useQuery } from "@tanstack/react-query"

type MockDataType = {
	data: {
		info: string[] // Figure out why this used to be in the generic in lint configuration
	}
}

// interface MockDataType extends MockDataType {}

const MOCK_DATA: MockDataType = {
	data: {
		info: [],
	},
}

// // TODO: Remove this when we have a better solution ~ persist in window tanstack example in
// window.mockDataGet = mockDataGet
// window.fetchMockData = fetchMockData

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
