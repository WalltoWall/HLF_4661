import { style } from 'treat'

export const lightGrayGradientBackground = style((theme) =>
  theme.mq({
    backgroundImage: [
      `linear-gradient(to bottom, ${theme.rules.color.white}, ${theme.rules.color.gray95})`,
      `linear-gradient(to right, ${theme.rules.color.white}, ${theme.rules.color.gray95})`,
    ],
  }),
)

export const darkGrayGradientBackground = style((theme) =>
  theme.mq({
    backgroundImage: [
      `linear-gradient(to bottom, ${theme.rules.color.gray10}, ${theme.rules.color.gray20})`,
      `linear-gradient(to right, ${theme.rules.color.gray10}, ${theme.rules.color.gray20})`,
    ],
  }),
)

export const transparentBlackGradientBackground = style({
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))`,
})

export const dquotSurround = style({
  position: 'relative',
  '::before': {
    display: 'inline-block',
    content: '"\\201C"',
    position: 'absolute',
    left: 0,
    top: 0,
    transform: 'translate(-110%, 10%)',
  },
  '::after': {
    display: 'inline-block',
    content: '"\\201D"',
  },
})

export const textShadow = style({
  textShadow: `
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 1px 1px rgba(0, 0, 0, 0.1)
  `,
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
