import * as React from 'react'
import { graphql, navigate } from 'gatsby'
import { useStyles } from 'react-treat'
import { Box, useBoxStyles } from '@walltowall/calico'
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
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { useFellows } from '../hooks/useFellows'
import { useCohorts } from '../hooks/useCohorts'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Icon } from '../components/Icon'
import { Inline } from '../components/Inline'
import { Text } from '../components/Text'

import * as styleRefs from './PageBodyFellowsGrid.treat'
import { Image } from '@unpic/react'

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
	portraitSrc?: string
	portraitAlt?: string
	openFellowModal: () => void
}

const Fellow = ({
	name,
	cohortTitle,
	portraitSrc,
	portraitAlt,
	openFellowModal,
}: FellowProps) => {
	const imgStyles = useBoxStyles({ height: 'full', width: 'full' })

	return (
		<Box as="li">
			<Box
				as="button"
				onClick={openFellowModal}
				styles={{
					width: 'full',
				}}
			>
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
						{portraitSrc && (
							<Image
								src={portraitSrc}
								alt={portraitAlt ?? name ? `Photo of ${name}` : ''}
								className={imgStyles}
								layout="fullWidth"
								sizes="(min-width: 300px) 300px, 100vw"
								breakpoints={[300, 600]}
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
		</Box>
	)
}

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
const ALL_FELLOWS = 0

export type PageBodyFellowsGridProps = Partial<
	ReturnType<typeof mapDataToProps>
> &
	PageTemplateEnhancerProps

export const PageBodyFellowsGrid = ({
	defaultCohortNumber = ALL_FELLOWS,
	nextSharesBg,
	location,
}: PageBodyFellowsGridProps) => {
	const cohorts = useCohorts()

	const fellows = useFellows()
	const fellowsByCohort = React.useMemo(() => groupByCohort(fellows), [fellows])

	const [cohortTabIndex, setCohortTabIndex] =
		React.useState(defaultCohortNumber)
	const [modalFellowUID, setModalFellowUID] = React.useState<string>()

	React.useEffect(() => {
		const params = new URLSearchParams(window.location.search)

		const fellowUID = params.get('fellow')
		const cohort = Number.parseInt(
			params.get('cohort') ?? ALL_FELLOWS.toString(),
		)

		if (fellowUID && fellows.some((fellow) => fellow.uid === fellowUID))
			setModalFellowUID(fellowUID)
		if (!isNaN(cohort) && cohort > 0 && cohort < cohorts.length)
			setCohortTabIndex(cohort)

		// Because this is a static site cohorts and fellows will never change.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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

			window.history.pushState({}, '', url)
		}
	}

	const modalFellow = React.useMemo(
		() => fellows.find((fellow) => fellow.uid === modalFellowUID),
		[fellows, modalFellowUID],
	)

	const isModalOpen = modalFellowUID !== undefined

	const openFellowModal = (fellowUID: string) => {
		setModalFellowUID(fellowUID)

		if (location) {
			const url = new URL(location.href)
			url.searchParams.set('fellow', fellowUID)
			navigate(url.pathname + url.search)
		}
	}

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
						{modalFellow?.photoSrc && (
							<Image
								src={modalFellow.photoSrc}
								alt={
									modalFellow.photoAlt ?? modalFellow.name
										? `Photo of ${modalFellow.name}`
										: ''
								}
								layout="fullWidth"
								breakpoints={[600, 900, 1200]}
								sizes="(min-width: 600px) 600px, 100vw"
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
					<TabPanel>
						<FellowsGrid>
							{fellows.map(
								(fellow) =>
									fellow.url && (
										<Fellow
											key={fellow.uid}
											name={fellow.name}
											cohortTitle={fellow.cohortTitle}
											portraitSrc={fellow.portraitSrc}
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
														name={fellow.name}
														cohortTitle={fellow.cohortTitle}
														portraitSrc={fellow.portraitSrc}
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
	data,
	meta,
}: MapDataToPropsArgs<any, typeof mapDataToContext>) => ({
	defaultCohortNumber: data.primary?.default_cohort_number as number,
	location: meta?.location,
})

export const mapDataToContext = () => ({
	bg: 'gray85',
})

export const fragment = graphql`
	fragment PageBodyFellowsGrid on PrismicPageDataBodyFellowsGrid {
		primary {
			default_cohort_number
		}
	}
`

export default PageBodyFellowsGrid
