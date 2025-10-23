
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './pages/Experience/Experience';
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import {useState, useEffect} from "react"


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const[scrollDirection, setScrollDirection] = useState('down')

  useEffect(() => {
    const handleWheel = (e) => {
      if(e.deltaY > 0) {
        setScrollDirection('down');
        if(location.pathname === '/') navigate('/experience')
      } else if (e.deltaY < 0){
        setScrollDirection('up');
        if(location.pathname === '/experience') navigate('/')
      }
    }

    window.addEventListener('wheel', handleWheel, {passive:true});
    return () => window.removeEventListener('wheel', handleWheel)
  }, [navigate, location])

  const variants = {
    initial: (direction) => ({ y:direction === "down" ? "100%" : "-100%", opacity: 0}),
    animate: { y: '0%', opacity: 1 },
    exit: (direction) => ({ y: direction === 'down' ? '-100%' : '100%', opacity: 0 }),
  }


  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location = {location} key={location.pathname}>
          <Route path='/' element={
            <motion.div
              custom={scrollDirection}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              style={{ zIndex: 1 }}
            >
              <Hero/>
              </motion.div>}
              ></Route>

          <Route path='/experience' element= {
            <motion.div
              custom={scrollDirection}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              style={{ zIndex: 1 }}
            >
              <Experience />
            </motion.div>
            }></Route>
        </Routes>  
      </AnimatePresence>
      
      


    </>
  );
}

export default function AppWrapper(){
  return(
    <BrowserRouter>
    <Header />
    <App />
    </BrowserRouter>
  )
}
