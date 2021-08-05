/**
 * Makes a URL prettier by removing the protocol and/or trailing slash, if
 * present.
 *
 * @param url URL to prettify.
 *
 * @returns `url` without a protocol and/or trailing slash.
 */
export const prettyURL = (url?: string): string =>
  url?.replace(/^.*:\/\//, '').replace(/\/$/, '') ?? ''
