import React from 'react'
import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { BoxProps, Box } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'

import { useDebug } from '../hooks/useDebug'

import * as styleRefs from './Heading.treat'

const levelComponentMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const

const variantExtraStyles: Record<styleRefs.variations, BoxProps['styles']> = {
  'sans-20-36-48': {
    fontFamily: 'sans',
    fontWeight: 'bold',
  },
}

export type HeadingProps = {
  level?: keyof typeof levelComponentMap
  children?: React.ReactNode
  variant?: styleRefs.variations
  debug?: boolean
} & Omit<BoxProps, 'as'>

export const Heading = ({
  children,
  level = 2,
  variant = 'sans-20-36-48',
  className,
  ...props
}: HeadingProps) => {
  const styles = useStyles(styleRefs)
  const debug = useDebug()

  return (
    <ConditionalWrap
      condition={debug}
      wrap={(children) => (
        <div style={{ boxShadow: '0 0 0 0.5px #f0f' }}>{children}</div>
      )}
    >
      <Box
        as={levelComponentMap[level]}
        className={clsx(styles.variants[variant], className)}
        {...props}
        styles={{
          ...variantExtraStyles[variant],
          ...props.styles,
        }}
      >
        {children}
      </Box>
    </ConditionalWrap>
  )
}

Heading.variants = Object.keys(styleRefs.variants)
