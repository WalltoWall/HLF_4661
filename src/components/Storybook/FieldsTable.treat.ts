import { style, globalStyle } from 'treat'

export const table = style({})

globalStyle(table, {
  fontFamily: 'system-ui',
  margin: '12px 0 50px',
  padding: 0,
  fontSize: '13px',
  lineHeight: '20px',
  color: '#333',
  width: '100%',
})

globalStyle(`${table} tbody`, {
  boxShadow: 'rgba(0,0,0,0.10) 0 1px 3px 1px, rgba(0,0,0,0.065) 0 0 0 1px',
  borderRadius: '4px',
  overflow: 'hidden',
})

globalStyle(`${table} tbody tr:not(:first-child)`, {
  borderTop: '1px solid #e6e6e6',
})

globalStyle(`${table} tr th`, {
  padding: '10px 15px',
  color: '#333333bf',
})

globalStyle(`${table} tr td`, {
  padding: '10px 15px',
})
