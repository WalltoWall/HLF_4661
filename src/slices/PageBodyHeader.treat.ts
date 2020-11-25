import { style } from 'treat'

export const flipH = style({
  transform: 'scaleY(-1)',
})

export const verticallyCenter = style({
  top: '50%',
  transform: 'translateY(-55%)',
})

export const placeholderColor = style((theme) => ({
  '::placeholder': {
    color: theme.rules.color.gray40,
    opacity: '50%',
  },
}))

export const shadow = style({
  boxShadow: `
    0 3px 6px rgba(0, 0, 0, 0.25),
    0 2px 2px rgba(0, 0, 0, 0.1)
  `,
})

export const navFocusSensor = style({})

export const navFocusTarget = style({
  transform: 'translateY(-0.3rem)',
  transitionProperty: 'transform, opacity',
  ':hover': {
    opacity: 1,
    pointerEvents: 'auto',
    transform: 'translateY(0)',
  },
  ':focus-within': {
    opacity: 1,
    pointerEvents: 'auto',
    transform: 'translateY(0)',
  },
  selectors: {
    [`${navFocusSensor}:hover + &`]: {
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateY(0)',
    },
    [`${navFocusSensor}:focus + &`]: {
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateY(0)',
    },
  },
})
