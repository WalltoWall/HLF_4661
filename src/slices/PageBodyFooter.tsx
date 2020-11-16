import * as React from 'react'
import { useStyles } from 'react-treat'

import { useSiteSettings } from '../hooks/useSiteSettings'
import { useNavigation } from '../hooks/useNavigation'
import { PageTemplateEnhancerProps } from '../templates/page'

import { Anchor } from '../components/Anchor'
import { BoundedBox } from '../components/BoundedBox'
import { Icon } from '../components/Icon'
import { Inline } from '../components/Inline'
import { Link } from '../components/Link'
import { Text } from '../components/Text'

import * as styleRefs from './PageBodyFooter.treat'

export type PageBodyFooter = PageTemplateEnhancerProps

const PageBodyFooter = ({ nextSharesBg }: PageBodyFooter) => {
  const styles = useStyles(styleRefs)
  const siteSettings = useSiteSettings()
  const navigation = useNavigation()

  return (
    <BoundedBox
      as="footer"
      variant="extraNarrow"
      nextSharesBg={nextSharesBg}
      className={styles.transparentBlackBackground}
      styles={{
        color: 'white',
        maxWidth: 'xlarge',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Inline
        space={4}
        direction={['column', null, 'row']}
        wrap={false}
        alignY="center"
        align="spaceBetween"
      >
        <Inline space={4} direction={['column', null, 'row']} alignY="center">
          <Text variant="sans-13-14" styles={{ textAlign: 'center' }}>
            {siteSettings.siteCopyright}
          </Text>
          <Inline variant="ul" space={4} align="center">
            {navigation.footer.map(
              (item) =>
                item?.primary?.link?.url && (
                  <Anchor key={item.primary.name} href={item.primary.link.url}>
                    <Text variant="sans-13-14">{item.primary.name}</Text>
                  </Anchor>
                ),
            )}
          </Inline>
        </Inline>
        <Inline space={4} direction={['column', null, 'row']} alignY="center">
          <Inline variant="ul" space={3} align="center">
            <Link href={siteSettings.facebookURL}>
              <Icon name="facebookColored" styles={{ width: '1.5rem' }} />
            </Link>
            <Link href={siteSettings.linkedinURL}>
              <Icon name="linkedinColored" styles={{ width: '1.5rem' }} />
            </Link>
          </Inline>
          <Text variant="sans-13-14" styles={{ textAlign: 'center' }}>
            Website design & development by{' '}
            <Anchor href="https://walltowall.com">Wall-to-Wall Studios</Anchor>
          </Text>
        </Inline>
      </Inline>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: Symbol(),
})

export default PageBodyFooter
