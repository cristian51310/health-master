import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Analytics from './pages/Dashboard/Analytics'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import FormElements from './pages/Form/FormElements'
import FormLayout from './pages/Form/FormLayout'
import Tables from './pages/Tables'
import Alerts from './pages/UiElements/Alerts'
import Buttons from './pages/UiElements/Buttons'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

const App = () => {
  const [loading, setLoading] = useState(true)

  const preloader = document.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 700)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path='/' element={<Analytics />} />
          <Route path='/dashboard' element={<Analytics />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forms/form-elements' element={<FormElements />} />
          <Route path='/forms/form-layout' element={<FormLayout />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/ui/alerts' element={<Alerts />} />
          <Route path='/ui/buttons' element={<Buttons />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Routes>
      </>
    )
  )
}

export default App
