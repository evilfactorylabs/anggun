import React from 'react'
import { ThemeProvider, Box, Button } from '@evilfactory/anggun-core'
import logo from './logo.svg'

function App() {
  return (
    <ThemeProvider>
      <Button mx={2} bg='primary'>
        Button Solid
      </Button>
      <Button bg='primary' variant='outline'>
        Button outline
      </Button>
      {/* <Box bg='silver' p={3}> */}
      {/*   <Button mx={2} bg='blue' size='big' rounded='none'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='big'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='big' rounded='md'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='big' rounded='lg'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='big' rounded='full'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/* </Box> */}
      {/* <br /> */}
      {/* <br /> */}

      {/* <Box bg='silver' p={3}> */}
      {/*   <Button mx={2} bg='blue' size='large' rounded='none'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='large'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='large' rounded='md'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='large' rounded='lg'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='large' rounded='full'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/* </Box> */}
      {/* <br /> */}
      {/* <br /> */}

      {/* <Box bg='silver' p={3}> */}
      {/*   <Button mx={2} bg='blue' rounded='none'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' rounded='md'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' rounded='lg'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' rounded='full'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/* </Box> */}
      {/* <br /> */}
      {/* <br /> */}

      {/* <Box bg='silver' p={3}> */}
      {/*   <Button mx={2} bg='blue' size='small' rounded='none'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='small'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='small' rounded='md'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='small' rounded='lg'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/*   <Button mx={2} bg='red.999' size='small' rounded='full'> */}
      {/*     Button */}
      {/*   </Button> */}
      {/* </Box> */}
      {/* <br /> */}
      {/* <br /> */}

      <Box textAlign='center' fontSize={32} m='auto'>
        <img alt='Anggun Design System' src={logo} />

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
