import { style } from 'treat'

export const container = style({
  display: 'flex',
  fontFamily: 'system-ui',
  alignItems: 'start',
  color: '#333',
  paddingTop: '2rem',
  paddingBottom: '2rem',
})

export const aside = style({
  display: 'grid',
  gap: '1px',
  color: '#949698',
  textAlign: 'right',
  marginRight: '3.75rem',
  transform: 'translateY(-9px)',
})

export const colorHeading = style({
  textTransform: 'capitalize',
})

export const lineGrid = style({
  display: 'grid',
  gap: '1px',
  position: 'relative',
  backgroundColor: '#d8d8d8',
  border: '1px solid #d8d8d8',
  width: 'min-content',
})

export const gridCell = style({
  backgroundColor: 'white',
  position: 'relative',
})

export const color = style({
  position: 'absolute',
})

export const colorCircle = style({
  width: '3.5rem',
  height: '3.5rem',
  borderRadius: '50%',
})

export const popover = style({
  position: 'absolute',
  textAlign: 'center',
  left: '50%',
  transform: 'translate(-50%, 15%)',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  padding: '.65rem 1.5rem',
  background: 'white',
  borderRadius: '6px',
  transition: 'opacity .15s ease-out',
})

export const popoverName = style({
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  fontWeight: 700,
  fontSize: '.9375rem',
  lineHeight: 1,
})

export const popoverValue = style({
  color: '#949698',
  textTransform: 'uppercase',
  fontSize: '.875rem',
  marginTop: '.35rem',
  lineHeight: 1,
})
