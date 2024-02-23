import React from 'react'
import { graphql } from 'gatsby'
import { Box, useBoxStyles } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'
import { useKeenSlider } from 'keen-slider/react'
import { Image as UnpicImage } from '@unpic/react'

import { PageBodyImageCarouselFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { AspectRatio } from '@walltowall/siamese'
import { Icon } from '../components/Icon'
import { Text } from '../components/Text'

export type PageBodyImageCarouselProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

export const PageBodyImageCarousel = ({
	children,
	nextSharesBg,
}: PageBodyImageCarouselProps) => {
	const [slideIndex, setSlideIndex] = React.useState(0)
	const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
		loop: true,
		slideChanged: (instance) => setSlideIndex(instance.details().relativeSlide),
	})
	const slideCount = React.Children.count(children)

	const goToNextSlide = () => slider.next()
	const goToPreviousSlide = () => slider.prev()

	return (
		<BoundedBox
			as="section"
			nextSharesBg={nextSharesBg}
			styles={{
				backgroundColor: 'white',
				maxWidth: 'xlarge',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Box
				styles={{
					display: 'grid',
					gap: [4, 6],
					gridTemplateColumns: 'auto 1fr auto',
					alignItems: 'center',
				}}
			>
				<Box>
					<Box as="button" onClick={goToPreviousSlide}>
						<Icon
							name="triangleLeft"
							styles={{
								width: ['0.75rem', '1rem'],
								color: 'orange55',
								transitionDuration: 'normal',
								transitionProperty: 'color',
								transitionTimingFunction: 'easeOut',
							}}
							focusStyles={{ color: 'orange50' }}
							hoverStyles={{ color: 'orange50' }}
						/>
					</Box>
				</Box>
				<Box ref={sliderRef} as="ul" className="keen-slider">
					{children}
				</Box>
				<Box>
					<Box as="button" onClick={goToNextSlide}>
						<Icon
							name="triangleRight"
							styles={{
								width: ['0.75rem', '1rem'],
								color: 'orange55',
								transitionDuration: 'normal',
								transitionProperty: 'color',
								transitionTimingFunction: 'easeOut',
							}}
							focusStyles={{ color: 'orange50' }}
							hoverStyles={{ color: 'orange50' }}
						/>
					</Box>
				</Box>
				<Box styles={{ gridColumn: 'span-3' }}>
					<Text
						variant="sans-13-14-caps"
						styles={{ color: 'gray40', textAlign: 'center' }}
					>
						Slide {slideIndex + 1} of {slideCount}
					</Text>
				</Box>
			</Box>
		</BoundedBox>
	)
}

export type PageBodyImageCarouselImageProps = {
	captionHTML?: string
	imageSrc?: string
	imageAlt?: string
}

const Image = ({
	captionHTML,
	imageSrc,
	imageAlt,
}: PageBodyImageCarouselImageProps) => {
	const imgStyles = useBoxStyles({
		width: 'full',
		height: 'full',
		objectFit: 'contain',
	})

	return (
		<Box
			as="figure"
			className="keen-slider__slide"
			styles={{ display: 'grid', gap: [4, 5, 7], cursor: 'grab' }}
		>
			<Box as={AspectRatio} x={860} y={570}>
				{imageSrc && (
					<UnpicImage
						src={imageSrc}
						alt={imageAlt ?? ''}
						className={imgStyles}
						layout="fullWidth"
						sizes="(min-width: 1080px) 1080px, 100vw"
					/>
				)}
			</Box>
			{captionHTML && (
				<HTMLContent
					as="figcaption"
					html={captionHTML}
					componentOverrides={{
						p: (Comp) => (props) => <Comp variant="serif-14-16" {...props} />,
					}}
					styles={{
						color: 'gray40',
						textAlign: 'center',
						// Used to prevent text clipping due to `overflow: hidden`
						paddingBottom: 1,
					}}
				/>
			)}
		</Box>
	)
}

PageBodyImageCarousel.Image = Image

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	PageBodyImageCarouselFragment,
	typeof mapDataToContext
>) => ({
	children: data?.items?.map((item) => (
		<PageBodyImageCarousel.Image
			key={item?.image?.url}
			imageSrc={item?.image?.url}
			imageAlt={undefIfEmpty(item?.image?.alt) as string | undefined}
			captionHTML={getRichText(item?.caption)}
		/>
	)) as React.ReactNode,
})

export const mapDataToContext = () => ({
	bg: 'white',
})

export const fragment = graphql`
	fragment PageBodyImageCarousel on PrismicPageDataBodyImageCarousel {
		items {
			image {
				alt
				url
			}
			caption {
				html
				text
			}
		}
	}
`

export default PageBodyImageCarousel
