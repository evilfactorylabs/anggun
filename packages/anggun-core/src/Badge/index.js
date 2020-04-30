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

const Badge = forwardRef(
  (
    {
      children,
      primary,
      danger,
      warning,
      success,
      as = 'span',
      border = 'none',
      color,
      rounded = 'sm',
      // size = 'small',
      ...rest
    },
    ref
  ) => {
    const bg = bgStyle({ primary, danger, warning, success })
    color = bg === 'warning' ? 'black' : 'white'
    return (
      <Box
        ref={ref}
        display='inline-block'
        verticalAlign='middle'
        as={as}
        bg={bg}
        border={border}
        fontSize='sm'
        color={color}
        rounded={rounded}
        // size={size}
        px={1}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
