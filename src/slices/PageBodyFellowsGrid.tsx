import * as React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'

import { PageTemplateEnhancerProps } from '../templates/page'
import { useFellows } from '../hooks/useFellows'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { AspectRatio } from '@walltowall/siamese'

type FellowProps = {
  name?: string
  cohortTitle?: string
  biographyHTML?: string
  portraitFluid?: FluidObject
  portraitAlt?: string
  photoFluid?: FluidObject
  photoAlt?: string
}

const Fellow = ({
  name,
  cohortTitle,
  biographyHTML,
  portraitFluid,
  portraitAlt,
  photoFluid,
  photoAlt,
}: FellowProps) => (
  <Box
    as="li"
    styles={{
      backgroundColor: 'white',
      padding: 3,
      paddingBottom: 5,
    }}
  >
    <Box
      as={AspectRatio}
      x={190}
      y={230}
      styles={{ backgroundColor: 'gray95', marginBottom: 3.5 }}
    >
      {portraitFluid && (
        <Box
          as={GatsbyImage}
          fluid={portraitFluid}
          alt={portraitAlt ?? name ? `Photo of ${name}` : undefined}
          styles={{ height: 'full', width: 'full' }}
        />
      )}
    </Box>
    <Box styles={{ display: 'grid', gap: 2 }}>
      {name && (
        <Text
          variant="sans-12-caps"
          styles={{ color: 'gray10', fontWeight: 'bold' }}
        >
          {name}
        </Text>
      )}
      {cohortTitle && (
        <Text
          variant="sans-12"
          styles={{ color: 'gray40', fontWeight: 'bold' }}
        >
          {cohortTitle}
        </Text>
      )}
    </Box>
  </Box>
)

export type PageBodyFellowsGridProps = PageTemplateEnhancerProps

export const PageBodyFellowsGrid = ({
  nextSharesBg,
}: PageBodyFellowsGridProps) => {
  const fellows = useFellows()

  return (
    <BoundedBox
      as="section"
      nextSharesBg={nextSharesBg}
      styles={{
        backgroundColor: 'gray85',
        maxWidth: 'xlarge',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Box
        as="ul"
        styles={{
          display: 'grid',
          gridTemplateColumns: [2, 3, 4, 5],
          gap: [3, 4],
        }}
      >
        {fellows.map((fellow) => (
          <Fellow
            key={fellow.uid}
            name={fellow.name}
            cohortTitle={fellow.cohortTitle}
            biographyHTML={fellow.biographyHTML}
            portraitFluid={fellow.portraitFluid}
            portraitAlt={fellow.portraitAlt}
            photoFluid={fellow.photoFluid}
            photoAlt={fellow.photoAlt}
          />
        ))}
      </Box>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: 'gray85',
})

export default PageBodyFellowsGrid
