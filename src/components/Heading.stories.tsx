import React from 'react'
import faker from 'faker'

import { titleize } from '../utils'

import { Heading } from './Heading'

export default {
  title: 'Design System/Heading',
  component: Heading,
}

const headline = titleize(faker.lorem.words(3))

export const Sans20_36_48 = () => <Heading level={1}>{headline}</Heading>
Sans20_36_48.storyName = 'Sans (20-36-48)'
