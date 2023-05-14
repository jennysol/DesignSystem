import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from '@studies-iu/tokens'

export const { 
    styled, 
    css, 
    globalCss, 
    keyframes, 
    getCssText, 
    theme, 
    createTheme, 
    config }
= createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space'
  },
  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    lineHeights: lineHeights,
    radii: radii,
    space: space
  }
})

