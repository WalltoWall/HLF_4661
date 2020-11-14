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
