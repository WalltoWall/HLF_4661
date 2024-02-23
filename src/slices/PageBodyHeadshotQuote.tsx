import * as React from 'react'
import { graphql } from 'gatsby'
import { Box, useBoxStyles } from '@walltowall/calico'
import { undefIfEmpty } from '@walltowall/helpers'
import { Image } from '@unpic/react'

import { PageBodyHeadshotQuoteFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { useCommonStyles } from '../hooks/useCommonStyles'

import { BoundedBox } from '../components/BoundedBox'
import { ButtonLink } from '../components/ButtonLink'
import { Text } from '../components/Text'

export type PageBodyHeadshotQuoteProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

export const PageBodyHeadshotQuote = ({
	quote,
	credit,
	buttonText = 'Learn More',
	buttonHref,
	photoSrc,
	photoAlt,
	nextSharesBg,
}: PageBodyHeadshotQuoteProps) => {
	const commonStyles = useCommonStyles()
	const imgStyles = useBoxStyles({ height: 'full' })

	return (
		<BoundedBox
			as="section"
			variant="narrow"
			nextSharesBg={nextSharesBg}
			className={commonStyles.darkGrayGradientBackground}
			styles={{
				color: 'white',
				maxWidth: 'xlarge',
				marginLeft: 'auto',
				marginRight: 'auto',
				position: 'relative',
			}}
		>
			<Box
				styles={{
					display: 'grid',
					gridTemplateColumns: [6, null, 12],
					gap: [null, null, 4],
					alignItems: ['start', 'center'],
					gridAutoFlow: 'columnDense',
					paddingLeft: [1, null, 7],
				}}
			>
				<Box
					styles={{
						marginRight: -2,
						marginLeft: [-2, null, -8, -5],
						marginTop: [0, null, -11],
						marginBottom: [-8, -10, -11],
						alignSelf: 'end',
						gridColumnStart: [5, null, 1],
						gridColumnEnd: [-1, null, 4],
					}}
				>
					{photoSrc && (
						<Image
							src={photoSrc}
							alt={photoAlt ?? ''}
							layout="fullWidth"
							className={imgStyles}
							sizes="(min-width: 500px) 500px, 100vw"
						/>
					)}
				</Box>
				<Box
					as="figure"
					styles={{
						gridColumn: ['span-4', null, 'span-8'],
						display: 'grid',
						gap: [6, 8],
						justifyItems: 'start',
						paddingTop: [1, 2],
					}}
				>
					<Box styles={{ display: 'grid', gap: 5 }}>
						{quote && (
							<Text as="blockquote" variant="serif-20-24">
								<Box as="span" className={commonStyles.dquotSurround}>
									{quote}
								</Box>
							</Text>
						)}
						{credit && (
							<Text
								as="figcaption"
								variant="sans-16-caps"
								styles={{ color: 'gray40', maxWidth: ['30ch', 'none'] }}
							>
								{credit}
							</Text>
						)}
					</Box>
					{buttonHref && (
						<ButtonLink href={buttonHref} variant="orange">
							{buttonText}
						</ButtonLink>
					)}
				</Box>
			</Box>
		</BoundedBox>
	)
}

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	PageBodyHeadshotQuoteFragment,
	typeof mapDataToContext
>) => ({
	quote: data.primary?.quote?.text,
	credit: data.primary?.credit?.text,
	buttonText: undefIfEmpty(data.primary?.button_text?.text),
	buttonHref: data.primary?.button_link?.url,
	photoSrc: data.primary?.photo?.url,
	photoAlt: data.primary?.photo?.alt,
})

export const mapDataToContext = () => ({
	bg: Symbol(),
})

export const fragment = graphql`
	fragment PageBodyHeadshotQuote on PrismicPageDataBodyHeadshotQuote {
		primary {
			quote {
				text
			}
			credit {
				text
			}
			button_link {
				url
			}
			button_text {
				text
			}
			photo {
				alt
				url
			}
		}
	}
`

export default PageBodyHeadshotQuote
