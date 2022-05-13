import { useState } from 'react'
import logo from './logo.svg'
import {Routes,Route} from 'react-router-dom'
import Layout from './Layouts/Layout'
import './style.css'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
