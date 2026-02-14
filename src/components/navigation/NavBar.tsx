import {
	HStack,
	Box,
	IconButton,
	useDisclosure,
	VStack,
	Text,
} from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { IconMenu2 } from "@tabler/icons-react"
import {
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerRoot,
} from "@/components/ui/drawer"

const links = [
	{ to: "/", label: "HOME" },
	{ to: "/dictionary", label: "DICTIONARY" },
	{ to: "/saved", label: "SAVED" },
]

export const NavBar = () => {
	const { open, onOpen, onClose } = useDisclosure()

	return (
		<>
			{/* Desktop Navigation */}
			<HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
				{links.map((link) => (
					<Link
						key={link.to}
						to={link.to}
						style={{ textDecoration: "none" }}
						activeProps={{
							style: {
								fontWeight: "bold",
								borderBottom: "2px solid currentColor",
							},
						}}
					>
						<Text
							fontWeight="medium"
							letterSpacing="wide"
							fontSize="sm"
							color="fg"
							_hover={{ color: "accent.fg" }}
							transition="color 0.15s ease"
						>
							{link.label}
						</Text>
					</Link>
				))}
			</HStack>

			{/* Mobile Navigation */}
			<Box display={{ base: "block", md: "none" }}>
				<DrawerRoot
					open={open}
					onOpenChange={(e) => (e.open ? onOpen() : onClose())}
					placement="start"
				>
					<DrawerBackdrop />
					<IconButton
						aria-label="Open menu"
						variant="ghost"
						color="fg"
						onClick={onOpen}
					>
						<IconMenu2 />
					</IconButton>
					<DrawerContent bg="surface">
						<DrawerCloseTrigger />
						<DrawerBody pt={10}>
							<VStack align="start" gap={6}>
								{links.map((link) => (
									<Link
										key={link.to}
										to={link.to}
										onClick={onClose}
										activeProps={{
											style: {
												fontWeight: "bold",
											},
										}}
									>
										<Text
											fontSize="xl"
											fontWeight="medium"
											color="fg"
											_hover={{ color: "accent.fg" }}
										>
											{link.label}
										</Text>
									</Link>
								))}
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</DrawerRoot>
			</Box>
		</>
	)
}
