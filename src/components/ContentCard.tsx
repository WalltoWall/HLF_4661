import * as React from 'react'
import { Box, BoxProps, useBoxStyles } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'
import ConditionalWrap from 'conditional-wrap'

import { Text } from './Text'
import { ButtonLink } from './ButtonLink'
import { Link } from './Link'
import { Anchor } from './Anchor'
import { HTMLContent } from './HTMLContent'

import { ReactComponent as AssetLogoBugGrayscaleSVG } from '../assets/logo-bug-grayscale.svg'
import { Image } from '@unpic/react'

const defaultElement = 'div'

type ContentCardProps<E extends React.ElementType> = {
	topLabel?: string
	title?: string
	date?: string
	excerpt?: string
	excerptHTML?: string
	href?: string
	buttonText?: string
	featuredImageSrc?: string
	featuredImageAlt?: string
	featuredImageURL?: string
	featuredImageDimensions?: {
		width: number
		height: number
	}
	sublinkHref?: string
	sublinkText?: string
} & BoxProps<E>

export const ContentCard = <
	E extends React.ElementType = typeof defaultElement,
>({
	topLabel,
	title,
	excerpt,
	excerptHTML,
	href,
	date,
	buttonText = 'Learn More',
	featuredImageSrc,
	featuredImageAlt,
	featuredImageURL,
	featuredImageDimensions,
	sublinkHref,
	sublinkText,
	...props
}: ContentCardProps<E>) => {
	const imgStyles = useBoxStyles({
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: 'gray20',
	})

	return (
		<Box
			as={defaultElement}
			{...props}
			styles={{
				display: 'grid',
				gap: [4, 6],
				gridTemplateColumns: [null, 3],
				alignItems: 'start',
				...props.styles,
			}}
		>
			<Box
				styles={{ gridColumn: [null, 'span-1'], maxWidth: ['15rem', 'none'] }}
			>
				<ConditionalWrap
					condition={Boolean(href)}
					wrap={(children) => <Link href={href!}>{children}</Link>}
				>
					{featuredImageSrc ? (
						<Image
							src={featuredImageSrc}
							alt={featuredImageAlt ?? ''}
							className={imgStyles}
							breakpoints={[400, 800]}
							sizes="(min-width: 400px) 400px, 100vw"
							layout="fullWidth"
						/>
					) : featuredImageURL ? (
						<Box
							as="img"
							loading="lazy"
							decoding="async"
							alt={featuredImageAlt ?? ''}
							src={featuredImageURL}
							width={featuredImageDimensions?.width}
							height={featuredImageDimensions?.height}
							style={{ objectFit: 'cover' }}
							styles={{
								borderWidth: '1px',
								borderStyle: 'solid',
								borderColor: 'gray20',
							}}
						/>
					) : (
						<Box
							as={AspectRatio}
							x={8}
							y={5}
							styles={{
								backgroundColor: 'gray95',
								borderWidth: '1px',
								borderStyle: 'solid',
								borderColor: 'gray85',
							}}
						>
							<Box
								styles={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: 'full',
									height: 'full',
								}}
							>
								<Box
									as={AssetLogoBugGrayscaleSVG}
									styles={{ width: '3/12', color: 'gray80', opacity: 25 }}
								/>
							</Box>
						</Box>
					)}
				</ConditionalWrap>
			</Box>
			<Box
				styles={{
					display: 'grid',
					gap: [6, 8],
					gridColumn: [null, 'span-2'],
					paddingTop: 2,
				}}
			>
				<Box styles={{ display: 'grid', gap: [4, 5], justifyItems: 'start' }}>
					{topLabel && (
						<Text variant="sans-12-caps" styles={{ color: 'gray40' }}>
							{topLabel}
						</Text>
					)}
					{title && (
						<ConditionalWrap
							condition={Boolean(href)}
							wrap={(children) => (
								<Anchor href={href!} styles={{ color: 'gray10' }}>
									{children}
								</Anchor>
							)}
						>
							<Text variant="serif-20-24">{title}</Text>
						</ConditionalWrap>
					)}
					{sublinkHref && sublinkText && (
						<Anchor href={sublinkHref}>
							<Text variant="serif-14-16">{sublinkText}</Text>
						</Anchor>
					)}
					{date && (
						<Text variant="sans-13-14" styles={{ color: 'gray40' }}>
							{date}
						</Text>
					)}
					{excerptHTML && (
						<HTMLContent
							html={excerptHTML}
							componentOverrides={{
								p: (Comp) => (props) => (
									<Comp variant="serif-14-16" {...props} />
								),
							}}
							styles={{ color: 'gray40' }}
						/>
					)}
					{excerpt && (
						<Text as="p" variant="serif-14-16" styles={{ color: 'gray40' }}>
							{excerpt}
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
