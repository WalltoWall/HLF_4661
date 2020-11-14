import * as React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { TreatProvider } from 'react-treat'

import { theme } from '../src/theme.treat'

import '../src/global'
import './preview.css'

const rootSortOrder = [
  'Documentation',
  // ---
  'Pages',
  'Document Types',
  // ---
  'Style Guide',
  'Components',
]

addDecorator((storyFn) => (
  <TreatProvider theme={theme}>{storyFn()}</TreatProvider>
))

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => {
      const byRoot =
        rootSortOrder.findIndex((root) => root === a[1].kind.split('/')[0]) -
        rootSortOrder.findIndex((root) => root === b[1].kind.split('/')[0])

      if (byRoot !== 0) return byRoot

      if (a[1].parameters.docsOnly && !b[1].parameters.docsOnly) return -1
      if (!a[1].parameters.docsOnly && b[1].parameters.docsOnly) return 1

      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
    },
  },
})

declare global {
  var ___loader: {
    enqueue: Function
    hovering: Function
  }
  var __PATH_PREFIX__: string
  var __BASE_PATH__: string
  var ___navigate: (pathname: string) => void
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here
window.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment
window.__PATH_PREFIX__ = ''
window.__BASE_PATH__ = ''

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't
// inside a storybook
window.___navigate = (pathname) => {
  // action('NavigateTo:')(pathname)
}
