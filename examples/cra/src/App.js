import React from 'react'
import { ThemeProvider, Box, Button, Spacer } from '@evilfactory/anggun-core'
import logo from './logo.svg'
import { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState('solid')
  return (
    <ThemeProvider>
      <Button
        onClick={() => setToggle(current => (current === 'solid' ? 'outline' : 'solid'))}
        variant={toggle}
        mx={2}
        bg='primary'
      >
        Toggle Button
      </Button>
      <Button mx={2} bg='warning'>
        Button Solid
      </Button>
      <Button mx={2} bg='success'>
        Button Solid
      </Button>
      <Spacer x={5} />
      <Button bg='success' mx={2} variant='outline'>
        Button outline
      </Button>
      <Button bg='primary' mx={2} variant='outline'>
        Button outline
      </Button>

      <Spacer y={2} />

      <Box bg='silver' p={3}>
        <Button mx={2} bg='primary' size='big' rounded='none'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='big'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='big' rounded='md'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='big' rounded='lg'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='big' rounded='full'>
          Button
        </Button>
      </Box>

      <Spacer y={2} />

      <Box bg='silver' p={3}>
        <Button mx={2} bg='primary' size='large' rounded='none'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='large'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='large' rounded='md'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='large' rounded='lg'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='large' rounded='full'>
          Button
        </Button>
      </Box>

      <Spacer y={2} />

      <Box bg='silver' p={3}>
        <Button mx={2} bg='primary' rounded='none'>
          Button
        </Button>
        <Button mx={2} bg='danger'>
          Button
        </Button>
        <Button mx={2} bg='danger' rounded='md'>
          Button
        </Button>
        <Button mx={2} bg='danger' rounded='lg'>
          Button
        </Button>
        <Button mx={2} bg='danger' rounded='full'>
          Button
        </Button>
      </Box>

      <Spacer y={2} />

      <Box bg='silver' p={3}>
        <Button mx={2} bg='primary' size='small' rounded='none'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='small'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='small' rounded='md'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='small' rounded='lg'>
          Button
        </Button>
        <Button mx={2} bg='danger' size='small' rounded='full'>
          Button
        </Button>
      </Box>

      <Spacer y={2} />

      <Box textAlign='center' fontSize={32} m='auto'>
        <img alt='Anggun Design System' src={logo} />

        <Box data-testid='border-radius' rounded='full' bg='red.666' color='silver'>
          Box with border radius
        </Box>
        <Box data-testid='button1' bg='red.666' color='silver' my={20} borderRadius={3}>
          I am the Box
        </Box>
        <Box bg='danger' color='silver' my={20} border='solid 1px' borderWidth={2} borderRadius={6}>
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
