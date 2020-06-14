/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

const transformValue = value => (typeof value === 'number' ? `${value * 10}px` : value)

const Spacer = forwardRef(({ y, x }, ref) => {
  const display = (y, x) => {
    if ((y && x) || (!y && x)) {
      return 'inline-block'
    } else if (y && !x) {
      return 'block'
    }
  }

  return (
    <Box
      as="span"
      ref={ref}
      paddingY={transformValue(y)}
      paddingX={transformValue(x)}
      display={display(y, x)}
      aria-hidden="true"
    />
  )
})

Spacer.displayName = 'Spacer'

export default Spacer
