import * as React from 'react'
import { Box } from '@walltowall/calico'

import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'

export type InteriorPageBodyDividerProps = PageTemplateEnhancerProps

export const InteriorPageBodyDivider = ({
  nextSharesBg,
  id,
}: InteriorPageBodyDividerProps) => (
  <BoundedBox
    as="section"
    variant="narrow"
    nextSharesBg={nextSharesBg}
    id={id}
    styles={{ backgroundColor: 'white' }}
  >
    <Box
      as="hr"
      styles={{
        borderWidth: 'none',
        borderTopWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray85',
      }}
    />
  </BoundedBox>
)

export const mapDataToContext = () => ({
  bg: 'white',
})

export default InteriorPageBodyDivider
