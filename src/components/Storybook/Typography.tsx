import React from 'react'
import faker from 'faker'

const DEFAULT_SAMPLE_WORDS = faker.lorem.sentence()

type TypographyComponent<TVariants extends string> = React.ComponentType<{
  variant: TVariants
}> & {
  variants: TVariants[]
}

type TypographyProps<TVariants extends string> = {
  component: TypographyComponent<TVariants>
  variantPrefix?: string
  children?: string
}

export const Typography = <TVariants extends string>({
  component: Comp,
  variantPrefix,
  children = DEFAULT_SAMPLE_WORDS,
}: TypographyProps<TVariants>) => {
  // TODO: I couldn't get this regexp to work for "sans-20-36-48" and similar
  // variants so i swapped to "startsWith" for now.
  // Filter variants by the variantPrefix, if provided.
  // Matches against name like 'sansA' and 'sans-16-18'
  // const variants = Comp.variants.filter((variant) =>
  //   variantPrefix
  //     ? RegExp(`^${variantPrefix}([A-Z]|-\\d+(-\\d+)?)$`).test(variant)
  //     : true,
  // )

  const variants = variantPrefix
    ? Comp.variants.filter((variant) => variant.startsWith(variantPrefix))
    : Comp.variants

  return (
    <ul
      style={{
        display: 'grid',
        columnGap: '1.25rem',
        rowGap: '2rem',
        whiteSpace: 'nowrap',
        gridTemplateColumns: 'minmax(6rem, auto) 1fr',
        alignItems: 'center',
      }}
    >
      {variants.map((variant) => (
        <React.Fragment key={variant}>
          <span
            style={{
              fontFamily: 'system-ui, sans',
              color: 'gray',
              fontSize: '11px',
              marginLeft: '12px',
              textAlign: 'right',
            }}
          >
            {variant}
          </span>
          <Comp variant={variant}>{children}</Comp>
        </React.Fragment>
      ))}
    </ul>
  )
}
