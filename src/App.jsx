//npm
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
//components
import NavBar from './components/NavBar.jsx'
//pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='resume' element={<ResumePage />} />
        <Route path='Projects' element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
