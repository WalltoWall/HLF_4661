import React from 'react'
import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { Box, BoxProps } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'

import * as styleRefs from './Text.treat'

const variantExtraStyles: Record<styleRefs.variations, BoxProps['styles']> = {
  sans16: {
    fontFamily: 'sans',
  },
} as const

type TextProps = Omit<BoxProps, 'component'> & {
  component?: 'p' | 'span' | 'strong' | 'em' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
  variant?: styleRefs.variations
  debug?: boolean
}

export const Text = ({
  component = 'p',
  variant = 'sans16',
  children,
  className,
  debug = false,
  ...props
}: TextProps) => {
  const styles = useStyles(styleRefs)

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
        component={component}
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
