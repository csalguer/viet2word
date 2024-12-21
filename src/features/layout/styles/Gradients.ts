// Gradients sourced from https://gradients.shecodes.io/gradients/374

import { brand_base } from "../../../styles/Palette"

import { couleurs } from "../../../styles/colors"

export const Gradients: Record<string, string> = {
	light: "radial-gradient(circle at 10% 20%, #e2f0fe 0%, #fff7e4 90%)",
	pastel:
		"linear-gradient(89.9deg, #d0f6ff 0.1%, #ffeded 47.9%, #ffffe7 100.2%)",
	beach: "radial-gradient(circle at 10% 20%, #89d2fd 0%, #fff1bc 90%)",
	night:
		"radial-gradient(circle at 10% 10%,rgb(30, 111, 112) 20%, #025f72 30%,rgb(6, 58, 79) 90%)",
	summer: "linear-gradient(69.5deg, #01b3c9 2.7%, #ffc759 97.2%)",
	forest:
		"radial-gradient(circle at 10% 10%, #90a955 20%, #4f762d 65%, #31572c 90%)",
	brand_base:
		"radial-gradient(circle at 10% 20%, #ffb556 0%, #ec6928 25%, #c73a67 65%, #9529ab 90%)",
	// Add more gradients as needed
	neutral: "linear-gradient(135deg, #bda28f, #8391a9, #58748f)",
}

export const getGrad = () => {}
