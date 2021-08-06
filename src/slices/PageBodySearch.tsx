import * as React from 'react'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import VisuallyHidden from '@reach/visually-hidden'
import { useId } from '@reach/auto-id'
import { Box } from '@walltowall/calico'
import { useLunr } from 'react-lunr'
import querystring from 'querystring'

import { PagesSearchResult } from '../types'
import { LocalSearchAllContentQuery } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { SEARCH_URL } from '../constants'
import { useCommonStyles } from '../hooks/useCommonStyles'
import { usePaginatedCollection } from '../hooks/usePaginatedCollection'

import { BoundedBox } from '../components/BoundedBox'
import { Text } from '../components/Text'
import { Icon } from '../components/Icon'
import { InteriorPageSidebar } from '../components/InteriorPageSidebar'
import { ContentCardsList } from '../components/ContentCardsList'
import { ContentCard } from '../components/ContentCard'

/**
 * Mapping of Prismic custom type API IDs to public labels. Some custom types
 * are mapped to `undefined` as it does not make sense to label such types.
 */
const resultTypeToPublicLabel = {
  page: undefined,
  interior_page: undefined,
  project: 'Project',
  news_post: 'News Article',
}

/**
 * Mapping of Prismic custom type API IDs to button text labels.
 */
const resultTypeToButtonText = {
  page: 'View Page',
  interior_page: 'View Page',
  project: 'View Project',
  news_post: 'Read More',
}

export type PageLayoutSearchResultsProps = Partial<
  ReturnType<typeof mapDataToProps>
> &
  PageTemplateEnhancerProps

