import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

export type PlaceholderProps = {
  height?: string | number
  width?: string | number
} & BoxProps

export const Placeholder = ({
  height = 150,
  width = 'auto',
  ...props
}: PlaceholderProps) => {
  return (
    <Box
      {...props}
      style={{
        width,
        height,
        backgroundColor: 'hsl(0, 0%, 37%)',
        border: `2px solid hsla(0, 0%, 100%, 0.4)`,
        ...props.style,
      }}
      styles={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.styles,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <line
          x1={0}
          y1={0}
          x2="100%"
          y2="100%"
          style={{ stroke: 'hsla(0, 0%, 100%, 0.4)', strokeWidth: '2px' }}
        />
        <line
          x1="100%"
          y1={0}
          x2={0}
          y2="100%"
          style={{ stroke: 'hsla(0, 0%, 100%, 0.4)', strokeWidth: '2px' }}
        />
      </svg>
    </Box>
  )
}
