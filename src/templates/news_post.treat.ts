import { style } from 'treat'

export const lightGrayGradientBackground = style((theme) => ({
  backgroundImage: `linear-gradient(to right, ${theme.rules.color.white}, ${theme.rules.color.gray95})`,
}))
