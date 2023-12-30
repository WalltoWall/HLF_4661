import React from 'react'
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link'
import { isInternal, isAnchorOnly, extractAnchor } from '@walltowall/helpers'

export interface LinkProps extends Omit<GatsbyLinkProps<any>, 'to'> {
	href?: string | null
}

export const Link = ({ href, ...props }: LinkProps) => {
	if (!href) {
		return <a {...props} />
	}

	if (isAnchorOnly(href)) {
		return <a href={extractAnchor(href)} {...props} />
	}

	if (!isInternal(href)) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer nofollow"
				{...props}
			/>
		)
	}

	//@ts-ignore
	return <GatsbyLink to={href} {...props} />
}
