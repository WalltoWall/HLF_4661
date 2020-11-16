import { style } from 'treat'
import { transparentize } from 'polished'

export const offsetIcon = style({
  transform: 'translateX(5%)',
})

export const buttonFocusSensor = style({})

export const buttonFocusTarget = style((theme) => ({
  backgroundColor: transparentize(0.1, theme.rules.backgroundColor.gray10),
  selectors: {
    [`${buttonFocusSensor}:focus &`]: {
      backgroundColor: theme.rules.backgroundColor.gray10,
    },
    [`${buttonFocusSensor}:hover &`]: {
      backgroundColor: theme.rules.backgroundColor.gray10,
    },
  },
}))
