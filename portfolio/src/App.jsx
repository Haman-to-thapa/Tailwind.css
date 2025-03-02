import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Marque from './component/Marque'
import Skills from './component/Skills'
import Achive from './component/Achive'
import Project from './component/Project'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Marque />
      <About />
      <Skills />
      <Achive />
      <Project />

    </div>
  )
}

export default App

