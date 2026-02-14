import React from "react"
import { Box } from "@chakra-ui/react"

interface FannedCardSetProps {
	cards: React.ReactNode[]
}

export const FannedCardSet: React.FC<FannedCardSetProps> = ({ cards }) => {
	return !cards ? null : (
		<Box
			position="relative"
			height="300px"
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			{cards.map((card, index) => (
				<Box
					key={index}
					position="absolute"
					transform={`rotate(${(index - cards.length / 2) * 5}deg) translateY(${index * 2}px)`}
					zIndex={index}
					transition="transform 0.3s ease-in-out"
					_hover={{
						transform: `rotate(${(index - cards.length / 2) * 5}deg) translateY(${index * 2 - 20}px) scale(1.05)`,
						zIndex: cards.length + 1,
					}}
					shadow="lg"
				>
					{card}
				</Box>
			))}
		</Box>
	)
}
