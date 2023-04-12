/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Input from '../components/Input'
import { useParams, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import { AiFillAlipayCircle, AiOutlineUserAdd } from 'react-icons/ai'
import { Button } from '../components/Button'
import TextArea from '../components/TextArea'

const FormReceta = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [fecha, setFecha] = useState(new Date().toISOString().substr(0, 10))
  useEffect(() => {
    const date = new Date().toISOString().substr(0, 10)
    setFecha(date)
  }, [])

  const [receta, setReceta] = useState({
    doctorId: '',
    pacienteId: '',
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

  const [createPaciente, { loading }] = useMutation(CREATE_PACIENTE, {
    refetchQueries: [
      {
        query: GET_ALL_PACIENTES
      },
      'GetAllPacintes'
    ]
  })

  const handleChange = e => {
    setReceta({
      ...receta,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/pacientes')
  }

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
          <form className='grid grid-cols-12 p-6.5 gap-x-5' onSubmit={handleSubmit}>

            <div className='col-span-8' />

            <div className='col-span-4'>
              <Input
                name='fecha'
                text='Fecha de hoy'
                type='date'
                value={fecha}
                placeholder='Ingresa el nombre del paciente'
                onChange={setFecha}
              />
            </div>

            <div className='md:col-span-10 col-span-9'>
              <Input
                name='nombreCompleto'
                text='Nombre del paciente'
                type='text'
                placeholder='Ingresa el nombre del paciente'
                onChange={handleChange}
              />
            </div>

            <div className='md:col-span-2 col-span-3 mt-5'>
              <Button
                text=''
                type='submit'
                icon={<AiOutlineUserAdd className='w-5 h-5' />}
              />
            </div>

            <div className='col-span-3'>
              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={handleChange}
              />
            </div>

            <div className='col-span-3'>
              <Input
                name='edad'
                text='Edad'
                type='number'
                onChange={handleChange}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='genero'
                text='Genero'
                type='text'
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
