import * as React from 'react'
import { useStyles } from 'react-treat'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useTabsContext,
} from '@reach/tabs'
import { Dialog } from '@reach/dialog'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'

import { PageTemplateEnhancerProps } from '../templates/page'
import { useFellows } from '../hooks/useFellows'
import { useCohorts } from '../hooks/useCohorts'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { HTMLContent } from '../components/HTMLContent'
import { Icon } from '../components/Icon'

import * as styleRefs from './PageBodyFellowsGrid.treat'

/**
 * Groups a list of records by their `cohortUID` field.
 */
const groupByCohort = <A extends { cohortUID?: string }>(as: A[]) =>
  R.fromFoldableMap(A.getMonoid<A>(), A.array)(as, (a) => [
    a.cohortUID ?? '',
    [a],
  ])

type FellowProps = {
  name?: string
  cohortTitle?: string
  biographyHTML?: string
  portraitFluid?: FluidObject
  portraitAlt?: string
  photoFluid?: FluidObject
  photoAlt?: string
  openFellowModal: () => void
}

const Fellow = ({
  name,
  cohortTitle,
  biographyHTML,
  portraitFluid,
  portraitAlt,
  photoFluid,
  photoAlt,
  openFellowModal,
}: FellowProps) => (
  <Box as="li">
    <Box
      as="button"
      onClick={openFellowModal}
      styles={{
        display: 'block',
        width: 'full',
        backgroundColor: 'white',
        padding: 3,
        paddingBottom: 5,
      }}
    >
      <Box
        as={AspectRatio}
        x={190}
        y={230}
        styles={{ backgroundColor: 'gray95', marginBottom: 3.5 }}
      >
        {portraitFluid && (
          <Box
            as={GatsbyImage}
            fluid={portraitFluid}
            alt={portraitAlt ?? name ? `Photo of ${name}` : undefined}
            styles={{ height: 'full', width: 'full' }}
          />
        )}
      </Box>
      <Box styles={{ display: 'grid', gap: 2 }}>
        {name && (
          <Text
            variant="sans-12-caps"
            styles={{ color: 'gray10', fontWeight: 'bold' }}
          >
            {name}
          </Text>
        )}
        {cohortTitle && (
          <Text
            variant="sans-12"
            styles={{ color: 'gray40', fontWeight: 'bold' }}
          >
            {cohortTitle}
          </Text>
        )}
      </Box>
    </Box>
  </Box>
)

type FellowsGridProps = {
  children?: React.ReactNode
}

const FellowsGrid = ({ children }: FellowsGridProps) => (
  <Box
    as="ul"
    styles={{
      display: 'grid',
      gridTemplateColumns: [2, 3, 4, 5],
      gap: [3, 4],
    }}
  >
    {children}
  </Box>
)

type FellowsGridTabProps = {
  index: number
  children?: React.ReactNode
}

const FellowsGridTab = ({ index, children }: FellowsGridTabProps) => {
  const { selectedIndex } = useTabsContext()
  const isSelected = index === selectedIndex

  return (
    <Box
      styles={{
        paddingBottom: 2.5,
        borderWidth: 'none',
        borderBottomWidth: '3px',
        borderColor: isSelected ? 'orange55' : 'transparent',
        borderStyle: 'solid',
        transitionProperty: 'colorAndBorderColor',
        transitionDuration: 'normal',
        transitionTimingFunction: 'easeOut',
        color: isSelected ? 'gray10' : 'gray40',
      }}
      focusStyles={{ color: isSelected ? undefined : 'gray10' }}
      hoverStyles={{ color: isSelected ? undefined : 'gray10' }}
    >
      <Text
        variant="sans-16-caps"
        styles={{
          fontWeight: isSelected ? 'bold' : 'normal',
        }}
      >
        {children}
      </Text>
    </Box>
  )
}

export type PageBodyFellowsGridProps = PageTemplateEnhancerProps

