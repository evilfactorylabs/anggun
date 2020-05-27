/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

/* eslint-disable react/display-name */
const NativeImage = forwardRef(({ src, alt, nativeheight, nativewidth, ...props }, ref) => {
  return (
    <img
      ref={ref}
      nativeheight={nativeheight}
      nativewidth={nativewidth}
      src={src}
      alt={alt}
      {...props}
    />
  )
})

const Image = forwardRef(({ nativeheight, ...props }, ref) => {
  return <Box ref={ref} as={NativeImage} nativeheight={nativeheight} {...props} />
})

Image.displayName = 'Image'

export default Image
