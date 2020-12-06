import * as React from 'react'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'

const IS_BROWSER = typeof window !== 'undefined'

type UsePaginatedCollectionArgs<T> = {
  collection: T[]
  perPage?: number
  initialPage?: number
  paramKey?: string
}

export const usePaginatedCollection = <Container extends Element, T>({
  collection,
  perPage = 10,
  initialPage = 1,
  paramKey = 'page',
}: UsePaginatedCollectionArgs<T>) => {
  const containerRef = React.useRef<Container>()

  const chuckedCollection = React.useMemo(
    () => pipe(collection, A.chunksOf(perPage)),
    [perPage, collection],
  )

  const totalPages = chuckedCollection.length

  const [page, set] = React.useState(() => {
    if (!IS_BROWSER) return initialPage

    const searchParams = new URLSearchParams(location.search)
    const currPage = searchParams.get(paramKey)

    if (currPage)
      return Math.max(Math.min(Number.parseInt(currPage), totalPages), 1)

    return initialPage
  })

  const setPage = React.useCallback(
    (idx) => {
      const searchParams = new URLSearchParams(location.search)
      searchParams.set(paramKey, idx)

      history.pushState(
        null,
        '',
        `${window.location.pathname}?${searchParams.toString()}`,
      )

      set(idx)
    },
    [paramKey],
  )

  const incPage = React.useCallback(
    () => setPage(Math.min(page + 1, totalPages)),
    [page, setPage, totalPages],
  )

  const decPage = React.useCallback(() => setPage(Math.max(page - 1, 1)), [
    page,
    setPage,
  ])

  React.useLayoutEffect(() => {
    const readPageFromURL = () => {
      const containerEl = containerRef?.current
      if (!containerEl) return

      const searchParams = new URLSearchParams(location.search)
      const currPage = searchParams.get(paramKey)

      if (!currPage) return

      containerEl.scrollIntoView({ behavior: 'smooth' })
      set(Math.max(Math.min(Number.parseInt(currPage), totalPages), 1))
    }

    readPageFromURL()
    window.addEventListener('popstate', readPageFromURL)

    return () => window.removeEventListener('popstate', readPageFromURL)
  }, [containerRef, page, paramKey, totalPages])

  return React.useMemo(
    () => ({
      paginatedCollection: chuckedCollection[page - 1] || [],
      page,
      totalPages,
      perPage,
      hasNextPage: page + 1 <= totalPages,
      hasPreviousPage: page > 1,
      incPage,
      decPage,
      setPage,
      containerRef,
    }),
    [
      chuckedCollection,
      page,
      totalPages,
      perPage,
      incPage,
      decPage,
      setPage,
      containerRef,
    ],
  )
}
