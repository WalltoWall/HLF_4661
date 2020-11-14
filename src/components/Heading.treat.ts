import { styleMap } from 'treat'
import { fontMetrics, mapFontsets } from '../typography'

const fontsets = {
  'sans-20-36-48': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1.5, 2.25, 3],
    lineGap: 1.4,
  },
}

export type variations = keyof typeof fontsets

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
