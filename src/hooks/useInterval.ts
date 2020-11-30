import * as React from 'react'

export const useInterval = (callback: () => void, interval: number) => {
  const callbackRef = React.useRef(callback)
  const id = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    callbackRef.current = callback
  })

  const stop = () => {
    if (!id.current) return

    clearInterval(id.current)
    id.current = undefined
  }

  const start = React.useCallback(() => {
    if (id.current) return

    id.current = setInterval(() => {
      callbackRef.current()
    }, interval)
  }, [interval])

  React.useEffect(() => {
    start()

    return () => stop()
  }, [start])

  return React.useMemo(() => [start, stop] as const, [start])
}
