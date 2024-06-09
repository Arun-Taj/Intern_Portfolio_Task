import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
const App = () => {
  
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App