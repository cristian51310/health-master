import React, { useState, useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ALL_PACIENTES } from '../graphql/pacientes'
import { CREATE_RECETA } from '../graphql/recetas'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { Button } from '../components/Button'
import TextArea from '../components/TextArea'
import jwtDecode from 'jwt-decode'
import { FormatDate } from '../js/formatDate'

const FormReceta = () => {
  const navigate = useNavigate()

  function calcularEdad (fechaNacimiento) {
    const fechaNacimientoMs = fechaNacimiento// Convertir fecha Unix a milisegundos
    const fechaNacimientoObj = new Date(fechaNacimientoMs) // Crear objeto Date
    const edadMs = Date.now() - fechaNacimientoObj.getTime() // Calcular diferencia en milisegundos
    const edad = new Date(edadMs) // Crear objeto Date a partir de la diferencia de tiempo
    return Math.abs(edad.getUTCFullYear() - 1970) // Obtener la edad en años
  }

  // obtener datos del doctor
  const token = window.localStorage.getItem('token')
  const decodedToken = jwtDecode(token)

  const [fecha, setFecha] = useState(new Date().toISOString().substr(0, 10))
  useEffect(() => {
    const date = new Date().toISOString().substr(0, 10)
    setFecha(date)
  }, [])

  const [receta, setReceta] = useState({
    presionArterial: '',
    frecuenciaCardiaca: '',
    frecuenciaRespiratoria: '',
    temperatura: '',
    peso: '',
    estatura: '',
    alergias: '',
    diagnostico: '',
    tratamiento: ''
  })

  const handleChange = e => {
    setReceta({
      ...receta,
      [e.target.name]: e.target.value
    })
  }

  const [selectedPatient, setSelectedPatient] = useState('')
  const { loading, error, data } = useQuery(GET_ALL_PACIENTES)

  const [createReceta] = useMutation(CREATE_RECETA)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createReceta({
      variables: {
        doctorId: decodedToken.user.doctorId,
        pacienteId: selectedPatient,
        presionArterial: receta.presionArterial,
        frecuenciaCardiaca: receta.frecuenciaCardiaca,
        frecuenciaRespiratoria: receta.frecuenciaRespiratoria,
        temperatura: receta.temperatura,
        peso: receta.peso,
        estatura: receta.estatura,
        alergias: receta.alergias,
        diagnostico: receta.diagnostico,
        tratamiento: receta.tratamiento
      }
    })
    navigate(`/paciente/${selectedPatient}`)
  }

  const getDateById = (id) => {
    const patient = data.pacientes.find(p => p._id === id)
    return patient ? patient.fechaNacimiento : ''
  }

  const getGenderById = (id) => {
    const patient = data.pacientes.find(p => p._id === id)
    return patient ? patient.genero : ''
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const patients = data.pacientes
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9'>

        {/* <!-- Sign in Form --> */}
        <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-medium text-black  '>
              Receta Medica
            </h3>
          </div>
          <form className='grid grid-cols-12 p-8 px-10 gap-x-7 gap-y-3' onSubmit={handleSubmit}>

            <div className='col-span-8' />

            <div className='col-span-4'>
              <p className=' text-right mr-3 mb-3 mt-3'>Fecha: {fecha}</p>
            </div>

            <select
              id='patient'
              className='col-span-12 my-4 mt-5 w-full rounded-xl border-[2.5px] border-stroke bg-transparent py-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
              name='pacienteId'
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
            >
              <option value=''>Selecciona un paciente</option>
              {patients.map(patient => (
                <option key={patient._id} value={patient._id}>{patient.nombre + ' ' + patient.apellidoPaterno + ' ' + patient.apellidoMaterno}</option>
              ))}
            </select>

            <div className='col-span-3'>
              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='text'
                value={FormatDate(getDateById(selectedPatient))}
                onChange={handleChange}
              />
            </div>

            <div className='col-span-3'>
              <Input
                name='edad'
                text='Edad'
                type='number'
                value={calcularEdad(getDateById(selectedPatient))}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='genero'
                text='Genero'
                type='text'
                value={getGenderById(selectedPatient)}
                onChange={handleChange}
              />
            </div>

            <div className='col-span-4'>

              <Input
                name='presionArterial'
                text='Presion Arterial (mm/Hg)'
                type='text'
                onChange={handleChange}
              />

              <Input
                name='frecuenciaCardiaca'
                text='Frecuencia Cardiaca (xmin)'
                type='text'
                onChange={handleChange}
              />
              <Input
                name='frecuenciaRespiratoria'
                text='Frecuencia Respiratoria (xmin)'
                type='text'
                onChange={handleChange}
              />
              <Input
                name='temperatura'
                text='Temperatura (°C)'
                type='text'
                onChange={handleChange}
              />
              <Input
                name='peso'
                text='Peso (kg)'
                type='text'
                onChange={handleChange}
              />
              <Input
                name='estatura'
                text='Estatura (m)'
                type='text'
                onChange={handleChange}
              />

              <TextArea
                name='alergias'
                text='Alergias'
                type='text'
                numRows={2}
                onChange={handleChange}
              />
            </div>

            <div className='col-span-8'>
              <TextArea
                name='diagnostico'
                text='Diagnostico'
                type='text'
                numRows={3}
                onChange={handleChange}
              />
              <TextArea
                name='tratamiento'
                text='Tratamiento'
                type='text'
                numRows={15}
                onChange={handleChange}
              />
            </div>

            <div className='col-span-12'>
              <Button
                text='Guardar Receta'
                icon={<AiFillAlipayCircle />}
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default FormReceta
