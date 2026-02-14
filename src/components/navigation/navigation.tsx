import { ReactNode } from "react"
import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { NavBar } from "./NavBar"
import { NightModeSwitch } from "../layout/night-mode-switch/NightModeSwitch"
import { useColorMode } from "@/components/ui/color-mode"

export interface NavigationProps {
	children: ReactNode
}

export function Navigation({ children }: NavigationProps) {
	const { colorMode } = useColorMode()

	return (
		<Box w="100%" h="100vh" display="flex" flexDirection="column">
			{/* Navbar Header */}
			<Box
				as="header"
				w="100%"
				bg="surface"
				borderBottom="1px solid"
				borderColor="border"
				position="sticky"
				top={0}
				zIndex={100}
				px={{ base: 4, md: 8 }}
				py={4}
			>
				<HStack justify="space-between" align="center">
					{/* Logo Area */}
					<HStack gap={8}>
						<Text
							fontFamily="editorialSerif"
							fontSize="2xl"
							fontWeight="black"
							letterSpacing="tighter"
							color="accent.fg"
						>
							từ điển
						</Text>
						<NavBar />
					</HStack>

					{/* Right Actions */}
					<HStack gap={4}>
						<NightModeSwitch darkMode={colorMode === "dark"} />
					</HStack>
				</HStack>
			</Box>

			{/* Main Content Area */}
			<Box
				as="main"
				flex="1"
				bg="canvas"
				overflowY="auto"
			>
				{children}
			</Box>
		</Box>
	)
}

export default Navigation
