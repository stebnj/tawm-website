
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './pages/Experience/Experience';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/exp' element= {<Experience />}></Route>
      </Routes>
      


    </BrowserRouter>
 
  
    
    
  );
}

export default App;
