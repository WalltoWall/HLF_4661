import React, { useState, useLayoutEffect } from 'react'
import clsx from 'clsx'
import { Box, BoxProps } from '@walltowall/calico'

import * as styleRefs from './HamburgerIcon.treat'

const Bar = (props: BoxProps) => (
  <Box
    {...props}
    styles={{
      backgroundColor: 'current',
      height: '2px',
      position: 'absolute',
      width: 'full',
      ...props.styles,
    }}
  />
)

type HamburgerButtonProps = {
  isActive: boolean
} & BoxProps

export const HamburgerIcon = ({ isActive, ...props }: HamburgerButtonProps) => {
  const [isInitial, setIsInitial] = useState(true)

  useLayoutEffect(() => {
    if (isInitial && isActive) setIsInitial(false)
  }, [isActive, isInitial])

  return (
    <Box
      {...props}
      styles={{
        width: '1.75rem',
        height: '1.25rem',
        position: 'relative',
        outline: 'none',
        ...props.styles,
      }}
    >
      <Box
        styles={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 'full',
          width: 'full',
        }}
        className={clsx({
          [styleRefs.paused]: isInitial,
          [styleRefs.topReverse]: !isActive && !isInitial,
          [styleRefs.top]: isActive,
        })}
      >
        <Bar styles={{ left: 0, top: 0 }} />
      </Box>
      <Box
        styles={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          height: 'full',
          width: 'full',
          opacity: isActive ? 0 : 100,
          transitionProperty: 'opacity',
        }}
        className={styleRefs.middle}
      >
        <Bar />
      </Box>
      <Box
        styles={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 'full',
          width: 'full',
        }}
        className={clsx({
          [styleRefs.paused]: isInitial,
          [styleRefs.bottomReverse]: !isActive && !isInitial,
          [styleRefs.bottom]: isActive,
        })}
      >
        <Bar styles={{ left: 0, bottom: 0 }} />
      </Box>
    </Box>
  )
}
