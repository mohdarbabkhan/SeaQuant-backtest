import React from 'react'
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom'
import {Navbar} from './components'
import { Backtest,DragDrop,Strategy,Login,Signup } from './pages'
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/backtest" element={<Backtest/>}/>
            <Route path="/dragdrop" element={<DragDrop/>}/>
            <Route path="/strategy" element={<Strategy/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App