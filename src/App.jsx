import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Detail from './components/Detail'
import Actor from './components/Actor'
import Gallery from './components/Backdrops'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ImageProvider from './utils/ImageProvider'
import Posters from './components/Posters'
import LogoImages from './components/LogoImages'
import Backdrops from './components/Backdrops'
import NavGallery from './components/NavGallery'
import Trailer from './components/Trailer'
const queryClient = new QueryClient()


function App() {
  return (
    <ImageProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Detail />} />
            <Route path='/:id/trailer' element={<Trailer />} />

            <Route path='/:id/gallery' element={<NavGallery />} >
              <Route path='backdrops' element={<Backdrops />} />
              <Route path='posters' element={<Posters />} />
              <Route path='logos' element={<LogoImages />} />
            </Route>

            <Route path='/actor/:id' element={<Actor />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ImageProvider>
  )
}

export default App
