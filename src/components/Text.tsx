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
  'sans-12': {
    fontFamily: 'sans',
  },
  'sans-13-14': {
    fontFamily: 'sans',
  },
  'sans-16': {
    fontFamily: 'sans',
  },
  'sans-16-18': {
    fontFamily: 'sans',
  },
  'sans-18': {
    fontFamily: 'sans',
  },
  'sans-32-60': {
    fontFamily: 'sans',
  },
  'serif-16-18': {
    fontFamily: 'serif',
  },
  'serif-20-24': {
    fontFamily: 'serif',
  },
  'serif-40-48': {
    fontFamily: 'serif',
  },
} as const

const styledVariants = {
  'sans-12-caps': {
    variant: 'sans-12',
    styles: {
      textTransform: 'uppercase',
      letterSpacing: 's',
    },
  },
  'sans-13-14-bold-caps': {
    variant: 'sans-13-14',
    styles: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 's',
    },
  },
  'sans-16-italic': {
    variant: 'sans-16',
    styles: {
      fontStyle: 'italic',
    },
  },
  'sans-16-caps': {
    variant: 'sans-16',
    styles: {
      textTransform: 'uppercase',
      letterSpacing: 's',
    },
  },
  'sans-18-bold-caps': {
    variant: 'sans-18',
    styles: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'm',
    },
  },
  'sans-32-60-caps': {
    variant: 'sans-32-60',
    styles: {
      textTransform: 'uppercase',
      letterSpacing: 'xs',
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
  variant: variantName = 'sans-13-14',
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
