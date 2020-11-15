import * as React from 'react'

import { HamburgerIcon } from './HamburgerIcon'

export default {
  title: 'Components/HamburgerIcon',
  component: HamburgerIcon,
}

export const Inactive = () => <HamburgerIcon isActive={false} />

export const Active = () => <HamburgerIcon isActive={true} />
