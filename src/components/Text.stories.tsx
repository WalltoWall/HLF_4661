import React from 'react'
import faker from 'faker'

import { Text } from './Text'

export default {
  title: 'Design System/Text',
  component: Text,
}

const content = faker.lorem.sentence()

export const Sans16 = () => <Text>{content}</Text>
Sans16.storyName = 'Sans (16)'
