import { style } from 'treat'

import AssetTextureMetal from '../assets/texture-metal.jpg'

export const textureMetalBackground = style({
  backgroundImage: `url('${AssetTextureMetal}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
})

export const leftQuoteIconPlacement = style({
  transform: 'translateX(calc(-100% - 0.5rem))',
})
