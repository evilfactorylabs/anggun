/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

const sizes = {
  large: {
    px: 5,
    height: 11,
    fontSize: 'md',
    minWidth: 'large'
  },
  medium: {
    px: 5,
    height: 9,
    fontSize: 'sm',
    minWidth: 'medium'
  },
  small: {
    px: 3,
    height: 5,
    fontSize: 'sm',
    minWidth: 'small'
  }
}

const sizeProps = size => sizes[size]

const solidButton = ({ children, border, color, bg, size, ...rest }) => {
  color = bg === 'warning' ? 'black' : 'white'
  return (
    <Box border='none' color={color} bg={bg} {...sizeProps(size)} {...rest}>
      {children}
    </Box>
  )
}

const outlineButton = ({ children, color, border, bg, size, ...rest }) => {
  return (
    <Box
      borderStyle='solid'
      borderWidth='2px'
      borderColor={bg}
      bg='inherit'
      color={bg}
      {...sizeProps(size)}
      {...rest}
    >
      {children}
    </Box>
  )
}

const variantButton = ({ variant, ...props }) => {
  switch (variant) {
    case 'solid':
      return solidButton({ ...props })
    case 'outline':
      return outlineButton({ ...props })
  }
}

const Button = forwardRef(
  (
    {
      children,
      as = 'button',
      border = 'none',
      rounded = 'sm',
      color,
      size = 'medium',
      variant = 'solid',
      ...rest
    },
    ref
  ) => {
    color = color || 'white'
    const vari = variantButton({
      children,
      as,
      rounded,
      color,
      size,
      variant,
      ref,
      ...rest
    })
    return vari
  }
)

Button.displayName = 'Button'

export default Button
