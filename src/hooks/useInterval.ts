import * as React from 'react'

export const useInterval = (
	callback: () => void,
	interval: number,
	autoplay = true,
) => {
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
		if (autoplay) start()

		return () => stop()
	}, [start, autoplay])

	return React.useMemo(() => [start, stop] as const, [start])
}
