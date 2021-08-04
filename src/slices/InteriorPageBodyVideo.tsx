import * as React from 'react'
import { graphql } from 'gatsby'

import { InteriorPageBodyVideoFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { VideoPlayer } from '../components/VideoPlayer'

export type InteriorPageBodyVideoProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const InteriorPageBodyVideo = ({
  videoURL,
  videoThumbnailURL,
  videoThumbnailAspectRatio,
  posterFluid,
  posterAlt,
  nextSharesBg,
}: InteriorPageBodyVideoProps) => (
  <BoundedBox
    as="section"
    variant="narrow"
    nextSharesBg={nextSharesBg}
    styles={{ backgroundColor: 'white' }}
  >
    {videoURL && (
      <VideoPlayer
        x={16}
        y={9}
        videoURL={videoURL}
        posterFluid={posterFluid}
        posterAlt={posterAlt}
        posterURL={videoThumbnailURL}
        posterAspectRatio={videoThumbnailAspectRatio}
      />
    )}
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageBodyVideoFragment,
  typeof mapDataToContext
>) => {
  const videoThumbnailWidth = data.primary?.video?.thumbnail_width
  const videoThumbnailHeight = data.primary?.video?.thumbnail_height
  const videoThumbnailAspectRatio =
    videoThumbnailWidth && videoThumbnailHeight
      ? videoThumbnailWidth / videoThumbnailHeight
      : undefined

  return {
    videoURL: data.primary?.video?.embed_url,
    videoThumbnailURL: data.primary?.video?.thumbnail_url,
    videoThumbnailAspectRatio,
    posterFluid: data.primary?.poster?.fluid,
    posterAlt: data.primary?.poster?.alt,
  }
}

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyVideo on PrismicInteriorPageDataBodyVideo {
    primary {
      video {
        embed_url
        thumbnail_url
        thumbnail_height
        thumbnail_width
      }
      poster {
        alt
        fluid(maxWidth: 800) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default InteriorPageBodyVideo
