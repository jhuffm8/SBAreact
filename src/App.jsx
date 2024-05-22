import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Shop } from './pages/Shop'
import { Cart } from './pages/Cart'
import './App.css'

function App() {


  return (
  <div className='App'>

    <NavBar />
    <Routes>
      <Route path='/' element={ <Shop /> } />
      <Route path='/cart' element={ <Cart /> } />
    </Routes>


  </div>
  )
}

export default App
