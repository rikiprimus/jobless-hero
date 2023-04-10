import React from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'

function App() {
  return (
    <div className='bg-wblue mb-[1000px]'>
      <div className='p-6 md:mx-[150px]'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
