/**
 * Moves the first word in a string to the end. A word is determined using " "
 * as a delimiter. This is intended to support last-name sorting.
 *
 * @param string The string from which the first word will be moved.
 *
 * @returns `string` with the first word moved.
 */
export const moveFirstWordToEnd = (string: string): string => {
  const parts = string.split(' ')

  return parts.length > 1 ? [...parts.slice(1), parts[0]].join(' ') : string
}
