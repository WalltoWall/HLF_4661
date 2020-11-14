import React from 'react'

import { Placeholder } from './Placeholder'

export default {
  title: 'Components/Placeholder',
  component: Placeholder,
}

export const Default = () => <Placeholder />

export const WithStyleAttribute = () => (
  <Placeholder style={{ width: '20rem', height: '15rem' }} />
)
