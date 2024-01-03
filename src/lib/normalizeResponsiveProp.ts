import { ResponsiveProp } from '@walltowall/calico'

/**
 * Normalizes a responsive prop value to a tuple with values for all
 * breakpoints. If the prop value contains less values than there are
 * breakpoints, the right-most element is repeated (i.e. it is expanded).
 *
 * @param value Reponsive prop value.
 *
 * @returns A tuple containing prop values for all breakpoints.
 */
export const normalizeResponsiveProp = <Keys extends string | number | boolean>(
	value: ResponsiveProp<Keys>,
): Readonly<[Keys | null, Keys | null, Keys | null, Keys | null]> => {
	if (
		typeof value === 'string' ||
		typeof value === 'number' ||
		typeof value === 'boolean'
	)
		return [value, value, value, value]

	if ('length' in value)
		switch (value.length) {
			case 2:
				return [value[0], value[1], value[1], value[1]]

			case 3:
				return [value[0], value[1], value[2], value[2]]

			case 4:
				return value
		}

	throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`)
}
