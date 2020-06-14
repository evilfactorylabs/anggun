/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

import Box from '../Box'

const Flex = forwardRef(
  (
    {
      children,
      alignItems,
      alignContent,
      justifyContent,
      flexWrap,
      flexBasis,
      flexDirection,
      flex,
      justifySelf,
      alignSelf,
      order,
      ...props
    },
    ref
  ) => (
    <Box
      display="flex"
      ref={ref}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      flexBasis={flexBasis}
      flexDirection={flexDirection}
      flex={flex}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      order={order}
      {...props}
    >
      {children}
    </Box>
  )
)

Flex.displayName = 'Flex'

export default Flex
