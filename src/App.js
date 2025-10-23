
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './pages/Experience/Experience';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const location = useLocation();


  return (
    <>
      <Header/>
      <AnimatePresence exitBeforeEnter>
        <Routes location = {location} key={location.pathname}>
          <Route path='/' element={
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8 }}
            >
              <Hero/>
              </motion.div>}
              ></Route>

          <Route path='/experience' element= {
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8 }}
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
    <App />
    </BrowserRouter>
  )
}
