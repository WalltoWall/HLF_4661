import * as React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { undefIfEmpty } from '@walltowall/helpers'

import { PageBodyHeadshotQuoteFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { useCommonStyles } from '../hooks/useCommonStyles'

import { BoundedBox } from '../components/BoundedBox'
import { ButtonLink } from '../components/ButtonLink'
import { Text } from '../components/Text'

export type PageBodyHeadshotQuoteProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const PageBodyHeadshotQuote = ({
  quote,
  credit,
  buttonText = 'Learn More',
  buttonHref,
  photoFluid,
  photoAlt,
  nextSharesBg,
}: PageBodyHeadshotQuoteProps) => {
  const commonStyles = useCommonStyles()

  return (
    <BoundedBox
      as="section"
      variant="narrow"
      innerMaxWidth="large"
      nextSharesBg={nextSharesBg}
      className={commonStyles.darkGrayGradientBackground}
      styles={{
        color: 'white',
        maxWidth: 'xlarge',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
      }}
    >
      <Box
        styles={{
          display: 'grid',
          gridTemplateColumns: [6, 12],
          gap: [6, 8, 10],
          alignItems: ['start', 'center'],
        }}
      >
        <Box
          styles={{
            gridColumn: ['span-2', 'span-3'],
            marginTop: [-2, null, -6],
            marginBottom: [null, -10, -11],
            alignSelf: ['start', null, 'end'],
          }}
        >
          {photoFluid && <GatsbyImage fluid={photoFluid} alt={photoAlt} />}
        </Box>
        <Box
          as="figure"
          styles={{
            gridColumn: ['span-4', 'span-9'],
            display: 'grid',
            gap: [6, 8],
            justifyItems: 'start',
            paddingTop: [1, 2],
          }}
        >
          <Box styles={{ display: 'grid', gap: 5 }}>
            {quote && (
              <Text as="blockquote" variant="serif-20-24">
                <Box as="span" className={commonStyles.dquotSurround}>
                  {quote}
                </Box>
              </Text>
            )}
            {credit && (
              <Text
                as="figcaption"
                variant="sans-16-caps"
                styles={{ color: 'gray40', maxWidth: ['30ch', 'none'] }}
              >
                {credit}
              </Text>
            )}
          </Box>
          {buttonHref && (
            <ButtonLink href={buttonHref} variant="orange">
              {buttonText}
            </ButtonLink>
          )}
        </Box>
      </Box>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyHeadshotQuoteFragment,
  typeof mapDataToContext
>) => ({
  quote: data.primary?.quote?.text,
  credit: data.primary?.credit?.text,
  buttonText: undefIfEmpty(data.primary?.button_text?.text),
  buttonHref: data.primary?.button_link?.url,
  photoFluid: data.primary?.photo?.fluid,
  photoAlt: data.primary?.photo?.alt,
})

export const mapDataToContext = () => ({
  bg: Symbol(),
})

export const fragment = graphql`
  fragment PageBodyHeadshotQuote on PrismicPageBodyHeadshotQuote {
    primary {
      quote {
        text
      }
      credit {
        text
      }
      button_link {
        url
      }
      button_text {
        text
      }
      photo {
        alt
        fluid(maxWidth: 500) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default PageBodyHeadshotQuote