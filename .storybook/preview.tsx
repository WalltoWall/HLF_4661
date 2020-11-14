import * as React from 'react'
import { addDecorator } from '@storybook/react'
import { TreatProvider } from 'react-treat'

import { theme } from '../src/theme.treat'

import '../src/global'
import './preview.css'

addDecorator((storyFn) => (
  <TreatProvider theme={theme}>{storyFn()}</TreatProvider>
))

export const parameters = {
  options: {
    storySort: {
      // The "---" indicate where dividers are added using CSS in ./manager.css
      order: [
        'Documentation',
        ['How to Use'],
        // ---
        'Pages',
        ['All slices'],
        'Document Types',
        // ---
        'Style Guide',
        'Components',
      ],
    },
  },
}

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
