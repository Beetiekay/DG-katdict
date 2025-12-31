import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Load from './components/Load'


export default function App() {
  return (
    <BrowserRouter >
     <Routes>
          <Route path="/" element={<Home/>}/>
     </Routes>
      <Load/>
   </BrowserRouter>
  )
}
