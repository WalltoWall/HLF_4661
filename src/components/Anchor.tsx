import React from 'react'
import clsx from 'clsx'
import { useBoxStyles, usePseudoBoxStyles } from '@walltowall/calico'

import { Link, LinkProps } from './Link'

export type AnchorProps = LinkProps

export const Anchor = ({ className, ...props }: AnchorProps) => {
  const classNames = clsx(
    useBoxStyles({
      color: 'blue',
      transitionDuration: 'normal',
    }),
    usePseudoBoxStyles({ color: 'red' }, 'hover'),
    usePseudoBoxStyles({ color: 'red' }, 'focus'),
    className,
  )

  return <Link className={classNames} {...props} />
}
