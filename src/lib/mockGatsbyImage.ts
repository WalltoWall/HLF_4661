import { FluidObject } from 'gatsby-image'

/**
 * Creates a mock `gatsby-image` fluid object from a URL. The resulting object
 * can be passed to `gatsby-image`'s `fluid` prop. It will, of course, not be
 * responsive.
 *
 * @param url URL to an image.
 * @param aspectRatio Aspect ratio of the image (width:height)
 *
 * @returns Object suitable to provide to `gatsby-image`'s `fluid` prop.
 */
export const mockGatsbyImageFluid = (
  url: string,
  aspectRatio: number,
): FluidObject => ({
  base64: url,
  aspectRatio,
  src: url,
  srcSet: url,
  sizes: '',
})
