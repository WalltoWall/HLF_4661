import { style } from 'treat'

export const panel = style({
  all: 'initial',
  color: '#fff7',
  backgroundColor: '#000c',
  display: 'grid',
  gap: '1px',
  fontFamily: 'system-ui',
  fontSize: '10px',
  gridAutoFlow: 'column',
  alignItems: 'center',
  opacity: 0.25,
  position: 'fixed',
  right: 0,
  top: 0,
  transitionDuration: '200ms',
  transitionProperty: 'opacity',
  zIndex: 9999,
  ':hover': { opacity: 1 },
})

export const button = style({
  cursor: 'pointer',
  padding: '4px',
  backgroundColor: '#000',
  color: '#777',
  transitionDuration: '200ms',
  transitionProperty: 'color',
  ':hover': { color: '#ccc' },
  ':active': { color: '#00ca54' },
})

export const activeColor = style({
  color: '#00ca54',
  ':hover': { color: '#00ca54' },
  ':active': { color: '#00ca54' },
})

export const icon = style({
  display: 'block',
  width: '18px',
  height: '18px',
})
