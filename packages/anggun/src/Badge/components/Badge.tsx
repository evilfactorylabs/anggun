/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import { Box } from '../../Box'

type VariantProps = 'solid' | 'outline'
type BgColorProps = 'blue' | 'red' | 'green' | 'yellow' | 'white' | 'black'
type ColorProps = 'blue' | 'red' | 'green' | 'yellow' | 'white' | 'black'
type SizeProps = 'xs' | 'sm' | 'md'

/* this might be become utlis maybe, just let the code repetitive first */
/* const bgStyle = (bgColors: BgColorProps) => { */
/*   for (const color in bgColors) { */
/*     if (bgColors[color]) { */
/*       return color */
/*     } */
/*   } */
/* } */

/* const sizes = { */
/*   large: { */
/*     px: 3, */
/*     fontSize: 'md' */
/*   }, */
/*   medium: { */
/*     px: 2, */
/*     fontSize: 'sm' */
/*   }, */
/*   small: { */
/*     px: 1, */
/*     fontSize: 'xs' */
/*   } */
/* } */

type SizeValue = {
  [SizeProps: string]: {
    px: number
    fontSize: string
  }
}

const sizes: SizeValue = {
  md: {
    px: 3,
    fontSize: 'md'
  },
  sm: {
    px: 2,
    fontSize: 'sm'
  },
  xs: {
    px: 1,
    fontSize: 'xs'
  }
}

const sizeProps = (size: SizeProps): SizeValue[SizeProps] => sizes[size]

const solidBadge = ({ color, bgColor }: { color: ColorProps; bgColor: BgColorProps }) => ({
  border: 'none',
  color,
  bg: bgColor
})

const outlineBadge = ({ bgColor }: { bgColor: BgColorProps }) => ({
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: bgColor,
  color: bgColor,
  bg: 'inherit'
})

type VariantParams = {
  variant: VariantProps
  bgColor: BgColorProps
  color: ColorProps
}

const variantBadge = <T extends VariantParams>({ variant, color, bgColor }: T) => {
  switch (variant) {
    case 'solid':
      return solidBadge({ color, bgColor })
    case 'outline':
      return outlineBadge({ bgColor })
  }
}

export interface BadgeProps {
  variant?: VariantProps
  bgColor?: BgColorProps
  color?: ColorProps
  rounded?: string
  size?: SizeProps
}

const Badge: React.FC<BadgeProps> = forwardRef(
  (
    {
      children,
      variant = 'solid',
      bgColor = 'white',
      color = 'black',
      rounded = 'sm',
      size = 'sm',
      ...rest
    },
    ref
  ) => {
    /* const bg = bgStyle({ primary, danger, warning, success }) */
    const _color: ColorProps | BgColorProps = bgColor === 'yellow' ? 'black' : color
    return (
      <Box
        // ref={ref}
        display="inline-block"
        verticalAlign="middle"
        as="span"
        rounded={rounded}
        {...variantBadge({ variant, bgColor, color: _color })}
        {...sizeProps(size)}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
