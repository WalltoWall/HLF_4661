import { style } from 'treat'

export const flipH = style({
  transform: 'scaleY(-1)',
})

export const verticallyCenter = style({
  top: '50%',
  transform: 'translateY(-50%)',
})

export const placeholderColor = style((theme) => ({
  '::placeholder': {
    color: theme.rules.color.gray80,
  },
}))
