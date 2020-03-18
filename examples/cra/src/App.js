import React from 'react'
import { ThemeProvider, Box } from '@evilfactory/anggun-core'
import logo from './logo.svg'

function App() {
  return (
    <ThemeProvider>
      <Box textAlign='center' width={1} fontSize={32} m='auto' p={10}>
        <img alt='eDan design System' src={logo} />

        <Box data-testid='border-radius' rounded='full' bg='red.666' color='silver'>
          Box with border radius
        </Box>
        <Box data-testid='button1' bg='red.666' color='silver' my={20} borderRadius={3}>
          I am the Box
        </Box>
        <Box
          bg='red.999'
          color='silver'
          my={20}
          border='solid 1px'
          borderWidth={2}
          borderRadius={6}
        >
          I am the Box
        </Box>
        <Box bg='navy' color='silver' my={20}>
          I am the Box
        </Box>
        <Box color='black' my={20} border='solid 1px' borderWidth={2} borderRadius={999}>
          I am the Box
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
