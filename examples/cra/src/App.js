import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from '@evilfactory/edan-core'

function App() {
  return (
    <>
      <Box textAlign="center" width="50%" fontSize={32} m="auto" p={10}>
        <Box bg="#000" color="#fff" my={20} borderRadius={3}>
          I am the Box
        </Box>
        <Box bg="#123" color="#faf" my={20} border="solid 1px" borderWidth={2} borderRadius={6}>
          I am the Box
        </Box>
        <Box bg="#f44" my={20}>
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
    </>
  )
}

export default App
