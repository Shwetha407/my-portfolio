import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loading components (required in assignment)
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>

      <Footer />
    </div>
  )
}

export default App