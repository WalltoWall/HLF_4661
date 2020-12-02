import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { InteriorPageBodyImagesFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type InteriorPageBodyImagesProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const InteriorPageBodyImages = ({
  children,
  nextSharesBg,
}: InteriorPageBodyImagesProps) => {
  const imageCount = React.Children.count(children) as 1 | 2 | 3 | 4

  return (
    <BoundedBox
      as="section"
      variant="narrow"
      nextSharesBg={nextSharesBg}
      styles={{ backgroundColor: 'white' }}
    >
      <Box
        styles={{
          display: 'grid',
          gap: [6, 7, 8],
          gridTemplateColumns: [1, imageCount],
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </BoundedBox>
  )
}

export type InteriorPageBodyImagesImageProps = {
  captionHTML?: string
  imageFluid?: FluidObject
  imageAlt?: string
}

const Image = ({
  captionHTML,
  imageFluid,
  imageAlt,
}: InteriorPageBodyImagesImageProps) => (
  <Box as="figure" styles={{ display: 'grid', gap: [4, 5] }}>
    {imageFluid && <GatsbyImage fluid={imageFluid} alt={imageAlt} />}
    {captionHTML && (
      <HTMLContent
        as="figcaption"
        html={captionHTML}
        componentOverrides={{
          p: (Comp) => (props) => <Comp variant="sans-13-14" {...props} />,
        }}
        styles={{ color: 'gray40' }}
      />
    )}
  </Box>
)

InteriorPageBodyImages.Image = Image

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageBodyImagesFragment,
  typeof mapDataToContext
>) => ({
  children: data?.items?.map((item) => (
    <InteriorPageBodyImages.Image
      key={item?.image?.url}
      imageFluid={item?.image?.fluid as FluidObject}
      imageAlt={undefIfEmpty(item?.image?.alt) as string | undefined}
      captionHTML={getRichText(item?.caption)}
    />
  )) as React.ReactNode,
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyImages on PrismicInteriorPageBodyImages {
    items {
      image {
        alt
        url
        fluid(maxWidth: 800) {
          ...GatsbyPrismicImageFluid
        }
      }
      caption {
        html
        text
      }
    }
  }
`

export default InteriorPageBodyImages
