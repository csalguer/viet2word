import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

import { extendTheme } from '@chakra-ui/react'
import * as colors from './Palette'

// import { colorsUpdated } from './ColorsUpdated'
// Keep wave form 1/2 (line or box fills...) ==> WaveSurfer () > remove canvas click disappear issue
// Separate gradient colored title ✅
// light/dark mode -> () x

// type StyleOverrideRule = Partial<StyleFunctionProps>
// const textStyleOverride: StyleOverrideRule = (props: StyleFunctionProps) => {
//   return {
//     color: mode('gray.800', 'gray.100')(props),
//   }
// }

// Custom Audio Styling -> (only playback during transcr. step)
// widget partitioning -> split out state + fun into component variants for
// styling override (check for use with chakra factory function for md, lg, xl, lg array notation support)
//

const theme = extendTheme(() => {
  return {
    components: {
      Text: {
        sizes: {
          md: {},
          lg: {},
          xl: {},
        },
        variants: {
          base: {},
          lg: {
            backgroundImage: '',
          },
        },
      },
    },
    styles: {
      global: {
        body: {},
      },
    },
    colors: { ...colors },
  }
})

export default theme
