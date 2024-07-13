import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Detail from './components/Detail'
import Actor from './components/Actor'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='/actor/:id' element={<Actor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
