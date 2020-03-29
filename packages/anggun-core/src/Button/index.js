/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'
import Box from '../Box'

const sizes = {
  big: {
    px: 7,
    height: 10,
    fontSize: 4
  },
  large: {
    px: 6,
    height: 9,
    fontSize: 3
  },
  medium: {
    px: 4,
    height: 7,
    fontSize: 2
  },
  small: {
    px: 2,
    height: 5,
    fontSize: 1
  }
}

const sizeProps = size => sizes[size]

const Button = forwardRef(
  (
    {
      children,
      as = 'button',
      border = 'none',
      rounded = 'sm',
      color = 'white',
      size = 'medium',
      ...rest
    },
    ref
  ) => {
    return (
      <Box
        as={as}
        border={border}
        rounded={rounded}
        color={color}
        ref={ref}
        {...rest}
        {...sizeProps(size)}
      >
        {children}
      </Box>
    )
  }
)

Button.displayName = 'Button'

export default Button
