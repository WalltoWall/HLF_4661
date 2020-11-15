import React from 'react'
import {
  useBoxStyles,
  BaseBoxStylesProps,
  BoxFocusProp,
  BoxHoverProp,
  usePseudoBoxStyles,
} from '@walltowall/calico'
import clsx from 'clsx'

import { Link, LinkProps } from './Link'

export type AnchorProps = LinkProps & {
  styles?: BaseBoxStylesProps
  focusStyles?: BoxFocusProp
  hoverStyles?: BoxHoverProp
}

export const Anchor = ({
  styles,
  focusStyles,
  hoverStyles,
  className,
  ...props
}: AnchorProps) => {
  const cx = clsx(
    useBoxStyles({
      color: 'orange55',
      transitionProperty: 'color',
      transitionDuration: 'fast',
      ...styles,
    }),
    usePseudoBoxStyles({ color: 'orange50', ...focusStyles }, 'focus'),
    usePseudoBoxStyles({ color: 'orange50', ...hoverStyles }, 'hover'),
    className,
  )

  return <Link {...props} className={cx} />
}
