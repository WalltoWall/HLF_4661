import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { PageBodyImagesFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type PageBodyImagesProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyImages = ({ children, nextSharesBg }: PageBodyImagesProps) => {
  const imageCount = React.Children.count(children) as 1 | 2 | 3 | 4

  return (
    <BoundedBox
      as="section"
      nextSharesBg={nextSharesBg}
      styles={{ backgroundColor: 'black', color: 'white' }}
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

export type PageBodyImagesImageProps = {
  captionHTML?: string
  imageFluid?: FluidObject
  imageAlt?: string
}

const Image = ({
  captionHTML,
  imageFluid,
  imageAlt,
}: PageBodyImagesImageProps) => (
  <Box as="figure" styles={{ display: 'flex', flexDirection: 'column' }}>
    {imageFluid && <GatsbyImage fluid={imageFluid} alt={imageAlt} />}
    {captionHTML && (
      <HTMLContent
        as="figcaption"
        html={captionHTML}
        styles={{ marginTop: 4 }}
      />
    )}
  </Box>
)

PageBodyImages.Image = Image

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyImagesFragment, typeof mapDataToContext>) => ({
  children: data?.items?.map((item) => (
    <PageBodyImages.Image
      key={item?.image?.url}
      imageFluid={item?.image?.fluid as FluidObject}
      imageAlt={undefIfEmpty(item?.image?.alt) as string | undefined}
      captionHTML={getRichText(item?.caption)}
    />
  )) as React.ReactNode,
})

export const mapDataToContext = () => ({
  bg: 'black',
})

export const fragment = graphql`
  fragment PageBodyImages on PrismicPageBodyImages {
    items {
      image {
        alt
        url
        fluid(maxWidth: 1000) {
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

export default PageBodyImages
