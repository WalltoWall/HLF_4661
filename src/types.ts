/**
 * Collection of commonly used types throughout the project.
 */

import { TMapDataToPropsFn, TMapDataToContextFn } from 'react-map-to-components'
import { MapSlicesToComponentsProps } from '@walltowall/react-map-slices-to-components'

export type UnwrappedArray<T> = T extends (infer U)[] ? U : T

export type PickPartial<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Pick<T, K>>

export type MapDataToPropsEnhancerArgs = Parameters<
  NonNullable<MapSlicesToComponentsProps['mapDataToPropsEnhancer']>
>[1]

export interface Meta<RootDataQuery = any> {
  rootData: RootDataQuery
}

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

export type MapDataToContextArgs<
  TDataFragment,
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
