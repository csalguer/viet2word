// This file serves as the source of truth for design tokens.
// It follows a Chakra UI-like structure with primitive colors and semantic tokens.

export const PALETTE = {
  earth: {
    50: '#FAF9F7',  // Warmer Paper
    100: '#F2EFE9', // Cream
    200: '#E6E0D4', // Bone
    300: '#D1C7B7', // Stone
    400: '#B5A696', // Taupe
    500: '#8C7B70', // Beaver
    600: '#6B5D54', // Walnut
    700: '#4A403A', // Umber
    800: '#262320', // Charcoal - Softened for dark mode surface
    900: '#181614', // Obsidian - Softened for dark mode bg
    950: '#0F0E0D', // Void
  },
  clay: {
    400: '#C76B4F', // Rust Light
    500: '#A64B2A', // Rust
    600: '#8A3B1E',
  },
  ink: {
    blue: '#004481', // RAE Blue
    light: '#6FA4D9', // Soft Blue for Dark Mode
  }
};

export const TYPOGRAPHY = {
  sans: 'Inter, sans-serif',
  serif: 'EB Garamond, serif',
  editorialSerif: 'Lora, serif',
  editorialSans: 'PT Sans, sans-serif',
  display: 'Playfair Display, serif',
  modernDisplay: 'DM Serif Display, serif',
  modernBody: 'Lora, serif',
  mono: 'Fira Code, monospace',
};

// Semantic tokens abstraction for easy porting to Chakra UI
export const SEMANTIC_TOKENS = {
  colors: {
    'canvas': { default: 'earth.50', _dark: 'earth.900' },
    'surface': { default: '#FFFFFF', _dark: 'earth.800' },
    'subtle': { default: 'earth.100', _dark: '#2F2B28' },
    'border': { default: 'earth.200', _dark: 'earth.700' },
    'fg': {
      default: { default: 'earth.900', _dark: 'earth.100' },
      muted: { default: 'earth.600', _dark: 'earth.400' },
      inverse: { default: 'earth.50', _dark: 'earth.900' },
    },
    'accent': {
      default: { default: 'clay.500', _dark: 'clay.400' },
      fg: { default: 'ink.blue', _dark: 'ink.light' }
    }
  }
};

export const THEMES = {
  light: {
    background: PALETTE.earth[50],
    text: PALETTE.earth[800],
    surface: PALETTE.earth[100],
    border: PALETTE.earth[200],
  },
  dark: {
    background: PALETTE.earth[900],
    text: PALETTE.earth[100],
    surface: PALETTE.earth[800],
    border: PALETTE.earth[700],
  }
};
