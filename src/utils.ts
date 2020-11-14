/**
 * Collection of small helper functions for data management.
 * Each function in this file should contain a description of its usage and purpose.
 *
 * @remarks
 * Many common utility functions are available in the `@walltowall/helpers` package.
 *
 * @see https://github.com/WalltoWall/helpers
 */

/**
 * Given a string, capitalizes the first letter in every word.
 *
 * @param str The string to capitalize.
 * @returns The new capitalized string.
 */
export const titleize = (str: string) =>
  str.replace(
    /\w+/g,
    (a) => a.charAt(0).toUpperCase() + a.substr(1).toLowerCase(),
  )

/**
 * Casts the provided value as an array if it's not one.
 *
 * @param value - The value to cast.
 *
 * @returns The cast array.
 */
export const castArray = <T>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value]

/**
 * Creates an array of grouped elements based on the provided callback. The callback is invoked with the appropriate index values of each array for the current iteration.
 *
 * @param callback - The function to iterate over each zipped pair.
 * @param arrOne - The first array.
 * @param arrTwo - The second array.
 *
 * @returns The new array of grouped elements.
 */
export const zipWith = <T1, T2, T3>(
  callback: (itemA: T1, itemB: T2) => T3,
  arrOne: T1,
  arrTwo: T2,
) => {
  const a = castArray(arrOne)
  const b = castArray(arrTwo)

  const length = Math.max(a.length, b.length)
  if (length === 0) return [] as T3[]

  const res: T3[] = []

  for (let i = 0; i < length; i++) res[i] = callback(a[i], b[i])

  return res
}
