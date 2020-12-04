import * as React from 'react'

import {
  InteriorPageBodyDivider,
  InteriorPageBodyDividerProps,
  mapDataToContext,
} from './InteriorPageBodyDivider'

export type ProjectBodyDividerProps = InteriorPageBodyDividerProps

export const ProjectBodyDivider = (props: ProjectBodyDividerProps) => (
  <InteriorPageBodyDivider {...props} />
)

export { mapDataToContext }

export default ProjectBodyDivider
