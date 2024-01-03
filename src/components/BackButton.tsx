import * as React from 'react'

import { Text } from './Text'
import { Anchor, AnchorProps } from './Anchor'
import { Inline } from './Inline'
import { Icon } from './Icon'

type BackButtonProps = AnchorProps

export const BackButton = ({ children, ...props }: BackButtonProps) => (
	<Anchor {...props}>
		<Inline space={[2, 3]} alignY="center">
			<Icon
				name="triangleLeft"
				styles={{ width: '0.5rem' }}
				style={{ width: '0.4rem' }}
			/>
			<Text variant="serif-14-16">{children}</Text>
		</Inline>
	</Anchor>
)
