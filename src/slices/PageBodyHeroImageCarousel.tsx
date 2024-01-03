import * as React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { graphql } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { Box } from '@walltowall/calico'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'
import { useKeenSlider } from 'keen-slider/react'

import { PageBodyHeroImageCarouselFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { useInterval } from '../hooks/useInterval'

import { ImageWithTextOverlay } from '../components/ImageWithTextOverlay'

const SLIDE_DURATION = 7000

export type PageBodyHeroImageCarouselProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

export const PageBodyHeroImageCarousel = ({
	children,
	id,
}: PageBodyHeroImageCarouselProps) => {
	const [activeSlideIndex, setActiveSlideIndex] = React.useState(0)
	const slideCount = React.Children.count(children)
	const [start, stop] = useInterval(() => slider.next(), SLIDE_DURATION)
	const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
		loop: true,
		controls: false,
		slideChanged: (instance) =>
			setActiveSlideIndex(instance.details().relativeSlide),
	})

	const moveToSlide = (index: number) => {
		slider.moveToSlide(index)

		// Reset the timer
		stop()
		start()
	}

	return (
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
			<Box ref={sliderRef} className="keen-slider">
				{children}
			</Box>
			<Box
				as="ul"
				styles={{
					display: 'grid',
					gridAutoFlow: 'column',
					justifyContent: 'center',
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					marginBottom: 4,
				}}
			>
				{Array(slideCount)
					.fill(undefined)
					.map((_, i) => (
						<Box
							key={i}
							as="button"
							onClick={() => moveToSlide(i)}
							styles={{
								padding: 2,
								opacity: activeSlideIndex === i ? 75 : 25,
								transitionProperty: 'opacity',
								transitionDuration: 'normal',
								transitionTimingFunction: 'easeOut',
							}}
							focusStyles={{ opacity: 100 }}
							hoverStyles={{ opacity: 100 }}
						>
							<VisuallyHidden>Go to slide {i + 1}</VisuallyHidden>
							<Box
								styles={{
									width: '0.5rem',
									height: '0.5rem',
									borderRadius: '50%',
									backgroundColor: 'white',
								}}
							/>
						</Box>
					))}
			</Box>
		</Box>
	)
}

type SlideProps = {
	textHTML?: string
	buttonHref?: string
	buttonText?: string
	backgroundImageData?: IGatsbyImageData
	backgroundImageAlt?: string
}

const Slide = ({
	textHTML,
	buttonHref,
	buttonText,
	backgroundImageData,
	backgroundImageAlt,
}: SlideProps) => (
	<Box className="keen-slider__slide">
		<ImageWithTextOverlay
			textHTML={textHTML}
			buttonHref={buttonHref}
			buttonText={buttonText}
			imageData={backgroundImageData}
			imageAlt={backgroundImageAlt}
			styles={{ height: 'full' }}
		/>
	</Box>
)
PageBodyHeroImageCarousel.Slide = Slide

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	PageBodyHeroImageCarouselFragment,
	typeof mapDataToContext
>) => ({
	children: data?.items?.map?.((item) => (
		<PageBodyHeroImageCarousel.Slide
			key={item?.text?.text}
			textHTML={getRichText(item?.text)}
			buttonText={undefIfEmpty(item?.button_text?.text)}
			buttonHref={item?.button_link?.url}
			backgroundImageData={
				item?.background_image?.gatsbyImageData as IGatsbyImageData
			}
			backgroundImageAlt={item?.background_image?.alt}
		/>
	)) as React.ReactNode,
})

export const mapDataToContext = () => ({
	bg: Symbol(),
})

export const fragment = graphql`
	fragment PageBodyHeroImageCarousel on PrismicPageDataBodyHeroImageCarousel {
		items {
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
				gatsbyImageData(
					placeholder: BLURRED
					width: 1200
					breakpoints: [360, 720, 1200]
				)
			}
		}
	}
`

export default PageBodyHeroImageCarousel
