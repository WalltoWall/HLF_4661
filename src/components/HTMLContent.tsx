/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { BoxProps, Box } from '@walltowall/calico'
import HTMLRenderer, { HTMLRendererProps } from 'react-html-renderer'

import { Heading, HeadingProps } from './Heading'
import { Anchor } from './Anchor'
import { Text } from './Text'
import { useUtilStyles } from '../hooks/useUtilStyles'

const baseHeadingStyles = {
  marginTop: [8, 9, 10],
  marginBottom: [7, 8],
} as const

const baseTextStyles = {
  marginBottom: [6, 7, 8],
} as const

const HTMLHeading = (props: HeadingProps) => {
  const { firstLastNoMargin } = useUtilStyles()

  return (
    <Heading
      className={firstLastNoMargin}
      {...props}
      styles={{
        ...baseHeadingStyles,
        ...props.styles,
      }}
    />
  )
}

const components: React.ComponentProps<typeof HTMLRenderer>['components'] = {
  h1: (props) => <HTMLHeading level={3} {...props} />,
  h2: (props) => <HTMLHeading level={4} {...props} />,
  h3: (props) => <HTMLHeading level={5} {...props} />,
  h4: (props) => (
    <HTMLHeading
      level={6}
      {...props}
      styles={{ ...baseTextStyles, ...props.styles }}
    />
  ),
  h5: (props) => (
    <HTMLHeading
      level={6}
      {...props}
      styles={{ ...baseTextStyles, ...props.styles }}
    />
  ),
  h6: (props) => (
    <HTMLHeading
      level={6}
      {...props}
      styles={{ ...baseTextStyles, ...props.styles }}
    />
  ),
  p: (props) => {
    const { lastNoMargin } = useUtilStyles()

    return (
      <Text
        className={lastNoMargin}
        {...props}
        styles={{ ...baseTextStyles, ...props.styles }}
      />
    )
  },
  ul: (props) => {
    const { lastNoMargin } = useUtilStyles()

    return (
      <Box
        component="ul"
        className={lastNoMargin}
        {...props}
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
    const { lastNoMargin } = useUtilStyles()

    return (
      <Box
        component="ol"
        className={lastNoMargin}
        {...props}
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
    const { lastNoMargin } = useUtilStyles()

    return (
      <Text
        component="li"
        className={lastNoMargin}
        {...props}
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
    <Box
      component="strong"
      styles={{ fontWeight: 'semibold', ...props.styles }}
    >
      {props.children}
    </Box>
  ),
}

export type HTMLContentProps = {
  html?: HTMLRendererProps['html']
  componentOverrides?: HTMLRendererProps['componentOverrides']
} & BoxProps

export const HTMLContent = ({
  html,
  componentOverrides,
  ...props
}: HTMLContentProps) => (
  <Box {...props}>
    <HTMLRenderer
      html={html}
      components={components}
      componentOverrides={componentOverrides}
    />
  </Box>
)
