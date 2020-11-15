import * as React from 'react'
import { useStyles } from 'react-treat'
import { Box, BoxProps } from '@walltowall/calico'
import clsx from 'clsx'

import * as styleRefs from './Logo.treat'

import { ReactComponent as AssetLogoSVG } from '../assets/logo.svg'

const defaultElement = 'div'

type LogoProps<E extends React.ElementType> = {
  trimNegativeSpace?: boolean
} & BoxProps<E>

export const Logo = <E extends React.ElementType = typeof defaultElement>({
  trimNegativeSpace = false,
  className,
  ...props
}: LogoProps<E>) => {
  const styles = useStyles(styleRefs)
  const classNames = clsx(
    trimNegativeSpace && styles.trimNegativeSpace,
    className,
  )

  return (
    <Box as={defaultElement} {...props} className={classNames}>
      <Box as={AssetLogoSVG} styles={{ display: 'block' }} />
    </Box>
  )
}
