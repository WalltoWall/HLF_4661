import * as React from 'react'
import { Box, BoxProps, useBoxStyles } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'
import { AspectRatio } from '@walltowall/siamese'
import { Image } from '@unpic/react'

import { Link } from '../components/Link'
import { Anchor } from '../components/Anchor'
import { Text } from '../components/Text'
import { ButtonLink } from '../components/ButtonLink'

const defaultElement = 'ul'

export type PageBodyLinkCollectionProps<E extends React.ElementType> =
	BoxProps<E>

export const LinkCollection = <
	E extends React.ElementType = typeof defaultElement,
>({
	children,
	...props
}: PageBodyLinkCollectionProps<E>) => (
	//@ts-ignore
	<Box
		as={defaultElement}
		{...props}
		styles={{
			backgroundColor: 'orange95',
			display: 'grid',
			gridTemplateColumns: [null, 2],
			gap: 8,
			padding: [5, 8, 11],
			alignItems: 'start',
			...props.styles,
		}}
	>
		{children}
	</Box>
)

const linkCollectionLinkVariants = {
	base: {
		gap: [4, 3, 6],
		gridTemplateColumns: [null, null, 2],
		thumbnailMaxWidth: ['15rem', 'none'],
	},
	small: {
		gap: [4, 5, 6],
		gridTemplateColumns: 3,
		thumbnailMaxWidth: ['7rem', null, 'none'],
	},
} as const

type LinkCollectionLinkProps = {
	variant?: keyof typeof linkCollectionLinkVariants
	label?: string
	name?: string
	description?: string
	href?: string
	buttonText?: string
	thumbnailSrc?: string
	thumbnailAlt?: string
}

const LinkCollectionLink = ({
	variant: variantName = 'base',
	label,
	name,
	description,
	href,
	buttonText = 'Learn More',
	thumbnailSrc,
	thumbnailAlt,
}: LinkCollectionLinkProps) => {
	const variant = linkCollectionLinkVariants[variantName]
	const imgStyles = useBoxStyles({ height: 'full' })
	const linkStyles = useBoxStyles({ height: 'full', display: 'flex' })

	return (
		<Box
			as="li"
			styles={{
				display: 'grid',
				gap: variant.gap,
				gridTemplateColumns: variant.gridTemplateColumns,
				alignItems: 'start',
			}}
		>
			<Box styles={{ maxWidth: variant.thumbnailMaxWidth }}>
				<ConditionalWrap
					condition={Boolean(href)}
					wrap={(children) => (
						<Link className={linkStyles} href={href!}>
							{children}
						</Link>
					)}
				>
					{thumbnailSrc ? (
						<Image
							src={thumbnailSrc}
							alt={thumbnailAlt ?? ''}
							layout="fullWidth"
							breakpoints={[400, 800]}
							sizes="(min-width: 400px) 400px, 100vw"
							className={imgStyles}
						/>
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
			<Box
				styles={{
					display: 'grid',
					gap: 5,
					paddingTop: 2,
					gridColumnStart: 2,
					gridColumnEnd: -1,
				}}
			>
				<Box styles={{ display: 'grid', gap: 3.5, justifyItems: 'start' }}>
					{label && (
						<Text variant="sans-13-14-bold-caps" styles={{ color: 'blue10' }}>
							{label}
						</Text>
					)}
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
}

LinkCollection.Link = LinkCollectionLink
