import * as React from 'react'
import { undefIfEmpty } from '@walltowall/helpers'
import { AspectRatio } from '@walltowall/siamese'
import { Box, BoxProps, useBoxStyles } from '@walltowall/calico'
import clsx from 'clsx'

import { useCommonStyles } from '../hooks/useCommonStyles'

import { BoundedBox } from './BoundedBox'
import { Text } from './Text'
import { Anchor } from './Anchor'
import { Image } from '@unpic/react'

const defaultElement = 'aside'

type InteriorPageSidebarNavigationItem = {
	url?: string
	name?: string
}

type InteriorPageSidebarProps<E extends React.ElementType> = {
	title?: string
	description?: string
	imageSrc?: string
	imageAlt?: string
	navigationItems?: InteriorPageSidebarNavigationItem[]
} & BoxProps<E>

export const InteriorPageSidebar = <
	E extends React.ElementType = typeof defaultElement,
>({
	title,
	description,
	imageSrc,
	imageAlt,
	navigationItems = [],
	className,
	...props
}: InteriorPageSidebarProps<E>) => {
	const commonStyles = useCommonStyles()
	const imgStyles1 = useBoxStyles({ width: 'full', height: 'full' })
	const imgStyles2 = useBoxStyles({ display: ['none', null, 'block'] })

	return (
		//@ts-ignore
		<Box
			as={defaultElement}
			className={clsx(commonStyles.lightGrayGradientBackground, className)}
			{...props}
		>
			{imageSrc && (
				<>
					<Box
						as={AspectRatio}
						x={16}
						y={9}
						styles={{ display: [null, null, 'none'] }}
					>
						<Image
							src={imageSrc}
							alt={imageAlt ?? ''}
							className={imgStyles1}
							layout="fullWidth"
						/>
					</Box>

					<Image
						src={imageSrc}
						alt={imageAlt ?? ''}
						className={imgStyles2}
						layout="fullWidth"
					/>
				</>
			)}
			<BoundedBox styles={{ position: [null, 'sticky'], top: 0 }}>
				<Box styles={{ display: 'grid', gap: 8 }}>
					{title && (
						<Text variant="serif-40-48" as="h1" styles={{ color: 'gray10' }}>
							{title}
						</Text>
					)}
					{description && (
						<Text
							variant="sans-16-italic"
							as="p"
							styles={{ color: 'orange55' }}
						>
							{description}
						</Text>
					)}
					{undefIfEmpty(navigationItems) && (
						<Box
							as="ul"
							styles={{
								borderWidth: 'none',
								borderTopWidth: '1px',
								borderColor: 'gray80',
								borderStyle: 'solid',
							}}
						>
							{navigationItems.map(
								(navigationItem) =>
									navigationItem.url && (
										<Box
											key={navigationItem.url}
											as="li"
											styles={{
												borderWidth: 'none',
												borderBottomWidth: '1px',
												borderColor: 'gray80',
												borderStyle: 'solid',
											}}
										>
											<Anchor
												href={navigationItem.url}
												styles={{
													display: 'block',
													color: 'gray40',
													paddingBottom: 5,
													paddingTop: 5,
												}}
											>
												<Text variant="sans-16-caps">
													{navigationItem.name}
												</Text>
											</Anchor>
										</Box>
									),
							)}
						</Box>
					)}
				</Box>
			</BoundedBox>
		</Box>
	)
}
