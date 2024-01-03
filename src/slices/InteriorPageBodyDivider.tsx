import * as React from 'react'

import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { Divider } from '../components/Divider'

export type InteriorPageBodyDividerProps = PageTemplateEnhancerProps

export const InteriorPageBodyDivider = ({
	nextSharesBg,
	id,
}: InteriorPageBodyDividerProps) => (
	<BoundedBox
		as="section"
		variant="narrow"
		nextSharesBg={nextSharesBg}
		id={id}
		styles={{ backgroundColor: 'white' }}
	>
		<Divider />
	</BoundedBox>
)

export const mapDataToContext = () => ({
	bg: 'white',
})

export default InteriorPageBodyDivider
