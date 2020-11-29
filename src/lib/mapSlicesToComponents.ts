import { TMapDataToPropsFn, TMapDataToContextFn } from 'react-map-to-components'
import { MapSlicesToComponentsProps } from '@walltowall/react-map-slices-to-components'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/function'

/**
 * Arguments provided to @walltowall/react-map-slices-to-components'
 * `mapDataToPropsEnhancer` function.
 */
export type MapDataToPropsEnhancerArgs = Parameters<
  NonNullable<MapSlicesToComponentsProps['mapDataToPropsEnhancer']>
>[1]

/**
 * Meta information provided to @walltowall/react-map-to-components' items.
 */
export interface Meta<RootDataQuery = any> {
  rootData: RootDataQuery
}

/**
 * Arguments provided to a @walltowall/react-map-slices-to-components' item's
 * `mapDataToProps` function.
 */
export type MapDataToPropsArgs<
  TDataFragment = any,
  TContextFn extends (...args: any) => any = (...args: any) => any,
  TRootQuery = any,
  TMap extends Record<string, React.ComponentType<any>> = Record<
    string,
    React.ComponentType<any>
  >,
  T extends keyof TMap = any
> = Parameters<
  TMapDataToPropsFn<
    T,
    TMap,
    TDataFragment,
    Meta<TRootQuery>,
    ReturnType<TContextFn>
  >
>[0]

/**
 * Arguments provided to a @walltowall/react-map-slices-to-components' item's
 * `mapDataToContext` function.
 */
export type MapDataToContextArgs<
  TDataFragment = any,
  TRootQuery = any,
  TMap extends Record<string, React.ComponentType<any>> = Record<
    string,
    React.ComponentType<any>
  >,
  T extends keyof TMap = any,
  TContext = any
> = Parameters<
  TMapDataToContextFn<T, TMap, TDataFragment, Meta<TRootQuery>, TContext>
>[0]

/**
 * Module containing a React component with
 * @walltowall/react-map-slices-to-components specific properties.
 */
type SliceModule<TProps = any> = {
  default: React.ComponentType<TProps>
  mapDataToProps?: (props: MapDataToPropsArgs) => Record<string, unknown>
  mapDataToContext?: (props: MapDataToContextArgs) => Record<string, unknown>
}

/**
 * A React component with @walltowall/react-map-slices-to-components specific
 * properties.
 */
type SliceForMap<TProps = any> = React.ComponentType<TProps> & {
  mapDataToProps?: (props: MapDataToPropsArgs) => Record<string, unknown>
  mapDataToContext?: (props: MapDataToContextArgs) => Record<string, unknown>
}

/**
 * Reshapes a Prismic Slice Node modules with default, mapDataToProps, and
 * mapDataToContext exports into a slice map for `@walltowall/react-map-slices-to-components`.
 *
 * @param slices Record of fully qualified slice names to their Node module.
 *
 * @returns Record of fully qualified slice names to a `@walltowall/react-map-slices-to-components` slice map.
 */
export const reshapeSlicesMap = <K extends string>(
  slices: Record<K, SliceModule>,
): Record<K, SliceForMap> =>
  pipe(
    slices,
    R.map((mod) => {
      const component: SliceForMap = mod.default

      if ('mapDataToProps' in mod) component.mapDataToProps = mod.mapDataToProps
      if ('mapDataToContext' in mod)
        component.mapDataToContext = mod.mapDataToContext

      return component
    }),
  )
