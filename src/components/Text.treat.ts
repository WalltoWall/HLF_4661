import { styleMap } from 'treat'

import { fontMetrics, mapFontsets } from '../typography'

const fontsets = {
  'sans-12': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [0.75],
    lineGap: 1.2,
  },
  'sans-13-14': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [0.8125, 0.8125, 0.875],
    lineGap: 1.2,
  },
  'sans-16': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1],
    lineGap: 1.2,
  },
}

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
