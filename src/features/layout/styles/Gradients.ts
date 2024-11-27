// Gradients sourced from https://gradients.shecodes.io/gradients/374

import { brand_base } from "../../../styles/Palette"

export const Gradients: Record<string, string> = {
	light:
		"radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
	pastel:
		" linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)",
	beach:
		" radial-gradient(circle at 10% 20%, rgb(137, 210, 253) 0%, rgb(255, 241, 188) 90%)",
	night:
		"radial-gradient(circle at 10% 10%,  #069396 20%, #025f72 30%, #001219 90%)",
	summer:
		" linear-gradient(69.5deg, rgb(1, 179, 201) 2.7%, rgb(255, 199, 89) 97.2%)",
	forest:
		"radial-gradient(circle at 10% 10%, #90a955 20%, #4f762d 65%, #31572c 90%)",
	brand_base:
		" radial-gradient(circle at 10% 20%, #FFB556 0%, #EC6928 25%, #C73A67 65%, #9529AB 90%)",
	// Add more gradients as needed
	neutral: " linear-gradient(135deg,#bda28f, #8391A9, #58748f)",
}

export const getGrad = () => {}
