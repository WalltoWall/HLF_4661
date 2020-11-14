/**
 * Treat file responsible for generating styles from `calico`.
 * @see ./theme.ts for more information.
 */

import { createTheme } from 'treat'
import { theme as calicoTheme } from './theme'

export const theme = createTheme(calicoTheme)
