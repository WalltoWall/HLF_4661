import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { InteriorPageBodyImagesFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type InteriorPageBodyImagesProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const InteriorPageBodyImages = ({
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
  imageData?: IGatsbyImageData
  imageAlt?: string
}

const Image = ({
  captionHTML,
  imageData,
  imageAlt,
}: InteriorPageBodyImagesImageProps) => (
  <Box as="figure" styles={{ display: 'grid', gap: [4, 5] }}>
    {imageData && <GatsbyImage image={imageData} alt={imageAlt ?? ''} />}
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
      imageData={item?.image?.gatsbyImageData as IGatsbyImageData}
      imageAlt={undefIfEmpty(item?.image?.alt) as string | undefined}
      captionHTML={getRichText(item?.caption)}
    />
  )) as React.ReactNode,
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyImages on PrismicInteriorPageDataBodyImages {
    items {
      image {
        alt
        url
        gatsbyImageData(placeholder: BLURRED, width: 600, breakpoints: [600])
      }
      caption {
        html
        text
      }
    }
  }
`

export default InteriorPageBodyImages
