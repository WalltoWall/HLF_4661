// The unicode representation is needed in order for it to render in React
// correctly. Using `&nbsp;` prints that string literally.
const NBSP = '\u00A0'

/**
 * Prevents widows when rendering strings where lines can wrap.
 *
 * @param string The string to prevent widows.
 * @param wordCount The minumum number of words to include on the last line.
 *
 * @returns The string with built-in widow prevention.
 */
export const preventWidow = (string: string = '', wordCount = 2): string => {
  const words = string.split(' ')

  return [
    ...words.slice(0, -wordCount),
    words.slice(words.length - wordCount).join(NBSP),
  ].join(' ')
}
