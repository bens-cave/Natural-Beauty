import React, { useEffect } from 'react'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



// Import components

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './Home'
import Map from './components/Map'
import ParkMap from './components/maps/ParkMap'

const App = () => {

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/parks') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <>
      <h1>Natural Beauty</h1>
      {/* Components with link components */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/maptest" element={<Map />}></Route>
          <Route path="/parkmaptest" element={<ParkMap />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
