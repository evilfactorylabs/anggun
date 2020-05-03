import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  Box,
  Button,
  Spacer,
  Text,
  Badge,
  Image
} from '@evilfactory/anggun-core'
import logo from './logo.svg'
import { useState } from 'react'

import GridComponent from './components/GridComponent'
import FlexComponent from './components/FlexComponent'

function App() {
  const [toggle, setToggle] = useState('solid')
  return (
    <ThemeProvider>
      <CSSReset />

      <Spacer y={2} />

      <Box textAlign='center'>
        <Image alt='Anggun Design System' src={logo} />
      </Box>

      <Spacer y={2} />

      <Box textAlign='center'>
        <Badge primary variant='outline' size='small'>
          Primary
        </Badge>

        <Spacer x={1} />

        <Badge primary size='small'>
          Primary
        </Badge>

        <Spacer y={1} />
        <Badge primary size='medium'>
          Primary
        </Badge>
        <Spacer x={1} />
        <Badge primary variant='outline' size='medium'>
          Primary
        </Badge>
        <Spacer y={1} />
        <Badge primary size='large'>
          Primary
        </Badge>
        <Spacer y={1} />
        <Badge primary size='large' fontSize='12px'>
          Primary
        </Badge>
        <Spacer y={1} />

        <Spacer x={2} />

        <Badge warning>warning</Badge>
        <Spacer x={2} />
        <Badge warning variant='outline'>
          warning
        </Badge>

        <Spacer x={2} />

        <Badge success>SUCCESS</Badge>

        <Spacer x={2} />

        <Badge success>123</Badge>

        <Spacer x={2} />

        <Badge danger>danger</Badge>
      </Box>

      <Spacer y={2} />

      <FlexComponent />

      <Spacer y={2} />

      <GridComponent />

      <Spacer y={2} />

      <Text as='kbd' fontSize='lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Spacer y={1} />

      <Button mx={2} bg='warning'>
        Button Solid Button Solid Button Solid Button Solid
      </Button>

      <Spacer y={1} />

      <Button mx={2} size='large' bg='warning'>
        Button Solid Button Solid Button Solid Button Solid
      </Button>

      <Spacer y={1} />

      <Button mx={2} bg='warning'>
        Button
      </Button>

      <Spacer y={1} />

      <Button mx={2} size='small' bg='warning'>
        Button
      </Button>

      <Button mx={2} fontSize='12px' size='small' bg='warning'>
        Button
      </Button>

      <Spacer y={1} />
      <Button
        onClick={() => setToggle(current => (current === 'solid' ? 'outline' : 'solid'))}
        variant={toggle}
        mx={2}
        bg='warning'
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
