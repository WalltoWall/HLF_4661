import React from 'react'
import GatsbyLink from 'gatsby-link'
import {
  Link as SiameseLink,
  LinkProps as SiameseLinkProps,
} from '@walltowall/siamese'

const GatsbyLinkShim = ({ href, ...props }: { href: string }) => (
  <GatsbyLink to={href} {...props} />
)

export type LinkProps = Omit<SiameseLinkProps<'a'>, 'as'>

export const Link = (props: LinkProps) => (
  <SiameseLink routerLinkComponent={GatsbyLinkShim} {...props} />
)
