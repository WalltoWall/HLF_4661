/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { BoxProps, Box } from '@walltowall/calico'
import HTMLRenderer, { HTMLRendererProps } from 'react-html-renderer'
import clsx from 'clsx'

import { Anchor } from './Anchor'
import { Text } from './Text'
import { useUtilStyles } from '../hooks/useUtilStyles'

const defaultElement = 'div'

const baseHeadingStyles = {
  marginTop: [8, 9, 10],
  marginBottom: [7, 8],
} as const

const baseTextStyles = {
  marginBottom: [6, 7, 8],
} as const

const components: React.ComponentProps<typeof HTMLRenderer>['components'] = {
  h1: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="h3"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseHeadingStyles, ...props.styles }}
      />
    )
  },
  h2: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="h5"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseHeadingStyles, ...props.styles }}
      />
    )
  },
  h3: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="h6"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseHeadingStyles, ...props.styles }}
      />
    )
  },
  h4: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="h6"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseTextStyles, ...props.styles }}
      />
    )
  },
  h5: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="h6"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseTextStyles, ...props.styles }}
      />
    )
  },
  h6: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="h6"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseTextStyles, ...props.styles }}
      />
    )
  },
  p: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="p"
        variant="serif-16-18"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{ ...baseTextStyles, ...props.styles }}
      />
    )
  },
  ul: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Box
        as="ul"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{
          ...baseTextStyles,
          paddingLeft: [7, 8],
          listStyle: 'disc',
          ...props.styles,
        }}
      />
    )
  },
  ol: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Box
        as="ol"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{
          ...baseTextStyles,
          paddingLeft: [7, 8],
          listStyle: 'decimal',
          ...props.styles,
        }}
      />
    )
  },
  li: (props) => {
    const { firstLastNoMargin } = useUtilStyles()

    return (
      <Text
        as="li"
        {...props}
        className={clsx(firstLastNoMargin, props.className, props.class)}
        styles={{
          display: 'listItem',
          marginBottom: 4,
          ...props.styles,
        }}
      />
    )
  },
  a: ({ href, ...props }) => <Anchor href={href!} {...props} />,
  strong: (props) => (
    <Box as="strong" styles={{ fontWeight: 'semibold', ...props.styles }}>
      {props.children}
    </Box>
  ),
}

export type HTMLContentProps<E extends React.ElementType> = {
  html?: HTMLRendererProps['html']
  componentOverrides?: HTMLRendererProps['componentOverrides']
} & BoxProps<E>

export const HTMLContent = <
  E extends React.ElementType = typeof defaultElement
>({
  html,
  componentOverrides,
  ...props
}: HTMLContentProps<E>) => (
  <Box as={defaultElement} {...props}>
    <HTMLRenderer
      html={html}
      components={components}
      componentOverrides={componentOverrides}
    />
  </Box>
)
