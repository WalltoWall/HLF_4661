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
  mergeCalicoTokens,
  sensibleTokens,
  grid12ColumnTokens,
  spaceQuarterRemTokens,
} from '@walltowall/calico/treat'

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
  orange55: '#ff9900',
  current: 'currentColor',
} as const

export const theme = createCalicoTheme(
  mergeCalicoTokens(sensibleTokens, spaceQuarterRemTokens, grid12ColumnTokens, {
    breakpoints: {
      _: '0',
      tablet: '40rem',
      desktop: '64rem',
      desktopWide: '75rem',
    },

    rules: {
      color: colors,
      backgroundColor: colors,
      borderColor: colors,

      fontFamily: {
        sans: 'proxima-nova, system-ui, sans-serif',
        serif: '"PT Serif", Georgia, serif',
      },

      fontSize: {
        '0.875rem': '0.875rem',
        '1rem': '1rem',
      },

      lineHeight: {
        1: '1',
      },

      maxWidth: {
        none: 'none',
        medium: '48rem',
        large: '64rem',
        xlarge: '75rem',
        '15rem': '15rem',
        '20rem': '20rem',
        '30ch': '30ch',
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
        xs: '0.025em',
        s: '0.05em',
        m: '0.1em',
        l: '0.2em',
      },

      width: {
        '1rem': '1rem',
        '1.25rem': '1.25rem',
        '1.5rem': '1.5rem',
        '1.75rem': '1.75rem',
        '2rem': '2rem',
        '10rem': '10rem',
      },

      height: {
        '0.125rem': '0.125rem',
        '0.375rem': '0.375rem',
        '1rem': '1rem',
        '1.25rem': '1.25rem',
      },

      transitionProperty: {
        backgroundColor: 'background-color',
        color: 'color',
        opacity: 'opacity',
        transform: 'transform',
      },

      gridTemplateColumns: {
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
        8: '2rem',
        '100%': '100%',
      },

      whiteSpace: {
        nowrap: 'nowrap',
      },

      verticalAlign: {
        top: 'top',
      },
    },

    pseudos: {
      color: [':hover', ':focus'],
      opacity: [':hover'],
    },
  } as const),
)
