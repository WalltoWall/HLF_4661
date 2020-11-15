import { styleMap } from 'treat'

import { fontMetrics, mapFontsets } from '../typography'

const fontsets = {
  'sans-14': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [0.875],
    lineGap: 1.5,
  },
  'sans-16': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1],
    lineGap: 1.5,
  },
}

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
