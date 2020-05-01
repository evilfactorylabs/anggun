/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

/* this will become utlis maybe, just let the code repetitive first */
const bgStyle = bgColors => {
  for (const color in bgColors) {
    if (bgColors[color]) {
      return color
    }
  }
}

const sizes = {
  large: {
    px: 3,
    fontSize: 'md'
  },
  medium: {
    px: 2,
    fontSize: 'sm'
  },
  small: {
    px: 1,
    fontSize: 'xs'
  }
}

const sizeProps = size => sizes[size]

const solidBadge = ({ color, bg }) => ({
  border: 'none',
  color,
  bg
})

const outlineBadge = ({ bg }) => ({
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: bg,
  color: bg,
  bg: 'inherit'
})

const variantBadge = ({ variant, ...props }) => {
  switch (variant) {
    case 'solid':
      return solidBadge(props)
    case 'outline':
      return outlineBadge(props)
  }
}

const Badge = forwardRef(
  (
    {
      children,
      variant = 'solid',
      primary,
      danger,
      warning,
      success,
      color,
      rounded = 'sm',
      size = 'small',
      ...rest
    },
    ref
  ) => {
    /*
     * You can use bg like:
     * <Badge primary />
     * available bg { primary danger, warning, succcess }
     */
    const bg = bgStyle({ primary, danger, warning, success })
    color = bg === 'warning' ? 'black' : 'white'
    return (
      <Box
        ref={ref}
        display='inline-block'
        verticalAlign='middle'
        as='span'
        rounded={rounded}
        {...variantBadge({ variant, bg, color })}
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
