//npm
import { Routes, Route } from 'react-router-dom'
//components
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
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
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='resume' element={<ResumePage />} />
        <Route path='Projects' element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
