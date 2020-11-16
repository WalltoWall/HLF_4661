import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

import { ReactComponent as AssetIconChevronDown } from '../assets/icon-chevron-down.svg'
import { ReactComponent as AssetIconChevronUp } from '../assets/icon-chevron-up.svg'
import { ReactComponent as AssetIconSearch } from '../assets/icon-search.svg'
import { ReactComponent as AssetIconPlay } from '../assets/icon-play.svg'

const icons = {
  chevronDown: AssetIconChevronDown,
  chevronUp: AssetIconChevronUp,
  search: AssetIconSearch,
  play: AssetIconPlay,
}

export type IconProps = {
  name: keyof typeof icons
} & BoxProps<'svg'>

export const Icon = ({ name, ...props }: IconProps) => {
  const icon = icons[name]

  return (
    <Box as={icon} {...props} styles={{ display: 'block', ...props.styles }} />
  )
}
