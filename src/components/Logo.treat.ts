import { style } from 'treat'

export const trimNegativeSpace = style({
  padding: '0.05px 0',
  '::before': {
    content: "''",
    display: 'block',
    marginTop: `${(-15 / 383) * 100}%`,
    height: 0,
  },
  '::after': {
    content: "''",
    display: 'block',
    marginBottom: `${(-5 / 383) * 100}%`,
    height: 0,
  },
})
