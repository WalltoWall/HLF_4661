import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

const defaultElement = 'div'

const variants = {
  div: { as: 'div', childAs: 'div' },
  ul: { as: 'ul', childAs: 'li' },
  ol: { as: 'ol', childAs: 'li' },
} as const

type InlineProps<E extends React.ElementType> = {
  variant?: keyof typeof variants
  space: NonNullable<NonNullable<BoxProps['styles']>['padding']>
  spaceY?: NonNullable<NonNullable<BoxProps['styles']>['padding']>
  align?: NonNullable<BoxProps['styles']>['justifyContent']
  alignY?: NonNullable<BoxProps['styles']>['alignItems']
  wrap?: boolean
} & Omit<BoxProps<E>, 'wrap'> & { as?: BoxProps<E>['as'] }

export const Inline = <E extends React.ElementType = typeof defaultElement>({
  children,
  variant = 'div',
  space,
  spaceY = space,
  align,
  alignY,
  wrap = true,
  ...props
}: InlineProps<E>) => {
  const negativeSpace = (Array.isArray(space)
    ? space.map((val) => -val)
    : -space) as typeof space

  const negativeSpaceY = (Array.isArray(spaceY)
    ? spaceY.map((val) => -val)
    : -spaceY) as typeof space

  const { childAs, as } = variants[variant]

  return (
    <Box
      as={defaultElement}
      {...props}
      styles={{
        marginTop: negativeSpaceY,
        ...props.styles,
      }}
    >
      <Box
        as={as}
        styles={{
          display: 'flex',
          flexWrap: wrap ? 'wrap' : 'nowrap',
          justifyContent: align,
          alignItems: alignY,
          marginLeft: negativeSpace,
        }}
      >
        {React.Children.map(
          children,
          (child) =>
            child && (
              <Box
                as={childAs}
                styles={{ paddingTop: spaceY, paddingLeft: space }}
              >
                {child}
              </Box>
            ),
        )}
      </Box>
    </Box>
  )
}