export const PageBodyFellowsGrid = ({
  nextSharesBg,
}: PageBodyFellowsGridProps) => {
  const cohorts = useCohorts()
  const latestCohort = cohorts[cohorts.length - 1]

  const fellows = useFellows()
  const fellowsByCohort = React.useMemo(() => groupByCohort(fellows), [fellows])
  const fellowsOfLatestCohort = latestCohort.uid
    ? fellowsByCohort[latestCohort.uid] ?? []
    : []

  const [modalFellowUID, setModalFellowUID] = React.useState<string>()
  const modalFellow = React.useMemo(
    () => fellows.find((fellow) => fellow.uid === modalFellowUID),
    [fellows, modalFellowUID],
  )
  const isModalOpen = modalFellowUID !== undefined
  const openFellowModal = (fellowUID: string) => setModalFellowUID(fellowUID)
  const closeFellowModal = () => setModalFellowUID(undefined)

  const styles = useStyles(styleRefs)

  return (
    <BoundedBox
      as="section"
      nextSharesBg={nextSharesBg}
      styles={{
        backgroundColor: 'gray85',
        maxWidth: 'xlarge',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Box
        as={Dialog}
        aria-label="Selected fellow details"
        isOpen={isModalOpen}
        onDismiss={closeFellowModal}
        className={styles.shadow}
        styles={{
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'white',
          outline: 'none',
          width: 'full',
          maxWidth: 'large',
          position: 'relative',
          marginTop: [null, 12, 24],
          marginBottom: [null, 12, 24],
        }}
      >
        <Box
          as="button"
          onClick={closeFellowModal}
          styles={{
            position: 'absolute',
            top: 0,
            right: 0,
            marginTop: 6,
            marginRight: 6,
          }}
        >
          <Icon
            name="close"
            styles={{
              width: ['1.25rem', '1.5rem'],
              color: 'gray80',
              transitionProperty: 'color',
              transitionDuration: 'normal',
              transitionTimingFunction: 'easeOut',
            }}
            focusStyles={{ color: 'gray20' }}
            hoverStyles={{ color: 'gray20' }}
          />
        </Box>
        <Box
          styles={{
            display: 'grid',
            gridTemplateColumns: [null, 12],
            paddingTop: [10, 0],
            paddingLeft: [6, 0],
            paddingRight: [6, 0],
            paddingBottom: [12, 0],
          }}
        >
          <Box
            styles={{
              maxWidth: ['15rem', 'none'],
              width: 'full',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: [7, 0],
              gridColumn: [null, 'span-5'],
            }}
          >
            {modalFellow?.photoFluid && (
              <GatsbyImage
                fluid={modalFellow.photoFluid}
                alt={
                  modalFellow.photoAlt ?? modalFellow.name
                    ? `Photo of ${modalFellow.name}`
                    : undefined
                }
              />
            )}
          </Box>
          <Box
            styles={{
              paddingTop: [null, 10],
              paddingLeft: [null, 10],
              paddingRight: [null, 10],
              paddingBottom: [null, 14],
              gridColumn: [null, 'span-7'],
            }}
          >
            <Box styles={{ display: 'grid', gap: 7 }}>
              <Box styles={{ display: 'grid', gap: [3, 4] }}>
                {modalFellow?.name && (
                  <Text
                    as="h3"
                    variant="serif-20-24"
                    styles={{ color: 'gray10', textAlign: ['center', 'left'] }}
                  >
                    {modalFellow.name}
                  </Text>
                )}
                {modalFellow?.cohortTitle && (
                  <Text
                    variant="sans-13-14-bold-caps"
                    styles={{ color: 'gray40', textAlign: ['center', 'left'] }}
                  >
                    {modalFellow.cohortTitle}
                  </Text>
                )}
              </Box>
              {modalFellow?.biographyHTML && (
                <HTMLContent
                  html={modalFellow.biographyHTML}
                  styles={{ color: 'gray40', maxWidth: '70ch' }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Tabs>
        <Box
          as={TabList}
          styles={{
            display: 'grid',
            gap: [4, 6],
            gridAutoFlow: ['row', 'column'],
            justifyItems: 'center',
            justifyContent: 'center',
            marginBottom: [4, 6],
          }}
        >
          <Tab>
            <FellowsGridTab index={0}>Current Cohort</FellowsGridTab>
          </Tab>
          <Tab>
            <FellowsGridTab index={1}>Forum of Fellows</FellowsGridTab>
          </Tab>
        </Box>
        <TabPanels>
          <TabPanel>
            <FellowsGrid>
              {fellowsOfLatestCohort.map((fellow) => (
                <Fellow
                  key={fellow.uid}
                  name={fellow.name}
                  cohortTitle={fellow.cohortTitle}
                  biographyHTML={fellow.biographyHTML}
                  portraitFluid={fellow.portraitFluid}
                  portraitAlt={fellow.portraitAlt}
                  photoFluid={fellow.photoFluid}
                  photoAlt={fellow.photoAlt}
                  openFellowModal={() =>
                    fellow.uid && openFellowModal(fellow.uid)
                  }
                />
              ))}
            </FellowsGrid>
          </TabPanel>
          <TabPanel>
            <FellowsGrid>
              {fellows.map((fellow) => (
                <Fellow
                  key={fellow.uid}
                  name={fellow.name}
                  cohortTitle={fellow.cohortTitle}
                  biographyHTML={fellow.biographyHTML}
                  portraitFluid={fellow.portraitFluid}
                  portraitAlt={fellow.portraitAlt}
                  photoFluid={fellow.photoFluid}
                  photoAlt={fellow.photoAlt}
                  openFellowModal={() =>
                    fellow.uid && openFellowModal(fellow.uid)
                  }
                />
              ))}
            </FellowsGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: 'gray85',
})

export default PageBodyFellowsGrid
