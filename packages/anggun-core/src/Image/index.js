/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

/* eslint-disable react/display-name */
const NativeImage = forwardRef(({ src, alt, nativeHeight, nativeWidth, ...props }, ref) => {
  return (
    <img
      ref={ref}
      nativeHeight={nativeHeight}
      nativeWidth={nativeWidth}
      src={src}
      alt={alt}
      {...props}
    />
  )
})

const Image = forwardRef(({ nativeHeight, ...props }, ref) => {
  return <Box ref={ref} as={NativeImage} nativeHeight={nativeHeight} {...props} />
})

Image.displayName = 'Image'

export default Image
