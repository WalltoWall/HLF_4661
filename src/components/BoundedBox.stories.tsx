import React from 'react'

import { BoundedBox } from './BoundedBox'
import { Placeholder } from './Placeholder'

export default {
  title: 'Components/BoundedView',
  component: BoundedBox,
}

export const Default = () => (
  <BoundedBox>
    <Placeholder style={{ height: '10rem' }} />
  </BoundedBox>
)

export const Base = () => (
  <BoundedBox variant="base">
    <Placeholder style={{ height: '10rem' }} />
  </BoundedBox>
)
