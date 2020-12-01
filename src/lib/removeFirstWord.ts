/**
 * Removes the first word in a string. A word is determined using " " as a
 * delimiter.
 *
 * @param string The string from which the first word will be removed.
 *
 * @returns `string` with the first word removed.
 */
export const removeFirstWord = (string: string): string => {
  const parts = string.split(' ')
  return parts.slice(1).join(' ')
}
