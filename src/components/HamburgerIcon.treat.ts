import { style } from 'treat'

export const top = style({
  '@keyframes': {
    '0%': {
      transform: 'translate(0%, 0%) rotate(0deg)',
    },
    '50%': {
      transform: 'translate(0%, 45%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(0%, 45%) rotate(45deg)',
    },
  },
  animationTimingFunction: 'ease-out',
  animationDuration: '.5s',
  animationFillMode: 'forwards',
  transformOrigin: 'top',
})

export const topReverse = style({
  '@keyframes': {
    '0%': {
      transform: 'translate(0%, 45%) rotate(45deg)',
    },
    '50%': {
      transform: 'translate(0%, 45%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(0%, 0%) rotate(0deg)',
    },
  },
  animationTimingFunction: 'ease-out',
  animationDuration: '.5s',
  animationFillMode: 'forwards',
  transformOrigin: 'top',
})

export const middle = style({
  transitionDelay: '.25s',
})

export const bottom = style({
  '@keyframes': {
    '0%': {
      transform: 'translate(0%, 0%) rotate(0deg)',
    },
    '50%': {
      transform: 'translate(0%, -45%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(0%, -45%) rotate(-45deg)',
    },
  },
  animationTimingFunction: 'ease-out',
  animationDuration: '.5s',
  animationFillMode: 'forwards',
  transformOrigin: 'bottom',
})

export const bottomReverse = style({
  '@keyframes': {
    '0%': {
      transform: 'translate(0%, -45%) rotate(-45deg)',
    },
    '50%': {
      transform: 'translate(0%, -45%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(0%, 0%) rotate(0deg)',
    },
  },
  animationTimingFunction: 'ease-out',
  animationDuration: '.5s',
  animationFillMode: 'forwards',
  transformOrigin: 'bottom',
})

export const paused = style({
  animationPlayState: 'paused',
})
