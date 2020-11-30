import * as React from 'react'
import { graphql } from 'gatsby'
import { useStyles } from 'react-treat'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { useKeenSlider } from 'keen-slider/react'
import { Box } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'
import clsx from 'clsx'

import { PageBodyQuoteSlideshowFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { preventWidow } from '../lib/preventWidow'
import { useInterval } from '../hooks/useInterval'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { Icon } from '../components/Icon'

import * as styleRefs from './PageBodyQuoteSlideshow.treat'

const SLIDE_DURATION = 7000

export type PageBodyQuoteSlideshowProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const PageBodyQuoteSlideshow = ({
  children,
}: PageBodyQuoteSlideshowProps) => {
  const [start, stop] = useInterval(() => slider.next(), SLIDE_DURATION)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    dragStart: () => stop(),
    dragEnd: () => start(),
  })

  return (
    <Box
      as="section"
      styles={{
        maxWidth: 'xlarge',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {children && (
        <Box ref={sliderRef} className="keen-slider">
          {children}
        </Box>
      )}
    </Box>
  )
}

type SlideProps = {
  quote?: string
  quoteeName?: string
  quoteeTitle?: string
  imageFluid?: FluidObject
  imageAlt?: string
}

const Slide = ({
  quote,
  quoteeName,
  quoteeTitle,
  imageFluid,
  imageAlt,
}: SlideProps) => {
  const styles = useStyles(styleRefs)

  return (
    <Box
      className={clsx('keen-slider__slide', styles.textureMetalBackground)}
      styles={{
        display: 'grid',
        gridTemplateColumns: [null, 12],
        alignItems: 'center',
      }}
    >
      {imageFluid && (
        <Box
          as={AspectRatio}
          x={1}
          y={1}
          styles={{
            gridColumn: [null, 'span-4'],
            height: 'full',
            maxWidth: ['15rem', 'none'],
            width: 'full',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Box
            as={GatsbyImage}
            fluid={imageFluid}
            alt={imageAlt}
            styles={{ height: 'full', width: 'full' }}
          />
        </Box>
      )}
      {quote && (
        <BoundedBox
          styles={{
            gridColumn: [null, 'span-8'],
            paddingLeft: [12, 15, 19],
            paddingRight: [8, 10, 13],
          }}
        >
          <Box styles={{ display: 'grid', gap: [6, 7, 8] }}>
            <Text
              variant="serif-16-18"
              styles={{ color: 'gray40', position: 'relative' }}
            >
              <Icon
                name="doubleQuoteLeft"
                className={styles.leftQuoteIconPlacement}
                styles={{
                  color: 'orange55',
                  width: ['1.5rem', null, '2rem'],
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  marginTop: -2,
                }}
              />
              {preventWidow(quote)}
              <Icon
                name="doubleQuoteRight"
                styles={{
                  color: 'orange55',
                  width: ['1.5rem', null, '2rem'],
                  display: 'inlineBlock',
                  verticalAlign: 'top',
                  marginTop: 2,
                  marginLeft: 2,
                }}
              />
            </Text>
            {(quoteeName || quoteeTitle) && (
              <Text variant="sans-16-18" styles={{ color: 'orange55' }}>
                {quoteeName && (
                  <Box
                    as="span"
                    styles={{
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: 'm',
                    }}
                  >
                    {quoteeName}
                  </Box>
                )}
                {quoteeTitle && <Box as="span">, {quoteeTitle}</Box>}
              </Text>
            )}
          </Box>
        </BoundedBox>
      )}
    </Box>
  )
}

PageBodyQuoteSlideshow.Slide = Slide

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyQuoteSlideshowFragment,
  typeof mapDataToContext
>) => ({
  children: data.items?.map?.((item) => (
    <PageBodyQuoteSlideshow.Slide
      key={item?.quote?.text}
      quote={item?.quote?.text}
      quoteeName={item?.quotee_name?.text}
      quoteeTitle={item?.quotee_title?.text}
      imageFluid={item?.photo?.fluid}
      imageAlt={item?.photo?.alt}
    />
  )),
})

export const mapDataToContext = () => ({
  bg: Symbol(),
})

export const fragment = graphql`
  fragment PageBodyQuoteSlideshow on PrismicPageBodyQuoteSlideshow {
    items {
      quote {
        text
      }
      quotee_name {
        text
      }
      quotee_title {
        text
      }
      photo {
        alt
        fluid(maxWidth: 1000) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default PageBodyQuoteSlideshow
