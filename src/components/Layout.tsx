import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SkipNavLink } from '@reach/skip-nav'
import { Box } from '@walltowall/calico'

import { Text } from './Text'
import { DevPanel } from './DevPanel'

import { useSiteSettings } from '../hooks/useSiteSettings'

export type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const settings = useSiteSettings()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{settings.siteName}</title>
        <meta name="description" content={settings.siteDescription} />
      </Helmet>
      <SkipNavLink>
        <Text>Skip to content</Text>
      </SkipNavLink>
      <Box
        as="main"
        styles={{
          fontFamily: 'sans',
          color: 'black',
        }}
      >
        {children}
      </Box>
      {process.env.NODE_ENV === 'development' && <DevPanel />}
    </>
  )
}
