import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

import { PageBodyTextFragment } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'

export type PageBodyTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyText = ({ textHTML, nextSharesBg }: PageBodyTextProps) => (
  <BoundedBox as="section" nextSharesBg={nextSharesBg}>
    {textHTML && <HTMLContent html={textHTML} />}
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyTextFragment, typeof mapDataToContext>) => ({
  textHTML: getRichText(data?.primary?.text),
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyText on PrismicPageBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default PageBodyText
