import { style } from 'treat'

export const hideIfFirstChild = style({
  ':first-child': {
    display: 'none',
  },
})

export const hideIfLastChild = style({
  ':first-child': {
    display: 'none',
  },
})

export const firstNoMargin = style({
  ':first-child': {
    marginTop: 0,
    marginLeft: 0,
  },
})

export const lastNoMargin = style({
  ':last-child': {
    marginBottom: 0,
    marginRight: 0,
  },
})

export const firstLastNoMargin = style({
  ':first-child': {
    marginTop: 0,
    marginLeft: 0,
  },
  ':last-child': {
    marginBottom: 0,
    marginRight: 0,
  },
})

export const hideOnPrint = style({
  '@media': {
    ['print']: {
      display: 'none',
    },
  },
})
