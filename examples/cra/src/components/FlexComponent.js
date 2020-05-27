import React from 'react'

import { Flex, Box } from '@evilfactory/anggun'

function FlexComponent() {
  return (
    <Flex flexDirection='column' justifyContent='center'>
      <Box bg='success'>Box</Box>
      <Box bg='success'>Box</Box>
      <Box bg='success'>Box</Box>
    </Flex>
  )
}

export default FlexComponent
