import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Home from './pages/Home'

import Alphabet from './pages/Alphabet'
import Words from './pages/Words'



function App() {
  

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alphabet" element={<Alphabet />} />
          <Route path="/words" element={<Words />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
