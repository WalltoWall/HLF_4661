import React from 'react'

import PageBodyFooter from './PageBodyFooter'

// This slice is documented under Components, not Pages, since this isn't an
// editor-facing slice.
export default {
  title: 'Components/Footer',
  component: PageBodyFooter,
}

export const Default = () => <PageBodyFooter nextSharesBg={false} />
