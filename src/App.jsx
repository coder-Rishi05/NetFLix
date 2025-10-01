import { useState } from 'react'
import "./index.css"
import Header from './components/Header'
import Hero from './components/Hero'
import Movies from './components/Movies'

function App() {
 
  return (
   <div className='bg-zinc-800 h-screen w-full '>
    <Header/>
    <Hero />
    <Movies />
   </div>
  )
}

export default App
