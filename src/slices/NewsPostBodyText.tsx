import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { NewsPostBodyTextFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type NewsPostBodyTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const NewsPostBodyText = ({
  textHTML,
  nextSharesBg,
  id,
}: NewsPostBodyTextProps) => (
  <BoundedBox
    as="section"
    variant="narrow"
    nextSharesBg={nextSharesBg}
    id={id}
    styles={{ backgroundColor: 'white' }}
  >
    {textHTML && (
      <HTMLContent
        html={textHTML}
        componentOverrides={{
          h1: (Comp) => (props) => (
            <Comp {...props} styles={{ color: 'gray20' }} />
          ),
        }}
        styles={{ color: 'gray40' }}
      />
    )}
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<NewsPostBodyTextFragment, typeof mapDataToContext>) => ({
  textHTML: getRichText(data.primary?.text),
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment NewsPostBodyText on PrismicNewsPostBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default NewsPostBodyText
