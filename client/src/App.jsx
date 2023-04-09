import React from 'react'
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom'
import {Navbar} from './components'
import { Backtest,DragDrop,Strategy } from './pages'
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/backtest" element={<Backtest/>}/>
            <Route path="/dragdrop" element={<DragDrop/>}/>
            <Route path="/strategy" element={<Strategy/>}/>
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App