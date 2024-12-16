import { motion } from "framer-motion"
import { nanoid } from "nanoid"

const spring = {
	type: "spring",
	stiffness: 600,
	damping: 60,
	duration: 1.2,
}

export const withFadeOut = (element) => {
	return (
		<motion.div
			key={nanoid(6)}
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
			key={nanoid(6)}
			layout
			exit={{ opacity: 1, scale: 1.2, color: "#0f015245" }}
			initial={{ opacity: 1, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ color: "#0f015235", scale: 0.8 }}
			whileTap={{ scale: 0.95, color: "#0f015235" }}
		>
			{element}
		</motion.div>
	)
}

export const withZoom = (element, scaleBy = 1) => {
	return (
		<motion.div
			key={nanoid(6)}
			layout
			exit={{ opacity: 1, scale: scaleBy * 0.2 }}
			initial={{ opacity: 1, scale: scaleBy * 0.9 }}
			animate={{ opacity: 1, scale: scaleBy * 1.1 }}
			transition={{ ...spring, duration: 2.2, ease: "linear" }}
			whileHover={{ scale: scaleBy * 0.95 }}
			whileTap={{ scale: scaleBy * 0.85 }}
		>
			{element}
		</motion.div>
	)
}
