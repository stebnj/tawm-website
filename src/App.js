
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { AnimatePresence, motion, useScroll,useTransform } from 'framer-motion';
import {useState, useEffect, useRef} from "react"


function App() {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if(container){
        container.style.scrollBehavior = 'smooth'
      }
    },[])

    return (
    <Routes>
      <Route path="*" element={
        <div 
          ref={containerRef}
          style={{
            height: '100vh',
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory',
          }}
        >
          <section id="summary" style={{ height: '100vh', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
            <Hero />
          </section>
          
          <section id="experience" style={{ height: '100vh', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
            <Experience />
          </section>
          
          <section id="contact" style={{ height: '100vh', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
            <Contact />
          </section>
        </div>
      } />
    </Routes>
    )
}

export default function AppWrapper(){
  return(
    <BrowserRouter>
    
    <Header />
    <App />
    
    
    </BrowserRouter>

  )
}