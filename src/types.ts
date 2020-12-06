/**
 * Collection of commonly used types throughout the project.
 */

export type UnwrappedArray<T> = T extends (infer U)[] ? U : T

export type PickPartial<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Pick<T, K>>

export interface PagesSearchResult {
  type: 'page' | 'interior_page' | 'project' | 'news_post'
  url: string
  title: string
  description: string
}
