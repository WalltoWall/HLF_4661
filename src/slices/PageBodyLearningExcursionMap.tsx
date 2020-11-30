import * as React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'
import { getRichText } from '@walltowall/helpers'
import ConditionalWrap from 'conditional-wrap'

import { PageBodyLearningExcursionMapFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Link } from '../components/Link'
import { Text } from '../components/Text'

export type PageBodyLearningExcursionMapProps = ReturnType<
  typeof mapDataToProps
> &
  PageTemplateEnhancerProps

export const PageBodyLearningExcursionMap = ({
  textHTML,
  mapURL,
  children,
}: PageBodyLearningExcursionMapProps) => (
  <BoundedBox
    as="section"
    styles={{
      backgroundColor: 'white',
      maxWidth: 'xlarge',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <Box styles={{ display: 'grid', gap: [8, 10, 13] }}>
      {textHTML && (
        <HTMLContent
          html={textHTML}
          componentOverrides={{
            h1: (Comp) => (props) => (
              <Comp
                variant="serif-40-48"
                {...props}
                styles={{ color: 'gray10' }}
              />
            ),
          }}
          styles={{ color: 'gray40' }}
        />
      )}
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
      {children && (
        <Box
          as="ul"
          styles={{
            display: 'grid',
            gridTemplateColumns: [2, 3, 4],
            gap: 6,
            rowGap: [null, 8],
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  </BoundedBox>
)

type FellowProps = {
  name?: string
  videoHref?: string
  imageFluid?: FluidObject
  imageAlt?: string
}

const Fellow = ({ name, videoHref, imageFluid, imageAlt }: FellowProps) => (
  <Box as="li">
    <ConditionalWrap
      condition={Boolean(videoHref)}
      wrap={(children) => <Link href={videoHref!}>{children}</Link>}
    >
      <Box styles={{ display: 'grid', gap: 4 }}>
        {imageFluid && (
          <GatsbyImage
            fluid={imageFluid}
            alt={imageAlt ?? name ? `Photo of ${name}` : undefined}
          />
        )}
        {name && (
          <Text
            variant="sans-16"
            styles={{ textAlign: 'center', color: 'gray20' }}
          >
            {name}
          </Text>
        )}
      </Box>
    </ConditionalWrap>
  </Box>
)

PageBodyLearningExcursionMap.Fellow = Fellow

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyLearningExcursionMapFragment,
  typeof mapDataToContext
>) => ({
  textHTML: getRichText(data.primary?.text),
  mapURL: data.primary?.map_url,
  children: data.items?.map?.((item) => (
    <PageBodyLearningExcursionMap.Fellow
      key={item?.fellow_name?.text}
      name={item?.fellow_name?.text}
      videoHref={item?.video_link?.url}
      imageFluid={item?.fellow_photo?.fluid}
      imageAlt={item?.fellow_photo?.alt}
    />
  )),
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment PageBodyLearningExcursionMap on PrismicPageBodyLearningExcursionMap {
    primary {
      text {
        text
        html
      }
      map_url
    }
    items {
      video_link {
        url
      }
      fellow_name {
        text
      }
      fellow_photo {
        alt
        fluid(maxWidth: 400) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default PageBodyLearningExcursionMap
