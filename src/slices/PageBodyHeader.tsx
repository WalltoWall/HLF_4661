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

import { PageTemplateEnhancerProps } from '../templates/page'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { useNavigation } from '../hooks/useNavigation'

import { Anchor, AnchorProps } from '../components/Anchor'
import { BoundedBox } from '../components/BoundedBox'
import { HamburgerIcon } from '../components/HamburgerIcon'
import { Icon } from '../components/Icon'
import { Inline } from '../components/Inline'
import { Link } from '../components/Link'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'

import * as styleRefs from './PageBodyHeader.treat'

const SEARCH_URL = withPrefix('/search/')

type MobileNavItemProps = {
  href: AnchorProps['href']
  name?: string
  children?: React.ReactNode
}

const MobileNavItem = ({ href, name, children }: MobileNavItemProps) => {
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
            <Text variant="sans-16-caps">{name}</Text>
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

type MobileNavItemChildProps = {
  href: AnchorProps['href']
  name?: string
}

const MobileNavItemChild = ({ href, name }: MobileNavItemChildProps) => (
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
      <Text variant="sans-16-caps">{name}</Text>
    </Anchor>
  </Box>
)

const secondaryNavItemVariants = {
  gray: { color: 'gray40' },
  orange: { color: 'orange55' },
} as const

type SecondaryNavItemProps = {
  href: AnchorProps['href']
  name?: string
  variant?: keyof typeof secondaryNavItemVariants
}

const SecondaryNavItem = ({
  href,
  name,
  variant: variantName = 'gray',
}: SecondaryNavItemProps) => {
  const variant = secondaryNavItemVariants[variantName]

  return (
    <Anchor href={href} styles={{ color: variant.color }}>
      <Text variant="sans-12-caps">{name}</Text>
    </Anchor>
  )
}

type NavItemProps = {
  href: AnchorProps['href']
  name?: string
  children?: React.ReactNode
}

const NavItem = ({ href, name, children }: NavItemProps) => {
  const styles = useStyles(styleRefs)
  const hasChildren = React.Children.count(children) > 0

  return (
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
        className={styles.navFocusSensor}
        styles={{
          color: 'white',
          display: 'block',
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Text variant="sans-13-14-bold-caps">{name}</Text>
      </Anchor>
      {hasChildren && (
        <Box
          as="ul"
          className={clsx(styles.navFocusTarget, styles.shadow)}
          styles={{
            backgroundColor: 'white',
            opacity: 0,
            pointerEvents: 'none',
            position: 'absolute',
            top: '100%',
            right: 0,
            marginRight: -2,
            paddingTop: 3,
            paddingBottom: 2.5,
            minWidth: '14rem',
            transitionDuration: 'slow',
            transitionTimingFunction: 'easeInOut',
            zIndex: 1,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

type NavItemChildProps = {
  href: AnchorProps['href']
  name?: string
}

const NavItemChild = ({ href, name }: NavItemChildProps) => (
  <Box as="li">
    <Anchor
      href={href}
      styles={{
        color: 'gray40',
        display: 'block',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Text
        variant="sans-13-14-bold-caps"
        styles={{ textAlign: 'right', whiteSpace: 'nowrap' }}
      >
        {name}
      </Text>
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

  const mobileSearchQueryInputId = useId()
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
      <Box
        as="header"
        styles={{
          maxWidth: 'xlarge',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Box
          styles={{
            display: ['none', 'flex'],
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <BoundedBox
            styles={{
              paddingTop: 3,
              paddingBottom: 3,
              paddingRight: 5,
              flexGrow: 1,
            }}
          >
            <Inline as="nav" variant="ul" space={5} align="end">
              {navigation.secondary.map(
                (item) =>
                  item?.primary?.link?.url && (
                    <SecondaryNavItem
                      key={item.primary.name}
                      name={item.primary.name}
                      href={item.primary.link.url}
                    />
                  ),
              )}
              {siteSettings.newsletterSignUpHref && (
                <SecondaryNavItem
                  name="Sign Up for Updates"
                  href={siteSettings.newsletterSignUpHref}
                  variant="orange"
                />
              )}
            </Inline>
          </BoundedBox>
          <Box
            as="form"
            action={SEARCH_URL}
            method="get"
            role="search"
            onSubmit={onSearchSubmit}
            styles={{ flexShrink: 0 }}
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
                  backgroundColor: 'gray85',
                  fontFamily: 'sans',
                  paddingTop: 2.5,
                  paddingBottom: 2.5,
                  paddingLeft: 9,
                  paddingRight: 4,
                  lineHeight: 1,
                  fontSize: '0.875rem',
                  color: 'gray40',
                  width: '10rem',
                }}
              />
              <Icon
                name="search"
                className={styles.verticallyCenter}
                styles={{
                  width: '1rem',
                  color: 'gray40',
                  position: 'absolute',
                  marginLeft: 3,
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box styles={{ backgroundColor: 'orange50', height: '0.375rem' }} />
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
              <Box
                styles={{
                  maxWidth: ['15rem', null, '20rem'],
                  paddingTop: 1,
                }}
              >
                <Link href={withPrefix('/')}>
                  <VisuallyHidden>{siteSettings.siteName}</VisuallyHidden>
                  <Logo
                    trimNegativeSpace={true}
                    styles={{ marginLeft: [null, -1] }}
                  />
                </Link>
              </Box>
              <Box styles={{ display: ['none', 'block'] }}>
                <Inline as="nav" variant="ul" space={[4, 4, 6]}>
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
                </Inline>
              </Box>
              <Box styles={{ display: ['flex', 'none'], alignItems: 'center' }}>
                <DisclosureButton>
                  <VisuallyHidden>Navigation</VisuallyHidden>
                  <HamburgerIcon isActive={mobileNavIsOpen} />
                </DisclosureButton>
              </Box>
            </Box>
          </BoundedBox>
          <DisclosurePanel>
            <Box styles={{ display: [null, 'none'] }}>
              <Box as="nav">
                <Box as="ul">
                  {navigation.primary.map(
                    (item) =>
                      item?.primary?.link?.url && (
                        <MobileNavItem
                          key={item.primary.name}
                          name={item.primary.name}
                          href={item.primary.link.url}
                        >
                          {(item?.items ?? []).map(
                            (child) =>
                              child?.link?.url && (
                                <MobileNavItemChild
                                  key={child.name}
                                  name={child.name}
                                  href={child.link.url}
                                />
                              ),
                          )}
                        </MobileNavItem>
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
                  <label htmlFor={mobileSearchQueryInputId}>Search</label>
                </VisuallyHidden>
                <Box styles={{ position: 'relative' }}>
                  <Box
                    as="input"
                    name="query"
                    id={mobileSearchQueryInputId}
                    placeholder="Search&hellip;"
                    value={searchQuery}
                    onChange={onSearchQueryChange}
                    className={styles.placeholderColor}
                    styles={{
                      backgroundColor: 'white',
                      fontFamily: 'sans',
                      paddingTop: 4,
                      paddingBottom: 4,
                      paddingLeft: 12,
                      paddingRight: 4,
                      lineHeight: 1,
                      fontSize: '1rem',
                      color: 'gray40',
                      width: 'full',
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
              display: [null, 'none'],
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
              <Text variant="sans-16-caps" as="span">
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
