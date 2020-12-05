import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'

import { PageBodyLearningExcursionMapFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'

export type PageBodyLearningExcursionMapProps = ReturnType<
  typeof mapDataToProps
> &
  PageTemplateEnhancerProps

export const PageBodyLearningExcursionMap = ({
  mapURL,
  nextSharesBg,
  id,
}: PageBodyLearningExcursionMapProps) => (
  <BoundedBox
    as="section"
    nextSharesBg={nextSharesBg}
    id={id}
    styles={{
      backgroundColor: 'white',
      maxWidth: 'xlarge',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    {mapURL && (
      <Box
        as={AspectRatio}
        x={8}
        y={5}
        styles={{
          marginLeft: [-4, 0],
          marginRight: [-4, 0],
          borderStyle: 'solid',
          borderWidth: ['none', '3px'],
          borderColor: 'gray20',
        }}
      >
        <Box
          as="iframe"
          src={mapURL}
          styles={{ width: 'full', height: 'full' }}
        />
      </Box>
    )}
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyLearningExcursionMapFragment,
  typeof mapDataToContext
>) => ({
  mapURL: data.primary?.map_url,
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment PageBodyLearningExcursionMap on PrismicPageBodyLearningExcursionMap {
    primary {
      map_url
    }
  }
`

export default PageBodyLearningExcursionMap
