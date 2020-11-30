import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import { getRichText } from '@walltowall/helpers'

import { InteriorPageBodyCohortScheduleFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Text } from '../components/Text'

export type InteriorPageBodyCohortScheduleProps = ReturnType<
  typeof mapDataToProps
> &
  PageTemplateEnhancerProps

export const InteriorPageBodyCohortSchedule = ({
  children,
  nextSharesBg,
}: InteriorPageBodyCohortScheduleProps) => (
  <BoundedBox as="section" nextSharesBg={nextSharesBg}>
    {children && (
      <Box as="table">
        <Box as="tbody">{children}</Box>
      </Box>
    )}
  </BoundedBox>
)

type SectionProps = {
  descriptionHeading?: string
  datesHeading?: string
  children?: React.ReactNode
}

const Section = ({
  descriptionHeading,
  datesHeading,
  children,
}: SectionProps) => (
  <>
    <Box
      as="tr"
      styles={{
        backgroundColor:
          descriptionHeading || datesHeading ? 'orange50' : 'orange55',
        color: 'white',
      }}
    >
      <Box as="th" width="60%" styles={{ padding: 3.5 }}>
        <Text variant="sans-16-bold-caps">
          {descriptionHeading || '\u00A0'}
        </Text>
      </Box>
      <Box as="th" width="40%" styles={{ padding: 3.5 }}>
        <Text variant="sans-16-bold-caps">{datesHeading || '\u00A0'}</Text>
      </Box>
    </Box>
    {children}
  </>
)

InteriorPageBodyCohortSchedule.Section = Section

type EventProps = {
  descriptionHTML?: string
  dateHTML?: string
  index: number
}

const Event = ({ descriptionHTML, dateHTML, index }: EventProps) => (
  <Box
    as="tr"
    styles={{
      backgroundColor: index % 2 ? 'aqua90' : 'aqua80',
      color: 'gray20',
    }}
  >
    <Box
      as="td"
      styles={{
        paddingLeft: 3.5,
        paddingRight: 3.5,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <HTMLContent
        html={descriptionHTML}
        componentOverrides={{
          p: (Comp) => (props) => (
            <Comp
              variant="serif-14-16"
              {...props}
              styles={{ ...props.styles, marginBottom: [4, 5, 6] }}
            />
          ),
        }}
      />
    </Box>
    <Box as="td" styles={{ padding: 3.5 }}>
      <HTMLContent
        html={dateHTML}
        componentOverrides={{
          p: (Comp) => (props) => (
            <Comp
              variant="serif-14-16"
              {...props}
              styles={{ ...props.styles, marginBottom: [4, 5, 6] }}
            />
          ),
        }}
      />
    </Box>
  </Box>
)

InteriorPageBodyCohortSchedule.Event = Event

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageBodyCohortScheduleFragment,
  typeof mapDataToContext
>) => {
  const doc = data.primary?.cohort_schedule?.document

  return {
    children: doc?.data?.body?.map?.((section, i) => (
      <InteriorPageBodyCohortSchedule.Section
        key={i}
        descriptionHeading={section?.primary?.description_heading?.text}
        datesHeading={section?.primary?.dates_heading?.text}
      >
        {section?.items?.map?.((item, index) => (
          <InteriorPageBodyCohortSchedule.Event
            key={getRichText(item?.event_description)}
            descriptionHTML={getRichText(item?.event_description)}
            dateHTML={getRichText(item?.event_date)}
            index={index}
          />
        ))}
      </InteriorPageBodyCohortSchedule.Section>
    )),
  }
}

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyCohortSchedule on PrismicInteriorPageBodyCohortSchedule {
    primary {
      cohort_schedule {
        document {
          ... on PrismicCohortSchedule {
            data {
              body {
                ... on PrismicCohortScheduleBodySection {
                  primary {
                    description_heading {
                      text
                    }
                    dates_heading {
                      text
                    }
                  }
                  items {
                    event_description {
                      text
                      html
                    }
                    event_date {
                      text
                      html
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default InteriorPageBodyCohortSchedule
