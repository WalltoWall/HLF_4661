import * as React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'
import { AspectRatio } from '@walltowall/siamese'
import { undefIfEmpty } from '@walltowall/helpers'

import { PageBodyLinkCollectionFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { Link } from '../components/Link'
import { Anchor } from '../components/Anchor'
import { Text } from '../components/Text'
import { ButtonLink } from '../components/ButtonLink'

export type PageBodyLinkCollectionProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const PageBodyLinkCollection = ({
  children,
  nextSharesBg,
  id,
}: PageBodyLinkCollectionProps) => (
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
    <Box
      as="ul"
      styles={{
        backgroundColor: 'orange95',
        display: 'grid',
        gridTemplateColumns: [null, 2],
        gap: 8,
        padding: [5, 8, 11],
        alignItems: 'start',
      }}
    >
      {children}
    </Box>
  </BoundedBox>
)

type LinkProps = {
  name?: string
  description?: string
  href?: string
  buttonText?: string
  thumbnailFluid?: FluidObject
  thumbnailAlt?: string
}

const LinkCollectionLink = ({
  name,
  description,
  href,
  buttonText = 'Learn More',
  thumbnailFluid,
  thumbnailAlt,
}: LinkProps) => (
  <Box
    as="li"
    styles={{
      display: 'grid',
      gap: [4, 6],
      gridTemplateColumns: [null, null, 2],
      alignItems: 'start',
    }}
  >
    <Box styles={{ maxWidth: ['15rem', 'none'] }}>
      <ConditionalWrap
        condition={Boolean(href)}
        wrap={(children) => <Link href={href!}>{children}</Link>}
      >
        {thumbnailFluid ? (
          <Box as={GatsbyImage} fluid={thumbnailFluid} alt={thumbnailAlt} />
        ) : (
          <Box
            as={AspectRatio}
            x={8}
            y={5}
            styles={{ backgroundColor: 'gray40' }}
          />
        )}
      </ConditionalWrap>
    </Box>
    <Box styles={{ display: 'grid', gap: 5, paddingTop: 2 }}>
      <Box styles={{ display: 'grid', gap: 3.5, justifyItems: 'start' }}>
        {name && (
          <ConditionalWrap
            condition={Boolean(href)}
            wrap={(children) => (
              <Anchor href={href!} styles={{ color: 'gray10' }}>
                {children}
              </Anchor>
            )}
          >
            <Text variant="serif-20-24">{name}</Text>
          </ConditionalWrap>
        )}
        {description && (
          <Text
            as="p"
            variant="sans-13-14"
            styles={{ color: 'gray40', letterSpacing: 'xs' }}
          >
            {description}
          </Text>
        )}
      </Box>
      {href && (
        <ButtonLink href={href} styles={{ justifySelf: 'start' }}>
          {buttonText}
        </ButtonLink>
      )}
    </Box>
  </Box>
)

PageBodyLinkCollection.Link = LinkCollectionLink

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyLinkCollectionFragment,
  typeof mapDataToContext
>) => ({
  children: data.items?.map?.(
    (item) =>
      item?.link?.url && (
        <PageBodyLinkCollection.Link
          key={item?.link?.url}
          href={item?.link?.url}
          name={item?.name?.text}
          description={item?.description?.text}
          buttonText={undefIfEmpty(item?.button_text?.text)}
          thumbnailFluid={item?.thumbnail?.fluid}
          thumbnailAlt={item?.thumbnail?.alt}
        />
      ),
  ),
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment PageBodyLinkCollection on PrismicPageBodyLinkCollection {
    items {
      name {
        text
      }
      description {
        text
      }
      link {
        url
      }
      button_text {
        text
      }
      thumbnail {
        alt
        fluid(maxWidth: 400) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default PageBodyLinkCollection
