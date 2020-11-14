import { styleMap } from 'treat'

import { fontMetrics, mapFontsets } from '../typography'

const fontsets = {
  sans16: {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1],
    lineGap: 1.5,
  },
}

export type variations = keyof typeof fontsets

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
