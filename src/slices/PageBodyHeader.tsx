import * as React from 'react'
import { navigate, withPrefix } from 'gatsby'
import { useStyles } from 'react-treat'
import { Box } from '@walltowall/calico'
import VisuallyHidden from '@reach/visually-hidden'
import { SkipNavContent } from '@reach/skip-nav'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import { useId } from '@reach/auto-id'
import querystring from 'querystring'
import clsx from 'clsx'

import { useSiteSettings } from '../hooks/useSiteSettings'
import { PageTemplateEnhancerProps } from '../templates/page'
import { useNavigation } from '../hooks/useNavigation'

import { BoundedBox } from '../components/BoundedBox'
import { Link } from '../components/Link'
import { HamburgerIcon } from '../components/HamburgerIcon'
import { Text } from '../components/Text'
import { Anchor, AnchorProps } from '../components/Anchor'
import { Logo } from '../components/Logo'
import { Icon } from '../components/Icon'

import * as styleRefs from './PageBodyHeader.treat'

const SEARCH_URL = withPrefix('/search/')

type NavItemProps = {
  href: AnchorProps['href']
  name?: string
  children?: React.ReactNode
}

const NavItem = ({ href, name, children }: NavItemProps) => {
  const [isOpen, toggleIsOpen] = React.useReducer((state) => !state, false)

  const styles = useStyles(styleRefs)
  const hasChildren = React.Children.count(children) > 0

  return (
    <Box
      as="li"
      styles={{
        backgroundColor: 'white',
        borderWidth: 'none',
        borderBottomWidth: '3px',
        borderColor: 'gray85',
        borderStyle: 'solid',
      }}
    >
      <Disclosure open={isOpen} onChange={toggleIsOpen}>
        <Box styles={{ display: 'flex' }}>
          <Anchor
            href={href}
            styles={{
              flexGrow: 1,
              color: 'gray40',
              paddingLeft: 4,
              paddingRight: 4,
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text variant="sans-caps-16">{name}</Text>
          </Anchor>
          {hasChildren && (
            <Box
              as={DisclosureButton}
              styles={{
                flexShrink: 0,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <VisuallyHidden>Child navigation</VisuallyHidden>
              <Icon
                name="chevronDown"
                className={clsx(isOpen && styles.flipH)}
                styles={{
                  color: 'gray40',
                  width: '1.25rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  transitionProperty: 'transform',
                  transitionDuration: 'normal',
                }}
              />
            </Box>
          )}
        </Box>
        {hasChildren && (
          <DisclosurePanel>
            <Box
              as="ul"
              styles={{
                borderWidth: 'none',
                borderTopWidth: '2px',
                borderColor: 'gray85',
                borderStyle: 'solid',
              }}
            >
              {children}
            </Box>
          </DisclosurePanel>
        )}
      </Disclosure>
    </Box>
  )
}

type NavItemChildProps = {
  href: AnchorProps['href']
  name?: string
}

const NavItemChild = ({ href, name }: NavItemChildProps) => (
  <Box
    as="li"
    styles={{
      backgroundColor: 'gray95',
      borderWidth: 'none',
      borderTopWidth: '1px',
      borderColor: 'gray85',
      borderStyle: 'solid',
    }}
  >
    <Anchor
      href={href}
      styles={{
        display: 'block',
        color: 'gray40',
        paddingLeft: 8,
        paddingRight: 4,
        paddingBottom: 3.5,
        paddingTop: 3.5,
      }}
    >
      <Text variant="sans-caps-16">{name}</Text>
    </Anchor>
  </Box>
)

export type PageBodyHeaderProps = PageTemplateEnhancerProps

const PageBodyHeader = ({ nextSharesBg }: PageBodyHeaderProps) => {
  const [mobileNavIsOpen, toggleMobileNavIsOpen] = React.useReducer(
    (state) => !state,
    false,
  )
  const [searchQuery, setSearchQuery] = React.useState('')

  const styles = useStyles(styleRefs)
  const siteSettings = useSiteSettings()
  const navigation = useNavigation()
  const searchQueryInputId = useId()

  const onSearchQueryChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchQuery(event.currentTarget.value)

  const onSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const path = searchQuery
      ? `${SEARCH_URL}?${querystring.encode({ query: searchQuery })}`
      : SEARCH_URL

    navigate(path)
  }

  return (
    <>
      <Box as="header">
        <Disclosure open={mobileNavIsOpen} onChange={toggleMobileNavIsOpen}>
          <BoundedBox
            nextSharesBg={nextSharesBg}
            styles={{
              backgroundColor: 'blue10',
              color: 'white',
              paddingTop: 6,
              paddingBottom: 6,
            }}
          >
            <Box
              styles={{
                display: 'grid',
                gap: 8,
                alignItems: 'center',
                gridTemplateColumns: '1fr auto',
              }}
            >
              <Box styles={{ maxWidth: '15rem', paddingTop: 1 }}>
                <Link href="/">
                  <VisuallyHidden>{siteSettings.siteName}</VisuallyHidden>
                  <Logo trimNegativeSpace={true} />
                </Link>
              </Box>
              <DisclosureButton>
                <VisuallyHidden>Navigation</VisuallyHidden>
                <HamburgerIcon isActive={mobileNavIsOpen} />
              </DisclosureButton>
            </Box>
          </BoundedBox>
          <DisclosurePanel>
            <Box>
              <Box as="nav">
                <Box as="ul">
                  {navigation.primary.map(
                    (item) =>
                      item?.primary?.link?.url && (
                        <NavItem
                          key={item.primary.name}
                          name={item.primary.name}
                          href={item.primary.link.url}
                        >
                          {(item?.items ?? []).map(
                            (child) =>
                              child?.link?.url && (
                                <NavItemChild
                                  key={child.name}
                                  name={child.name}
                                  href={child.link.url}
                                />
                              ),
                          )}
                        </NavItem>
                      ),
                  )}
                </Box>
              </Box>
              <Box
                as="form"
                action={SEARCH_URL}
                method="get"
                role="search"
                onSubmit={onSearchSubmit}
              >
                <VisuallyHidden>
                  <label htmlFor={searchQueryInputId}>Search</label>
                </VisuallyHidden>
                <Box styles={{ position: 'relative' }}>
                  <Box
                    as="input"
                    name="query"
                    id={searchQueryInputId}
                    placeholder="Search&hellip;"
                    value={searchQuery}
                    onChange={onSearchQueryChange}
                    className={styles.placeholderColor}
                    styles={{
                      fontFamily: 'sans',
                      paddingTop: 4,
                      paddingBottom: 4,
                      paddingLeft: 12,
                      paddingRight: 4,
                      lineHeight: 1,
                      fontSize: '1rem',
                      color: 'gray40',
                    }}
                  />
                  <Icon
                    name="search"
                    className={styles.verticallyCenter}
                    styles={{
                      width: '1.25rem',
                      color: 'gray80',
                      position: 'absolute',
                      marginLeft: 4,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </DisclosurePanel>
        </Disclosure>
        {siteSettings.newsletterSignUpHref && (
          <BoundedBox
            styles={{
              backgroundColor: 'gray85',
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <Anchor
              href={siteSettings.newsletterSignUpHref}
              styles={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
              }}
            >
              <Text variant="sans-caps-16" as="span">
                Sign Up for Updates
              </Text>
            </Anchor>
          </BoundedBox>
        )}
      </Box>
      <SkipNavContent />
    </>
  )
}

export const mapDataToContext = () => ({
  bg: [Symbol(), 'blue10'],
})

export default PageBodyHeader
