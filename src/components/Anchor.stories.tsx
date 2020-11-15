import React from 'react'
import faker from 'faker'

import { titleize } from '../lib/titleize'

import { Anchor } from './Anchor'
import { Text } from './Text'

export default {
  title: 'Components/Anchor',
  component: Anchor,
}

export const Default = () => (
  <Text>
    <Anchor href="#">{titleize(faker.lorem.words(4))}</Anchor>
  </Text>
)
