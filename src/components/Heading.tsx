import React from 'react'
import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { BoxProps, Box } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'

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

export type HeadingProps = Omit<BoxProps, 'component'> & {
  level?: keyof typeof levelComponentMap
  children?: React.ReactNode
  variant?: styleRefs.variations
  debug?: boolean
}

export const Heading = ({
  children,
  level = 2,
  variant = 'sans-20-36-48',
  className,
  debug = false,
  ...props
}: HeadingProps) => {
  const styles = useStyles(styleRefs)

  return (
    <ConditionalWrap
      condition={debug}
      wrap={(children) => (
        <div style={{ boxShadow: '0 0 0 0.5px #f0f' }}>{children}</div>
      )}
    >
      <Box
        component={levelComponentMap[level]}
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
