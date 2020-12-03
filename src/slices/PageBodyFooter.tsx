import * as React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { Box } from '@walltowall/calico'

import { useSiteSettings } from '../hooks/useSiteSettings'
import { useNavigation } from '../hooks/useNavigation'
import { PageTemplateEnhancerProps } from '../templates/page'

import { Anchor, AnchorProps } from '../components/Anchor'
import { BoundedBox } from '../components/BoundedBox'
import { Icon } from '../components/Icon'
import { Inline } from '../components/Inline'
import { Link } from '../components/Link'
import { Text } from '../components/Text'
import { Logo } from '../components/Logo'
import { Divider } from '../components/Divider'

type NavItemProps = {
  href: AnchorProps['href']
  children?: string
}

const NavItem = ({ href, children }: NavItemProps) => (
  <Box
    styles={{
      position: 'relative',
      marginTop: -5,
      marginBottom: -5,
      marginLeft: -3,
      marginRight: -3,
    }}
  >
    <Anchor
      href={href}
      styles={{
        color: 'white',
        display: 'block',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 3,
        paddingRight: 3,
      }}
    >
      <Text variant="sans-13-14-bold-caps">{children}</Text>
    </Anchor>
  </Box>
)

export type PageBodyFooter = PageTemplateEnhancerProps

const PageBodyFooter = ({ nextSharesBg }: PageBodyFooter) => {
  const siteSettings = useSiteSettings()
  const navigation = useNavigation()

  return (
    <>
      <Box
        styles={{
          backgroundColor: 'orange50',
          height: '0.375rem',
          maxWidth: 'xlarge',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <BoundedBox
        as="footer"
        variant="extraNarrow"
        nextSharesBg={nextSharesBg}
        styles={{
          backgroundColor: 'blue10',
          color: 'white',
          maxWidth: 'xlarge',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Box
          styles={{
            display: 'grid',
            gridTemplateColumns: 12,
            gap: [4, 8, 12],
            rowGap: [8, 12, 20],
          }}
        >
          <Box styles={{ gridColumn: ['span-10', 'span-4'] }}>
            <Link href="/">
              <Logo
                styles={{
                  maxWidth: ['15rem', 'none'],
                  width: 'full',
                  marginLeft: [null, -1],
                }}
              />
            </Link>
          </Box>
          <Inline
            as="nav"
            variant="ul"
            space={[4, 4, 6]}
            align={[null, 'end']}
            styles={{
              gridColumn: ['span-12', 'span-8'],
              alignSelf: 'center',
              justifySelf: [null, 'end'],
            }}
          >
            {navigation.primary.map(
              (item) =>
                item?.primary?.link?.url && (
                  <NavItem key={item.primary.name} href={item.primary.link.url}>
                    {item.primary.name}
                  </NavItem>
                ),
            )}
          </Inline>
          <Box styles={{ gridColumn: 'span-12', marginBottom: [null, -2] }}>
            <Divider
              styles={{ marginBottom: 4, color: 'gray40', opacity: 50 }}
            />
            <Inline
              space={5}
              direction={['column', 'row']}
              align="spaceBetween"
              alignY="baseline"
            >
              <Inline space={3} alignY="center">
                <Text variant="sans-13-14">{siteSettings.siteCopyright}</Text>
                <Inline variant="ul" space={3}>
                  {navigation.footer.map(
                    (item) =>
                      item?.primary?.link?.url && (
                        <Anchor
                          key={item.primary.name}
                          href={item.primary.link.url}
                          styles={{ textDecoration: 'underline' }}
                        >
                          <Text variant="sans-13-14">{item.primary.name}</Text>
                        </Anchor>
                      ),
                  )}
                </Inline>
              </Inline>
              <Inline
                space={5}
                direction={['column', 'row']}
                alignY={[null, 'center']}
              >
                <Text
                  variant="sans-13-14"
                  styles={{ textAlign: [null, 'right'] }}
                >
                  Website design & development by{' '}
                  <Anchor
                    href="https://walltowall.com"
                    styles={{ textDecoration: 'underline' }}
                  >
                    Wall-to-Wall Studios
                  </Anchor>
                </Text>
                <Inline variant="ul" space={3}>
                  <Link href={siteSettings.facebookURL}>
                    <VisuallyHidden>
                      {siteSettings.siteName} Facebook Page
                    </VisuallyHidden>
                    <Icon name="facebookColored" styles={{ width: '1.5rem' }} />
                  </Link>
                  <Link href={siteSettings.linkedinURL}>
                    <VisuallyHidden>
                      {siteSettings.siteName} LinkedIn Page
                    </VisuallyHidden>
                    <Icon name="linkedinColored" styles={{ width: '1.5rem' }} />
                  </Link>
                </Inline>
              </Inline>
            </Inline>
          </Box>
        </Box>
      </BoundedBox>
    </>
  )
}

export const mapDataToContext = () => ({
  bg: Symbol(),
})

export default PageBodyFooter
