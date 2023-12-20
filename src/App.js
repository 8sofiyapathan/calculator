import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calsi from './components/Calsi'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
      <>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element = {<Calsi/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = { <Contact/>}/>    
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      {/* <Nav/>
      <Calsi/>
      <About/>
      <Contact/>
      <Footer/>
      <Test/> */}
      </>
  )
}

export default App

