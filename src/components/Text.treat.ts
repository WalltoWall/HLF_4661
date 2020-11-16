import { styleMap } from 'treat'

import { fontMetrics, mapFontsets } from '../typography'

const fontsets = {
  'sans-12': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [0.75],
    lineGap: 1.3,
  },
  'sans-13-14': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [0.8125, 0.8125, 0.875],
    lineGap: 1.3,
  },
  'sans-16': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1],
    lineGap: 1.3,
  },
  'sans-18': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [1.125],
    lineGap: 1.3,
  },
  'sans-32-60': {
    fontMetrics: fontMetrics.sans,
    fontSizes: [2, 2.75, 3.75],
    lineGap: 1.2,
  },
  'serif-16-18': {
    fontMetrics: fontMetrics.serif,
    fontSizes: [1, 1.125],
    lineGap: 1.45,
  },
  'serif-20-24': {
    fontMetrics: fontMetrics.serif,
    fontSizes: [1.25, 1.5],
    lineGap: 1.35,
  },
  'serif-40-48': {
    fontMetrics: fontMetrics.serif,
    fontSizes: [2.5, 3],
    lineGap: 1.15,
  },
}

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
