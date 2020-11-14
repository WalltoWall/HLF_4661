import React from 'react'
import faker from 'faker'

import { titleize } from '../utils'

import { Anchor } from './Anchor'
import { Text } from './Text'

export default {
  title: 'Design System/Anchor',
  component: Anchor,
}

export const Default = () => (
  <Text>
    <Anchor href="#">{titleize(faker.lorem.words(4))}</Anchor>
  </Text>
)
