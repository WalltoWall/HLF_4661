import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { InteriorPageBodyTextFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type InteriorPageBodyTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

export const InteriorPageBodyText = ({
  textHTML,
  nextSharesBg,
  id,
}: InteriorPageBodyTextProps) => (
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
          h1: (Comp) => (props) =>
            <Comp {...props} styles={{ color: 'gray20' }} />,
        }}
        styles={{ color: 'gray40' }}
      />
    )}
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageBodyTextFragment,
  typeof mapDataToContext
>) => ({
  textHTML: getRichText(data.primary?.text),
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyText on PrismicInteriorPageDataBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default InteriorPageBodyText
