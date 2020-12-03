import * as React from 'react'

import {
  InteriorPageBodyDivider,
  InteriorPageBodyDividerProps,
  mapDataToContext,
} from './InteriorPageBodyDivider'

export type NewsPostBodyDividerProps = InteriorPageBodyDividerProps

export const NewsPostBodyDivider = (props: NewsPostBodyDividerProps) => (
  <InteriorPageBodyDivider {...props} />
)

export { mapDataToContext }

export default NewsPostBodyDivider
