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
