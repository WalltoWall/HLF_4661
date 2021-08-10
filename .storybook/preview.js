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
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
      // The "---" indicate where dividers are added using CSS in ./manager.css
      order: [
        'Documentation',
        ['How to Use'],
        // ---
        'Pages',
        ['About Pages', 'All slices'],
        'Interior Pages',
        ['About Interior Pages', 'All slices', 'Header'],
        'Projects',
        ['About Projects', 'All slices'],
        'News Posts',
        ['About News Posts', 'All slices'],
        'Document Types',
        // ---
        'Style Guide',
        'Components',
      ],
    },
  },
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment
global.__BASE_PATH__ = '/'

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't
// inside a storybook
global.___navigate = (pathname) => {
  console.log('Navigate to: ', pathname)
}
