import * as React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { PageBodyCallsToActionFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { ImageWithTextOverlay } from '../components/ImageWithTextOverlay'

export type PageBodyCallsToActionProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const PageBodyCallsToAction = ({
  children,
  id,
}: PageBodyCallsToActionProps) => (
  <Box
    as="section"
    id={id}
    styles={{
      maxWidth: 'xlarge',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
    }}
  >
    <Box styles={{ display: 'flex', flexDirection: ['column', 'row'] }}>
      {children}
    </Box>
  </Box>
)

type CTAProps = {
  textHTML?: string
  buttonHref?: string
  buttonText?: string
  backgroundImageFluid?: FluidObject
  backgroundImageAlt?: string
}

const CTA = ({
  textHTML,
  buttonHref,
  buttonText,
  backgroundImageFluid,
  backgroundImageAlt,
}: CTAProps) => (
  <Box styles={{ flex: [null, 'equal0'] }}>
    <ImageWithTextOverlay
      variant="small"
      textHTML={textHTML}
      buttonHref={buttonHref}
      buttonText={buttonText}
      imageFluid={backgroundImageFluid}
      imageAlt={backgroundImageAlt}
      styles={{ height: 'full' }}
    />
  </Box>
)
PageBodyCallsToAction.CTA = CTA

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyCallsToActionFragment,
  typeof mapDataToContext
>) => ({
  children: data?.items?.map?.((item) => (
    <PageBodyCallsToAction.CTA
      key={item?.text?.text}
      textHTML={getRichText(item?.text)}
      buttonText={undefIfEmpty(item?.button_text?.text)}
      buttonHref={item?.button_link?.url}
      backgroundImageFluid={item?.background_image?.fluid}
      backgroundImageAlt={item?.background_image?.alt}
    />
  )) as React.ReactNode,
})

export const mapDataToContext = () => ({
  bg: Symbol(),
})

export const fragment = graphql`
  fragment PageBodyCallsToAction on PrismicPageBodyCallsToAction {
    items {
      text {
        text
        html
      }
      button_text {
        text
      }
      button_link {
        url
      }
      background_image {
        alt
        fluid(maxWidth: 1000) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default PageBodyCallsToAction
