import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { NewsPostBodyTextIntroFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type NewsPostBodyTextIntroProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const NewsPostBodyTextIntro = ({
  textHTML,
  nextSharesBg,
}: NewsPostBodyTextIntroProps) => (
  <BoundedBox
    as="section"
    variant="narrow"
    nextSharesBg={nextSharesBg}
    styles={{ backgroundColor: 'white' }}
  >
    {textHTML && (
      <HTMLContent
        html={textHTML}
        componentOverrides={{
          p: (Comp) => (props) => <Comp variant="serif-20-24" {...props} />,
        }}
        styles={{ color: 'gray20' }}
      />
    )}
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  NewsPostBodyTextIntroFragment,
  typeof mapDataToContext
>) => ({
  textHTML: getRichText(data.primary?.introductory_text),
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment NewsPostBodyTextIntro on PrismicNewsPostBodyTextIntro {
    primary {
      introductory_text {
        text
        html
      }
    }
  }
`

export default NewsPostBodyTextIntro
