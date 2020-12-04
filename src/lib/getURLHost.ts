/**
 * Returns the host of a URL.
 *
 * @param url URL of which to get the host.
 *
 * @returns Host of the URL if valid, `undefined` otherwise.
 */
export const getURLHost = (url: string): string | undefined => {
  try {
    const instance = new URL(url)
    return instance.host
  } catch {
    return undefined
  }
}
