import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { getRichText } from '@walltowall/helpers'
import slugify from 'slugify'

import { InteriorPageBodyStaffDirectoryFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Text } from '../components/Text'
import { Anchor } from '../components/Anchor'

export type InteriorPageBodyStaffDirectoryProps = ReturnType<
  typeof mapDataToProps
> &
  PageTemplateEnhancerProps

const InteriorPageBodyStaffDirectory = ({
  children,
  nextSharesBg,
}: InteriorPageBodyStaffDirectoryProps) => {
  const staffMembersCount = React.Children.count(children)
  const staffMembers = React.Children.toArray(children).map((child) =>
    React.isValidElement(child)
      ? {
          slug: child.props.name ? slugify(child.props.name) : undefined,
          name: child.props.name as string | undefined,
          title: child.props.title as string | undefined,
        }
      : {},
  )

  return (
    <BoundedBox
      as="section"
      variant="narrow"
      nextSharesBg={nextSharesBg}
      styles={{ backgroundColor: 'white' }}
    >
      <Box styles={{ display: 'grid', gap: [6, 8, 10] }}>
        {staffMembersCount > 1 && (
          <Box
            as="ul"
            styles={{
              backgroundColor: 'orange95',
              padding: 6,
              color: 'gray40',
              display: 'grid',
              gap: 3.5,
            }}
          >
            {staffMembers.map((member) => (
              <Box key={member.slug} as="li">
                <Text variant="serif-14-16">
                  <Anchor href={`#${member.slug}`}>{member.name}</Anchor>
                  {member.title && `, ${member.title}`}
                </Text>
              </Box>
            ))}
          </Box>
        )}
        <Box as="ul" styles={{ display: 'grid', gap: [10, 12, 14] }}>
          {children}
        </Box>
      </Box>
    </BoundedBox>
  )
}

export type InteriorPageBodyStaffDirectoryStaffMemberProps = {
  name?: string
  title?: string
  biographyHTML?: string
  photoFluid?: FluidObject
  photoAlt?: string
}

const StaffMember = ({
  name,
  title,
  biographyHTML,
  photoFluid,
  photoAlt,
}: InteriorPageBodyStaffDirectoryStaffMemberProps) => (
  <Box
    as="li"
    id={name ? slugify(name) : undefined}
    styles={{
      display: 'grid',
      gridTemplateColumns: 12,
      gap: 6,
      alignItems: 'start',
    }}
  >
    {photoFluid && (
      <Box
        as={GatsbyImage}
        fluid={photoFluid}
        alt={photoAlt}
        styles={{ gridColumn: ['span-4', 'span-3'] }}
      />
    )}
    <Box
      styles={{
        display: 'grid',
        gap: [6, 7, 8],
        gridColumn: ['span-12', 'span-9'],
        paddingTop: [null, 2],
      }}
    >
      {name && (
        <Text variant="sans-18-bold-caps" styles={{ color: 'gray10' }}>
          {name}
          {title && `, ${title}`}
        </Text>
      )}
      {biographyHTML && (
        <HTMLContent html={biographyHTML} styles={{ color: 'gray40' }} />
      )}
    </Box>
  </Box>
)

InteriorPageBodyStaffDirectory.StaffMember = StaffMember

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  InteriorPageBodyStaffDirectoryFragment,
  typeof mapDataToContext
>) => ({
  children: data?.items?.map((item) => (
    <InteriorPageBodyStaffDirectory.StaffMember
      key={item?.name?.text}
      name={item?.name?.text}
      title={item?.staff_title?.text}
      biographyHTML={getRichText(item?.biography)}
      photoFluid={item?.photo?.fluid as FluidObject}
      photoAlt={item?.photo?.alt}
    />
  )) as React.ReactNode,
})

export const mapDataToContext = () => ({
  bg: 'white',
})

export const fragment = graphql`
  fragment InteriorPageBodyStaffDirectory on PrismicInteriorPageBodyStaffDirectory {
    items {
      name {
        text
      }
      staff_title {
        text
      }
      biography {
        text
        html
      }
      photo {
        alt
        fluid(maxWidth: 800) {
          ...GatsbyPrismicImageFluid
        }
      }
    }
  }
`

export default InteriorPageBodyStaffDirectory
