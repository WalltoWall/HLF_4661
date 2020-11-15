/**
 * Design tokens used to create atomic CSS class names. Calico is used to
 * convert these tokens into usable classes via `<Box>` and `useBoxStyles()`.
 *
 * @see https://github.com/WalltoWall/calico
 *
 * This file is used in conjunction with the following files to connect to
 * Calico.
 *
 *  - /src/theme.treat.ts
 *  - /types/calico.d.ts
 */

import {
  createCalicoTheme,
  baseCalicoTheme,
} from '@walltowall/calico/src/createCalicoTheme'

export type Theme = typeof theme

export const colors = {
  white: '#fff',
  black: '#000',
  gray10: '#222',
  gray20: '#393838',
  gray40: '#666',
  gray80: '#ccc',
  gray85: '#e2e0df',
  gray95: '#f5f5f4',
  blue10: '#002244',
  orange50: '#f5782e',
  orange55: '#ff9902',
  current: 'currentColor',
} as const

const space = {
  auto: 'auto',
  [-30]: '-7.5rem',
  [-29]: '-7.25rem',
  [-28]: '-7rem',
  [-27]: '-6.75rem',
  [-26]: '-6.5rem',
  [-25]: '-6.25rem',
  [-24]: '-6rem',
  [-23]: '-5.75rem',
  [-22]: '-5.5rem',
  [-21]: '-5.25rem',
  [-20]: '-5rem',
  [-19]: '-4.75rem',
  [-18]: '-4.5rem',
  [-17]: '-4.25rem',
  [-16]: '-4rem',
  [-15]: '-3.75rem',
  [-14]: '-3.5rem',
  [-13]: '-3.25rem',
  [-12]: '-3rem',
  [-11]: '-2.75rem',
  [-10]: '-2.5rem',
  [-9]: '-2.25rem',
  [-8]: '-2rem',
  [-7]: '-1.75rem',
  [-6]: '-1.5rem',
  [-5]: '-1.25rem',
  [-4]: '-1rem',
  [-3.5]: '-0.875rem',
  [-3]: '-0.75rem',
  [-2.5]: '-0.625rem',
  [-2]: '-0.5rem',
  [-1.5]: '-0.375rem',
  [-1]: '-0.25rem',
  [-0.5]: '-0.125rem',
  0: 0,
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  19: '4.75rem',
  20: '5rem',
  21: '5.25rem',
  22: '5.5rem',
  23: '5.75rem',
  24: '6rem',
  25: '6.25rem',
  26: '6.5rem',
  27: '6.75rem',
  28: '7rem',
  29: '7.25rem',
  30: '7.5rem',
} as const

export const theme = createCalicoTheme({
  breakpoints: {
    mobile: '0rem',
    tablet: '48rem',
    desktop: '64rem',
    desktopWide: '75rem',
  },

  rules: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,

    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    gap: space,

    fontFamily: {
      sans: 'proxima-nova, system-ui, sans-serif',
    },

    fontSize: {
      '0.875rem': '0.875rem',
      '1rem': '1rem',
    },

    lineHeight: {
      1: '1',
    },

    maxWidth: {
      medium: '48rem',
      large: '64rem',
      xlarge: '75rem',
      '15rem': '15rem',
      '20rem': '20rem',
    },

    minWidth: {
      '14rem': '14rem',
    },

    minHeight: {
      '7rem': '7rem',
      '10rem': '10rem',
    },

    transitionDuration: {
      slow: '300ms',
      normal: '200ms',
      fast: '100ms',
    },

    letterSpacing: {
      ...baseCalicoTheme.rules.letterSpacing,
      xs: '0.025em',
      s: '0.05em',
      m: '0.1em',
      l: '0.2em',
    },

    width: {
      ...baseCalicoTheme.rules.width,
      '1rem': '1rem',
      '1.25rem': '1.25rem',
      '1.75rem': '1.75rem',
      '10rem': '10rem',
    },

    height: {
      ...baseCalicoTheme.rules.height,
      '0.125rem': '0.125rem',
      '0.375rem': '0.375rem',
      '1rem': '1rem',
      '1.25rem': '1.25rem',
    },

    transitionProperty: {
      color: 'color',
      opacity: 'opacity',
      transform: 'transform',
    },

    gridTemplateColumns: {
      ...baseCalicoTheme.rules.gridTemplateColumns,
      '1fr auto': '1fr auto',
    },

    borderTopWidth: {
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
    },

    borderBottomWidth: {
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
    },

    top: {
      ...baseCalicoTheme.rules.top,
      '100%': '100%',
    },

    whiteSpace: {
      nowrap: 'nowrap',
    },
  },

  variants: {
    opacity: {
      hover: true,
    },
  },
})
