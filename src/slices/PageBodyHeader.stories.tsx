import * as React from 'react'

import PageBodyHeader from './PageBodyHeader'

// This slice is documented under Components, not Pages, since this isn't an
// editor-facing slice.
export default {
  title: 'Components/Header',
  component: PageBodyHeader,
}

export const Default = () => <PageBodyHeader nextSharesBg={false} />
