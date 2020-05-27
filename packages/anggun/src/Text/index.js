/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

const Text = forwardRef(({ children, as = 'p', fontSizes = 'md', ...props }, ref) => (
  <Box ref={ref} as={as} fontSize={fontSizes} {...props}>
    {children}
  </Box>
))

Text.displayName = 'Text'

export default Text
