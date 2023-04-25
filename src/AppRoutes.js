import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Api from './pages/Api'
import BlockGame from './pages/BlockGame'
import ErrorPage from './pages/ErrorPage'
import Redux from './pages/Redux'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Api' element={<Api/>}/>
        <Route path='/Redux' element={<Redux/>}/>
        <Route path='/illusion' element={<BlockGame/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default AppRoutes
