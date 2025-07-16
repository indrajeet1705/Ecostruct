import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home.jsx'
import Products from './components/products.jsx'
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>

        <Route path='/products' element={<Products></Products>}/>
        <Route path='/contact' element={<Contact></Contact>}/>

      </Routes>
    </div>
    
    </>
  )
}

export default App
