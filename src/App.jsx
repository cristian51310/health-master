import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import FormElements from './pages/Form/FormElements'
import FormPaciente from './pages/FormPaciente'
import ListPacientes from './pages/ListPacientes'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import DetailPaciente from './pages/DetailPaciente'

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
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forms/form-elements' element={<FormElements />} />

          <Route path='/create/paciente' element={<FormPaciente />} />
          <Route path='/pacientes' element={<ListPacientes />} />
          <Route path='/paciente/:id' element={<DetailPaciente />} />

          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Routes>
      </>
    )
  )
}

export default App
