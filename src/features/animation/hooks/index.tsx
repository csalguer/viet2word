import { motion } from "framer-motion"

const spring = {
	type: "spring",
	stiffness: 600,
	damping: 60,
	duration: 1.2,
}

export const withFadeOut = (element) => {
	return (
		<motion.div
			layout
			exit={{ opacity: 0.0, scale: 1.2 }}
			initial={{ opacity: 1, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={spring}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{element}
		</motion.div>
	)
}
export const withGreyedSelection = (element) => {
	return (
		<motion.div
			layout
			exit={{ opacity: 1, scale: 1.2, color: "#0f015225" }}
			initial={{ opacity: 1, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={spring}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{element}
		</motion.div>
	)
}

export const withZoom = (element, scaleBy = 1) => {
	return (
		<motion.div
			layout
			exit={{ opacity: 1, scale: scaleBy * 0.2 }}
			initial={{ opacity: 1, scale: scaleBy * 0.9 }}
			animate={{ opacity: 1, scale: scaleBy * 1.1 }}
			transition={{ ...spring, duration: 2.2, ease: "linear" }}
			whileHover={{ scale: scaleBy * 0.85 }}
			whileTap={{ scale: scaleBy * 0.75 }}
		>
			{element}
		</motion.div>
	)
}
