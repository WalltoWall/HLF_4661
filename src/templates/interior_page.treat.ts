import { style } from 'treat'

export const lightGrayGradientBackground = style((theme) =>
  theme.mq({
    backgroundImage: [
      `linear-gradient(to bottom, ${theme.rules.color.white}, ${theme.rules.color.gray95})`,
      `linear-gradient(to right, ${theme.rules.color.white}, ${theme.rules.color.gray95})`,
    ],
  }),
)
