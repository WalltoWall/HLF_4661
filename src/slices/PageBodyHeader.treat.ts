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
    opacity: theme.rules.opacity[50],
  },
}))

export const shadow = style({
  boxShadow: `
    0 3px 6px rgba(0, 0, 0, 0.1),
    0 2px 2px rgba(0, 0, 0, 0.05)
  `,
})

export const transparentWhiteBackground = style({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
})

export const navFocusSensor = style({})

export const navFocusTarget = style({
  transform: 'translateY(-0.2rem)',
  transitionProperty: 'transform, opacity',
  selectors: {
    [`${navFocusSensor}:hover &`]: {
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateY(0)',
    },
    [`${navFocusSensor}:focus &`]: {
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateY(0)',
    },
  },
})
