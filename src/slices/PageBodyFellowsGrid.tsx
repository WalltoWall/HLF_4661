import * as React from 'react'
import { navigate } from 'gatsby'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { useStyles } from 'react-treat'
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
import querystring from 'querystring'

import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { useFellows } from '../hooks/useFellows'
import { useCohorts } from '../hooks/useCohorts'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Icon } from '../components/Icon'
import { Inline } from '../components/Inline'
import { Text } from '../components/Text'

import * as styleRefs from './PageBodyFellowsGrid.treat'
import { Link } from '../components/Link'

/**
 * Groups a list of records by their `cohortUID` field.
 */
const groupByCohort = <A extends { cohortUID?: string }>(as: A[]) =>
	R.fromFoldableMap(A.getMonoid<A>(), A.array)(as, (a) => [
		a.cohortUID ?? '',
		[a],
	])

type FellowProps = {
	href: string
	name?: string
	cohortTitle?: string
	portraitData?: IGatsbyImageData
	portraitAlt?: string
	openFellowModal: () => void
}

const Fellow = ({
	href,
	name,
	cohortTitle,
	portraitData,
	portraitAlt,
	openFellowModal,
}: FellowProps) => (
	<Box as="li">
		<Link href={href} onClick={openFellowModal}>
			<Box
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
					{portraitData && (
						<Box
							as={GatsbyImage}
							image={portraitData}
							alt={portraitAlt ?? name ? `Photo of ${name}` : ''}
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
		</Link>
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
				paddingTop: 0.5,
				paddingBottom: 2,
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

type FellowsGridSecondaryTabProps = {
	index: number
	children?: React.ReactNode
}

const FellowsGridSecondaryTab = ({
	index,
	children,
}: FellowsGridSecondaryTabProps) => {
	const { selectedIndex } = useTabsContext()
	const isSelected = index === selectedIndex

	return (
		<Box
			styles={{
				paddingTop: 0.5,
				paddingBottom: 2,
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
				variant="sans-12-caps"
				styles={{
					fontWeight: isSelected ? 'bold' : 'normal',
				}}
			>
				{children}
			</Text>
		</Box>
	)
}

const STATIC_TABS_COUNT = 1

export type PageBodyFellowsGridProps = Partial<
	ReturnType<typeof mapDataToProps>
> &
	PageTemplateEnhancerProps

export const PageBodyFellowsGrid = ({
	defaultCohortNumber,
	defaultModalFellowUID,
	nextSharesBg,
	location,
}: PageBodyFellowsGridProps) => {
	const cohorts = useCohorts()
	// const latestCohort = cohorts[cohorts.length - 1]

	const fellows = useFellows()
	const fellowsByCohort = React.useMemo(() => groupByCohort(fellows), [fellows])
	// const fellowsOfLatestCohort = latestCohort.uid
	// 	? fellowsByCohort[latestCohort.uid] ?? []
	// 	: []

	const [cohortTabIndex, setCohortTabIndex] = React.useState(0)

	const changeCohortTabIndex = (index: number) => {
		setCohortTabIndex(index)

		const cohort = cohorts[index - STATIC_TABS_COUNT]

		if (location) {
			const url = new URL(location.href)

			if (cohort && cohort.number) {
				url.searchParams.set('cohort', cohort.number.toString())
			} else {
				url.searchParams.delete('cohort')
			}

			navigate(url.pathname + url.search)
		}
	}

	// Need to set the default cohort tab index in a useEffect to fix a
	// rehydration bug where the selected tab index remains at 0
	React.useEffect(() => {
		const defaultCohortIndex = defaultCohortNumber
			? cohorts.findIndex(
					(cohort) => cohort?.number?.toString() === defaultCohortNumber,
			  )
			: -1
		const defaultCohortTabIndex =
			defaultCohortIndex === -1 ? 0 : defaultCohortIndex + STATIC_TABS_COUNT

		if (defaultCohortTabIndex) setCohortTabIndex(defaultCohortTabIndex)
	}, [cohorts, defaultCohortNumber])

	const [modalFellowUID, setModalFellowUID] = React.useState(
		defaultModalFellowUID,
	)
	const modalFellow = React.useMemo(
		() => fellows.find((fellow) => fellow.uid === modalFellowUID),
		[fellows, modalFellowUID],
	)
	const isModalOpen = modalFellowUID !== undefined
	const openFellowModal = (fellowUID: string) => setModalFellowUID(fellowUID)
	const closeFellowModal = () => {
		setModalFellowUID(undefined)

		if (location) {
			const url = new URL(location.href)
			url.searchParams.delete('fellow')
			navigate(url.pathname + url.search)
		}
	}

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
						{modalFellow?.photoData && (
							<GatsbyImage
								image={modalFellow.photoData}
								alt={
									modalFellow.photoAlt ?? modalFellow.name
										? `Photo of ${modalFellow.name}`
										: ''
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

			<Tabs
				index={cohortTabIndex}
				onChange={(index) => changeCohortTabIndex(index)}
			>
				<Box
					as={TabList}
					styles={{
						display: 'grid',
						gap: [2, 5],
						justifyItems: 'center',
						justifyContent: 'center',
						marginBottom: [4, 8],
					}}
				>
					<Box
						styles={{
							display: 'grid',
							gap: [3, 6],
							gridAutoFlow: ['row', 'column'],
							justifyItems: 'center',
							justifyContent: 'center',
						}}
					>
						{/* <Tab>
							<FellowsGridTab index={0}>Current Cohort</FellowsGridTab>
						</Tab> */}

						<Tab>
							<FellowsGridTab index={0}>Forum of Fellows</FellowsGridTab>
						</Tab>
					</Box>

					<Inline space={[3.5, 4]} spaceY={0.5} align="center">
						{cohorts.map((cohort, i) => (
							<Tab key={cohort.uid}>
								<FellowsGridSecondaryTab index={i + STATIC_TABS_COUNT}>
									{cohort.title}
								</FellowsGridSecondaryTab>
							</Tab>
						))}
					</Inline>
				</Box>

				<TabPanels>
					{/* <TabPanel>
						<FellowsGrid>
							{fellowsOfLatestCohort.map(
								(fellow) =>
									fellow.url && (
										<Fellow
											key={fellow.uid}
											href={fellow.url}
											name={fellow.name}
											cohortTitle={fellow.cohortTitle}
											portraitData={fellow.portraitData}
											portraitAlt={fellow.portraitAlt}
											openFellowModal={() =>
												fellow.uid && openFellowModal(fellow.uid)
											}
										/>
									),
							)}
						</FellowsGrid>
					</TabPanel> */}

					<TabPanel>
						<FellowsGrid>
							{fellows.map(
								(fellow) =>
									fellow.url && (
										<Fellow
											key={fellow.uid}
											href={fellow.url}
											name={fellow.name}
											cohortTitle={fellow.cohortTitle}
											portraitData={fellow.portraitData}
											portraitAlt={fellow.portraitAlt}
											openFellowModal={() =>
												fellow.uid && openFellowModal(fellow.uid)
											}
										/>
									),
							)}
						</FellowsGrid>
					</TabPanel>

					{cohorts.map(
						(cohort) =>
							cohort.uid && (
								<TabPanel key={cohort.uid}>
									<FellowsGrid>
										{fellowsByCohort[cohort.uid].map(
											(fellow) =>
												fellow.url && (
													<Fellow
														key={fellow.uid}
														href={fellow.url}
														name={fellow.name}
														cohortTitle={fellow.cohortTitle}
														portraitData={fellow.portraitData}
														portraitAlt={fellow.portraitAlt}
														openFellowModal={() =>
															fellow.uid && openFellowModal(fellow.uid)
														}
													/>
												),
										)}
									</FellowsGrid>
								</TabPanel>
							),
					)}
				</TabPanels>
			</Tabs>
		</BoundedBox>
	)
}

export const mapDataToProps = ({
	meta,
}: MapDataToPropsArgs<undefined, typeof mapDataToContext>) => ({
	defaultCohortNumber: meta?.location
		? String(
				querystring.decode(meta?.location.search.replace(/^\?/, '')).cohort ??
					'',
		  ) || undefined
		: undefined,
	defaultModalFellowUID: meta?.location
		? String(
				querystring.decode(meta?.location.search.replace(/^\?/, '')).fellow ??
					'',
		  ) || undefined
		: undefined,
	location: meta?.location,
})

export const mapDataToContext = () => ({
	bg: 'gray85',
})

export default PageBodyFellowsGrid
