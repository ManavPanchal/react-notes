import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Api from './pages/Api'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Api' element={<Api/>}/>
    </Routes>
  )
}

export default AppRoutes
