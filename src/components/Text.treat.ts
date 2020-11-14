import { styleMap } from 'treat'

import { fontMetrics, mapFontsets } from '../typography'

const fontsets = {
  'sans-16': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1],
    lineGap: 1.5,
  },
  'sans-20-48': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1.5, 2.25, 3],
    lineGap: 1.4,
  },
}

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
