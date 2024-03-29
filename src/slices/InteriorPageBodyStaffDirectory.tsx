import React from 'react'
import { graphql } from 'gatsby'
import { Box, useBoxStyles } from '@walltowall/calico'
import { getRichText } from '@walltowall/helpers'
import slugify from 'slugify'

import { InteriorPageBodyStaffDirectoryFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Text } from '../components/Text'
import { Anchor } from '../components/Anchor'
import { Image } from '@unpic/react'

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
	photoSrc?: string
	photoAlt?: string
}

const StaffMember = ({
	name,
	title,
	biographyHTML,
	photoSrc,
	photoAlt,
}: InteriorPageBodyStaffDirectoryStaffMemberProps) => {
	const imgStyles = useBoxStyles({ gridColumn: ['span-4', 'span-3'] })

	return (
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
			{photoSrc && (
				<Image
					src={photoSrc}
					alt={photoAlt ?? ''}
					className={imgStyles}
					layout="fullWidth"
					breakpoints={[300, 600]}
					sizes="(min-width: 300px) 300px, 100vw"
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
}

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
			photoSrc={item?.photo?.url}
			photoAlt={item?.photo?.alt}
		/>
	)) as React.ReactNode,
})

export const mapDataToContext = () => ({
	bg: 'white',
})

export const fragment = graphql`
	fragment InteriorPageBodyStaffDirectory on PrismicInteriorPageDataBodyStaffDirectory {
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
				url
			}
		}
	}
`

export default InteriorPageBodyStaffDirectory
