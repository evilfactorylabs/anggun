import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider, Box } from '@evilfactory/edan-core'

function App() {
  return (
    <ThemeProvider>
      <Box textAlign="center" width="50%" fontSize={32} m="auto" p={10}>
        <Box bg="red.666" color="silver" my={20} borderRadius={3}>
          I am the Box
        </Box>
        <Box bg="red.999" color="silver" my={20} border="solid 1px" borderWidth={2} borderRadius={6}>
          I am the Box
        </Box>
        <Box bg="navy" color="silver" my={20}>
          I am the Box
        </Box>
        <Box color="#faf" my={20} border="solid 1px" borderWidth={2} borderRadius={999}>
          I am the Box
        </Box>
      </Box>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
