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

const solidButton = ({ children, border, size, ...rest }) => {
  // console.log('solid', { children, border, size, ...rest })
  return (
    <Box border='none' {...sizeProps(size)} {...rest}>
      {children}
    </Box>
  )
}

const outlineButton = ({ children, color, border, bg, size, ...rest }) => {
  // console.log('outline', { children, border, size, ...rest })
  return (
    <Box
      borderStyle='solid'
      borderWidth='2px'
      borderColor={bg}
      bg='white'
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
      // border,
      rounded,
      color,
      size,
      variant,
      ref,
      ...rest
    })
    return vari
    // return (
    //   <Box
    //     as={as}
    //     border={border}
    //     rounded={rounded}
    //     color={color}
    //     ref={ref}
    //     {...sizeProps(size)}
    //     {...rest}
    //   >
    //     {children}
    //   </Box>
    // )
  }
)

Button.displayName = 'Button'

export default Button
