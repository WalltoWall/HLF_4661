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
	orange95: '#f5f0e8',
	aqua30: '#466260',
	aqua80: '#c9e8e5',
	aqua90: '#e2f3f6',
	transparent: 'transparent',
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
				'1.125rem': '1.125rem',
			},

			lineHeight: {
				1: '1',
			},

			maxWidth: {
				none: 'none',
				medium: '48rem',
				large: '64rem',
				xlarge: '75rem',
				'7rem': '7rem',
				'15rem': '15rem',
				'20rem': '20rem',
				'30rem': '30rem',
				'30ch': '30ch',
				'70ch': '70ch',
			},

			minWidth: {
				'14rem': '14rem',
			},

			minHeight: {
				'7rem': '7rem',
				'10rem': '10rem',
				'18rem': '18rem',
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
				'0.5rem': '0.5rem',
				'0.75rem': '0.75rem',
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
				'0.5rem': '0.5rem',
				'1rem': '1rem',
				'1.25rem': '1.25rem',
			},

			transitionProperty: {
				backgroundColor: 'background-color',
				color: 'color',
				opacity: 'opacity',
				transform: 'transform',
				colorAndBorderColor: 'color, border-color',
			},

			gridTemplateColumns: {
				'1fr auto': '1fr auto',
				'auto 1fr auto': 'auto 1fr auto',
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
				10: '2.5rem',
				13: '3.25rem',
				16: '4rem',
				'100%': '100%',
			},

			whiteSpace: {
				nowrap: 'nowrap',
			},

			verticalAlign: {
				top: 'top',
			},

			borderWidth: {
				'3px': '3px',
			},

			rowGap: {
				4: '1rem',
				8: '2rem',
				12: '3rem',
				20: '5rem',
			},

			cursor: {
				grab: 'grab',
			},

			textDecoration: {
				none: 'none',
				underline: 'underline',
			},

			borderRadius: {
				'50%': '50%',
			},

			gridColumnStart: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},

			gridColumnEnd: {
				[-1]: '-1',
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
		},

		pseudos: {
			color: [':hover', ':focus'],
			backgroundColor: [':hover', ':focus'],
			opacity: [':hover', ':focus'],
		},
	} as const),
)
