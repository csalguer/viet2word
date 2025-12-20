import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { PALETTE, TYPOGRAPHY } from './design-system';

const mapToTokens = (obj: Record<string, string>) => {
  const result: Record<string, { value: string }> = {};
  for (const key in obj) {
    result[key] = { value: obj[key] };
  }
  return result;
};

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        earth: mapToTokens(PALETTE.earth),
        clay: mapToTokens(PALETTE.clay),
        ink: mapToTokens(PALETTE.ink),
      },
      fonts: {
        heading: { value: TYPOGRAPHY.serif },
        body: { value: TYPOGRAPHY.sans },
        serif: { value: TYPOGRAPHY.serif },
        editorialSerif: { value: TYPOGRAPHY.editorialSerif },
        editorialSans: { value: TYPOGRAPHY.editorialSans },
        display: { value: TYPOGRAPHY.display },
        modernDisplay: { value: TYPOGRAPHY.modernDisplay },
        modernBody: { value: TYPOGRAPHY.modernBody },
        mono: { value: TYPOGRAPHY.mono },
      },
    },
    semanticTokens: {
      colors: {
        canvas: { value: { base: 'earth.50', _dark: 'earth.900' } },
        surface: { value: { base: 'white', _dark: 'earth.800' } },
        subtle: { value: { base: 'earth.100', _dark: '#2F2B28' } },
        border: { value: { base: 'earth.200', _dark: 'earth.700' } },
        fg: {
          DEFAULT: { value: { base: 'earth.900', _dark: 'earth.100' } },
          muted: { value: { base: 'earth.600', _dark: 'earth.400' } },
          inverse: { value: { base: 'earth.50', _dark: 'earth.900' } },
        },
        accent: {
          DEFAULT: { value: { base: 'clay.500', _dark: 'clay.400' } },
          fg: { value: { base: 'ink.blue', _dark: 'ink.light' } },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
export default system
