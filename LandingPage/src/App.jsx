import './App.css'
import Background from './components/Background';
import Footer from './components/Footer'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextTelaInicial from './components/TextTelaInicial';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Sobre from './components/Sobre';


function App() {
  


  return (
    <>
   
    <Background/>
    
    <Header/>
    <TextTelaInicial/>
    <Sobre/>

      <Footer/>
      
    </>
  )
}

export default App
