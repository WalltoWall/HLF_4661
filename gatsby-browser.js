import './src/global'

export { wrapRootElement } from './src/global'

export const shouldUpdateScroll = ({ routerProps, prevRouterProps }) => {
	const isCohortTabUpdate =
		routerProps.location.search?.includes('cohort') ||
		prevRouterProps?.location.search?.includes('cohort')

	return !isCohortTabUpdate
}
