import React from 'react'
import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { Box, BoxProps } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'

import { useDebug } from '../hooks/useDebug'

import * as styleRefs from './Text.treat'

const variantExtraStyles: Record<styleRefs.variations, BoxProps['styles']> = {
  sans16: {
    fontFamily: 'sans',
  },
} as const

type TextProps = {
  as?: 'p' | 'span' | 'strong' | 'em' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
  variant?: styleRefs.variations
  debug?: boolean
} & Omit<BoxProps, 'as'>

export const Text = ({
  as = 'p',
  variant = 'sans16',
  children,
  className,
  ...props
}: TextProps) => {
  const styles = useStyles(styleRefs)
  const debug = useDebug()

  return (
    <ConditionalWrap
      condition={debug}
      wrap={(children) => (
        <div style={{ boxShadow: '0 0 0 0.5px #f0f', marginBottom: 30 }}>
          {children}
        </div>
      )}
    >
      <Box
        as={as}
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

Text.variants = Object.keys(styleRefs.variants)
