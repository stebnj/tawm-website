
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero />


    </BrowserRouter>
 
  
    
    
  );
}

export default App;
