import React from 'react'
import { useStyles } from 'react-treat'
import { Box, BoxProps } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/function'
import clsx from 'clsx'

import { useDebug } from '../hooks/useDebug'

import * as styleRefs from './Text.treat'

const defaultElement = 'div'

const variants = {
  'sans-16': {
    fontFamily: 'sans',
  },
  'sans-20-48': {
    fontFamily: 'sans',
  },
} as const

const styledVariants = {
  'sans-caps-16': {
    variant: 'sans-16',
    styles: {
      textTransform: 'uppercase',
      letterSpacing: 'm',
    },
  },
  'sans-bold-20-48': {
    variant: 'sans-20-48',
    styles: {
      fontWeight: 'bold',
    },
  },
} as const

const normalizedVariants = {
  ...pipe(
    variants,
    R.mapWithIndex((variant, styles) => ({ variant, styles })),
  ),
  ...pipe(
    styledVariants,
    R.map((variant) => ({
      ...variant,
      styles: {
        ...variants[variant.variant],
        ...variant.styles,
      },
    })),
  ),
}

type TextProps<E extends React.ElementType = typeof defaultElement> = {
  variant?: keyof typeof normalizedVariants
} & BoxProps<E>

export const Text = <E extends React.ElementType>({
  variant: variantName = 'sans-16',
  className,
  ...props
}: TextProps<E>) => {
  const styles = useStyles(styleRefs)
  const variant = normalizedVariants[variantName]
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
        as={defaultElement}
        className={clsx(styles.variants[variant.variant], className)}
        {...props}
        styles={{
          ...variant.styles,
          ...props.styles,
        }}
      />
    </ConditionalWrap>
  )
}

Text.variants = Object.keys(normalizedVariants)
