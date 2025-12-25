import { Link } from "@tanstack/react-router"
import {
	HStack,
	Box,
	IconButton,
	useDisclosure,
	VStack,
} from "@chakra-ui/react"
import { IconMenu2 } from "@tabler/icons-react"
import {
	DrawerRoot,
	DrawerBackdrop,
	DrawerContent,
	DrawerCloseTrigger,
	DrawerBody,
} from "@/components/ui/drawer"

const links = [
	{ to: "/home", label: "HOME" },
	{ to: "/reader", label: "READER" },
	{ to: "/dictionary", label: "DICTIONARY" },
]

export const NavBar = () => {
	const { open, onOpen, onClose } = useDisclosure()

	return (
		<>
			{/* Desktop Navigation */}
			<HStack as="nav" gap={4} display={{ base: "none", sm: "flex" }}>
				{links.map((link) => (
					<Link
						key={link.label}
						to={link.to}
						style={{
							textDecoration: "none",
							fontWeight: 500,
							padding: "8px 12px",
						}}
						activeProps={{
							style: { fontWeight: "bold", textDecoration: "underline" },
						}}
					>
						{link.label}
					</Link>
				))}
			</HStack>

			{/* Mobile Navigation */}
			<Box display={{ base: "block", sm: "none" }}>
				<IconButton aria-label="Open menu" variant="ghost" onClick={onOpen}>
					<IconMenu2 />
				</IconButton>
				<DrawerRoot
					open={open}
					onOpenChange={(e) => (e.open ? onOpen() : onClose())}
					placement="start"
				>
					<DrawerBackdrop />
					<DrawerContent>
						<DrawerCloseTrigger />
						<DrawerBody pt={10}>
							<VStack align="start" gap={4}>
								{links.map((link) => (
									<Link
										key={link.label}
										to={link.to}
										onClick={onClose}
										style={{
											fontSize: "1.2rem",
											fontWeight: 500,
										}}
										activeProps={{
											style: { fontWeight: "bold" },
										}}
									>
										{link.label}
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
