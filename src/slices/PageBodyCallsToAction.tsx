import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { PageBodyCallsToActionFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { ImageWithTextOverlay } from '../components/ImageWithTextOverlay'

export type PageBodyCallsToActionProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

export const PageBodyCallsToAction = ({
	children,
	id,
}: PageBodyCallsToActionProps) => (
	<Box
		as="section"
		id={id}
		styles={{
			maxWidth: 'xlarge',
			marginLeft: 'auto',
			marginRight: 'auto',
			position: 'relative',
		}}
	>
		<Box styles={{ display: 'flex', flexDirection: ['column', 'row'] }}>
			{children}
		</Box>
	</Box>
)

type CTAProps = {
	label?: string
	textHTML?: string
	buttonHref?: string
	buttonText?: string
	backgroundImageSrc?: string
	backgroundImageAlt?: string
}

const CTA = ({
	label,
	textHTML,
	buttonHref,
	buttonText,
	backgroundImageSrc,
	backgroundImageAlt,
}: CTAProps) => (
	<Box styles={{ flex: [null, 'equal0'] }}>
		<ImageWithTextOverlay
			variant="small"
			label={label}
			textHTML={textHTML}
			buttonHref={buttonHref}
			buttonText={buttonText}
			imageSrc={backgroundImageSrc}
			imageAlt={backgroundImageAlt}
			withImageGradientOverlay={true}
			styles={{ height: 'full' }}
		/>
	</Box>
)
PageBodyCallsToAction.CTA = CTA

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	PageBodyCallsToActionFragment,
	typeof mapDataToContext
>) => ({
	children: data?.items?.map?.((item) => (
		<PageBodyCallsToAction.CTA
			key={item?.text?.text}
			label={item?.label?.text}
			textHTML={getRichText(item?.text)}
			buttonText={undefIfEmpty(item?.button_text?.text)}
			buttonHref={item?.button_link?.url}
			backgroundImageSrc={item?.background_image?.url}
			backgroundImageAlt={item?.background_image?.alt}
		/>
	)) as React.ReactNode,
})

export const mapDataToContext = () => ({
	bg: Symbol(),
})

export const fragment = graphql`
	fragment PageBodyCallsToAction on PrismicPageDataBodyCallsToAction {
		items {
			label {
				text
			}
			text {
				text
				html
			}
			button_text {
				text
			}
			button_link {
				url
			}
			background_image {
				alt
				url
			}
		}
	}
`

export default PageBodyCallsToAction
