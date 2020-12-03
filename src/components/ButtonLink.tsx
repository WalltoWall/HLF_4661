import * as React from 'react'
import {
  useBoxStyles,
  UseBoxStylesProps,
  UsePseudoBoxStylesProps,
  usePseudoBoxStyles,
} from '@walltowall/calico'
import clsx from 'clsx'

import { Link, LinkProps } from './Link'
import { Text } from './Text'

type ButtonLinkProps = LinkProps & {
  styles?: UseBoxStylesProps
  focusStyles?: UsePseudoBoxStylesProps<':focus'>
  hoverStyles?: UsePseudoBoxStylesProps<':hover'>
}

export const ButtonLink = ({
  children,
  styles,
  focusStyles,
  hoverStyles,
  className,
  ...props
}: ButtonLinkProps) => {
  const cx = clsx(
    useBoxStyles({
      color: 'white',
      backgroundColor: 'blue10',
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 2.5,
      paddingTop: 2.5,
      transitionProperty: 'backgroundColor',
      transitionDuration: 'normal',
      transitionTimingFunction: 'easeOut',
      ...styles,
    }),
    usePseudoBoxStyles(
      { backgroundColor: 'orange50', ...focusStyles },
      ':focus',
    ),
    usePseudoBoxStyles(
      { backgroundColor: 'orange50', ...hoverStyles },
      ':hover',
    ),
    className,
  )

  return (
    <Link {...props} className={cx}>
      <Text variant="sans-13-14-bold-caps">{children}</Text>
    </Link>
  )
}
