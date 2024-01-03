import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { PageBodyTextFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type PageBodyTextProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

const PageBodyText = ({ textHTML, nextSharesBg }: PageBodyTextProps) => (
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
		{textHTML && (
			<HTMLContent
				html={textHTML}
				componentOverrides={{
					h1: (Comp) => (props) =>
						(
							<Comp
								variant="serif-40-48"
								{...props}
								styles={{ color: 'gray10', maxWidth: 'large', ...props.styles }}
							/>
						),
					h2: (Comp) => (props) =>
						(
							<Comp
								variant="sans-18-bold-caps"
								{...props}
								styles={{
									color: 'gray20',
									maxWidth: 'medium',
									...props.styles,
								}}
							/>
						),
					p: (Comp) => (props) =>
						(
							<Comp
								{...props}
								styles={{ maxWidth: 'medium', ...props.styles }}
							/>
						),
					ul: (Comp) => (props) =>
						(
							<Comp
								{...props}
								styles={{ maxWidth: 'medium', ...props.styles }}
							/>
						),
					ol: (Comp) => (props) =>
						(
							<Comp
								{...props}
								styles={{ maxWidth: 'medium', ...props.styles }}
							/>
						),
				}}
				styles={{ color: 'gray40' }}
			/>
		)}
	</BoundedBox>
)

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<PageBodyTextFragment, typeof mapDataToContext>) => ({
	textHTML: getRichText(data?.primary?.text),
})

export const mapDataToContext = () => ({
	bg: 'white',
})

export const fragment = graphql`
	fragment PageBodyText on PrismicPageDataBodyText {
		primary {
			text {
				text
				html
			}
		}
	}
`

export default PageBodyText
