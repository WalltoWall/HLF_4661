/**
 * Utility functions for easily generating consistent web typography that is
 * in-line with how design tools behave. Utilizes the `capsize` package to
 * calculate the appropriate amount of "trimming" to emulate the behavior.
 *
 * @see https://github.com/seek-oss/capsize
 */

import { Style } from 'treat'
import { Theme } from 'treat/theme'
import capsize, { FontMetrics } from 'capsize'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import * as S from 'fp-ts/Semigroup'
import { Ord, ordNumber } from 'fp-ts/Ord'
import { pipe } from 'fp-ts/function'

export const fontMetrics = {
  sans: {
    capHeight: 667,
    ascent: 917,
    descent: -285,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  serif: {
    capHeight: 700,
    ascent: 1039,
    descent: -286,
    lineGap: 0,
    unitsPerEm: 1000,
  },
} as const

type Fontset = {
  fontMetrics: FontMetrics
  fontSizes: (number | null)[]
  lineGap: number
}

const breakpointOrd: Ord<string> = {
  equals: (x, y) => x === y,
  compare: (x, y) =>
    ordNumber.compare(Number.parseFloat(x), Number.parseFloat(y)),
}

const semigroupStyle: S.Semigroup<Style> = {
  concat: (x, y) => ({
    ...x,
    ...y,
    '@media': { ...x['@media'], ...y['@media'] },
  }),
}

const responsiveStyle = (minWidth: string) => (style: Style): Style =>
  Number.parseFloat(minWidth) === 0
    ? style
    : { '@media': { [`(min-width: ${minWidth})`]: style } }

const capsizeStyle = (fontset: Fontset, baseFontSize: number) => (
  fontSize: number,
) =>
  capsize({
    fontMetrics: fontset.fontMetrics,
    fontSize: fontSize * baseFontSize,
    leading: fontSize * baseFontSize * fontset.lineGap,
  })

// TODO: Rename lineGap to lineHeight or something
// TODO: Use px values when defining fonts?
// TODO: Use full MQ string in theme? e.g. `screen and (min-width: 0rem)`
const fontsetToStyle = (theme: Theme, baseFontSize: number) => (
  fontset: Fontset,
) => {
  const bpMinWidths = pipe(
    theme.breakpoints,
    R.collect((_, minWidth) => minWidth),
    A.sort(breakpointOrd),
  )
  const bpStyles = pipe(
    fontset.fontSizes,
    A.map(O.fromNullable),
    A.map(O.map(capsizeStyle(fontset, baseFontSize))),
  )

  return pipe(
    A.zipWith(bpMinWidths, bpStyles, (bpMinWidth, bpStyle) =>
      pipe(bpStyle, O.map(responsiveStyle(bpMinWidth))),
    ),
    A.compact,
    S.fold(semigroupStyle)({}),
  )
}

export const mapFontsets = <K extends string>(
  theme: Theme,
  fontsets: Record<K, Fontset>,
  baseFontSize = 16,
) => pipe(fontsets, R.map(fontsetToStyle(theme, baseFontSize)))