export const PageLayoutSearchResults = ({
  query: rawQuery,
  id,
}: PageLayoutSearchResultsProps) => {
  const [index, setIndex] = React.useState<string>()
  const [store, setStore] = React.useState<Record<string, PagesSearchResult>>()

  const queryData = useStaticQuery<LocalSearchAllContentQuery>(graphql`
    query LocalSearchAllContent {
      localSearchAllContent {
        publicIndexURL
        publicStoreURL
      }
    }
  `)

  React.useEffect(() => {
    const asyncFn = async () => {
      const [index, store] = await Promise.all([
        fetch(queryData.localSearchAllContent?.publicIndexURL!).then((data) =>
          data.json(),
        ),
        fetch(queryData.localSearchAllContent?.publicStoreURL!).then((data) =>
          data.json(),
        ),
      ])

      setIndex(index)
      setStore(store)
    }

    asyncFn()
  }, [queryData])

  const query = String(rawQuery ?? '').trim()
  const results = useLunr(
    // `replace` removes Lunr special characters used for fuzzy searching
    query.replace(/(\*|\~)/g, ''),
    index,
    store,
  ) as PagesSearchResult[]
  const paginatedResults = usePaginatedCollection({ collection: results })

  const resultsStartCount =
    (paginatedResults.page - 1) * paginatedResults.perPage + 1
  const resultsEndCount =
    resultsStartCount + paginatedResults.paginatedCollection.length - 1
  const resultsTotalCount = results.length

  // The query input value is managed separately from the query provided to
  // `useLunr`. This is because we need to manage the input's value state as
  // the user is typing, but we don't want search results to update as the
  // input changes.
  const [queryInputValue, setQueryInputValue] = React.useState(query)
  const queryInputRef = React.useRef<HTMLInputElement>(null)
  const onQueryInputChange = (event: React.FormEvent<HTMLInputElement>) =>
    setQueryInputValue(event.currentTarget.value)
  const onSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (queryInputRef.current) queryInputRef.current.blur()

    const path = queryInputValue.trim()
      ? `${SEARCH_URL}?${querystring.encode({ query: queryInputValue.trim() })}`
      : SEARCH_URL

    paginatedResults.setPage(1)

    navigate(path)
  }
  const queryInputId = useId()

  const commonStyles = useCommonStyles()

  return (
    <Box
      id={id}
      styles={{
        backgroundColor: 'white',
        maxWidth: 'xlarge',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'grid',
        gridTemplateColumns: [null, null, 3],
      }}
    >
      <InteriorPageSidebar
        title="Search"
        description="Use the search field to find information and news articles on this site."
      />
      <Box styles={{ gridColumn: [null, null, 'span-2'] }}>
        <BoundedBox ref={paginatedResults.containerRef} nextSharesBg={true}>
          <Box styles={{ display: 'grid', gap: [6, 8] }}>
            <Box
              as="form"
              action={SEARCH_URL}
              method="get"
              role="search"
              onSubmit={onSearchSubmit}
              styles={{ display: 'grid', gap: 4 }}
            >
              <Text
                as="label"
                htmlFor={queryInputId}
                variant="sans-13-14-bold-caps"
                styles={{ color: 'gray10' }}
              >
                Search for
              </Text>
              <Box styles={{ display: 'flex' }}>
                <Box
                  styles={{
                    position: 'relative',
                    flexGrow: 1,
                    maxWidth: '20rem',
                  }}
                >
                  <Box
                    as="input"
                    ref={queryInputRef}
                    name="query"
                    id={queryInputId}
                    placeholder="Search&hellip;"
                    value={queryInputValue}
                    onChange={onQueryInputChange}
                    className={commonStyles.placeholderColor}
                    styles={{
                      backgroundColor: 'gray85',
                      fontFamily: 'serif',
                      paddingTop: 2.5,
                      paddingBottom: 3,
                      paddingLeft: 11,
                      paddingRight: 4,
                      lineHeight: 1,
                      fontSize: ['1rem', '1.125rem'],
                      color: 'gray20',
                      width: 'full',
                    }}
                  />
                  <Icon
                    name="search"
                    className={commonStyles.verticallyCenter}
                    styles={{
                      width: '1.25rem',
                      color: 'gray40',
                      position: 'absolute',
                      marginLeft: 4,
                    }}
                  />
                </Box>
                <Box
                  as="button"
                  styles={{
                    color: 'orange55',
                    paddingLeft: 4,
                    paddingRight: 4,
                    display: 'flex',
                    alignItems: 'center',
                    transitionProperty: 'color',
                    transitionDuration: 'normal',
                    transitionTimingFunction: 'easeOut',
                  }}
                  focusStyles={{ color: 'orange50' }}
                  hoverStyles={{ color: 'orange50' }}
                >
                  <VisuallyHidden>Submit search</VisuallyHidden>
                  <Icon name="triangleRight" styles={{ width: '0.5rem' }} />
                </Box>
              </Box>
            </Box>
            <Text variant="sans-16" styles={{ color: 'gray40' }}>
              {query ? (
                <>
                  {resultsTotalCount > 0 ? (
                    <>
                      Showing {resultsStartCount}&ndash;{resultsEndCount} of{' '}
                      {resultsTotalCount} result
                      {resultsTotalCount !== 1 && 's'}
                      {query && (
                        <>
                          <> for </>
                          <strong>{query}</strong>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      No results for <strong>{query}</strong>
                    </>
                  )}
                </>
              ) : (
                <>Enter a search term above.</>
              )}
            </Text>
          </Box>
        </BoundedBox>
        <BoundedBox variant="narrow">
          <ContentCardsList
            nextPageOnClick={
              paginatedResults.hasNextPage
                ? paginatedResults.incPage
                : undefined
            }
            previousPageOnClick={
              paginatedResults.hasPreviousPage
                ? paginatedResults.decPage
                : undefined
            }
          >
            {paginatedResults.paginatedCollection.map((result) => (
              <ContentCard
                key={result.url}
                topLabel={resultTypeToPublicLabel[result.type]}
                title={result.title}
                excerpt={result.description}
                href={result.url}
                // TODO: Insert runtime created gatsbyImageData
                featuredImageData={undefined}
                featuredImageAlt={result.featuredImageAlt}
                buttonText={resultTypeToButtonText[result.type]}
              />
            ))}
          </ContentCardsList>
        </BoundedBox>
      </Box>
    </Box>
  )
}

export const mapDataToProps = ({
  meta,
}: MapDataToPropsArgs<undefined, typeof mapDataToContext>) => ({
  query: meta?.location
    ? String(
        querystring.decode(meta?.location.search.replace(/^\?/, '')).query ??
          '',
      ) || undefined
    : undefined,
})

export const mapDataToContext = () => ({
  bg: Symbol(),
})

export default PageLayoutSearchResults
