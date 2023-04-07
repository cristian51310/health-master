/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Input from '../components/Input'
import { useParams, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import userThree from '../images/user/user-01.png'
import { AiOutlineCloudUpload, AiFillAlipayCircle } from 'react-icons/ai'
import { Button } from '../components/Button'

const FormReceta = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [paciente, setPaciente] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    genero: ''
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
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPaciente({
      variables: {
        nombre: paciente.nombre,
        apellidoPaterno: paciente.apellidoPaterno,
        apellidoMaterno: paciente.apellidoMaterno,
        fechaNacimiento: paciente.fechaNacimiento,
        genero: paciente.genero
      }
    })
    navigate('/pacientes')
  }

  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9'>

        {/* <!-- Sign in Form --> */}
        <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-medium text-black  '>
              Tus datos personales
            </h3>
          </div>
          <form className='grid grid-cols-5 p-6.5 gap-10' onSubmit={handleSubmit}>

            <div className='lg:col-span-3 col-span-5'>
              <Input
                name='nombre'
                text='Nombre'
                type='text'
                placeholder='Ingresa tu nombre'
                onChange={handleChange}
              />

              <Input
                name='apellidoPaterno'
                text='Apellido Paterno'
                type='text'
                placeholder='Ingresa tu apellido paterno'
                onChange={handleChange}
              />

              <Input
                name='apellidoMaterno'
                text='Apellido Materno'
                type='text'
                placeholder='Ingresa tu apellido materno'
                onChange={handleChange}
              />

              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={handleChange}
              />

              <Input
                name='genero'
                text='Genero'
                type='text'
                placeholder='Ingresa tu genero (M/F)'
                onChange={handleChange}
              />

              <Button
                text='Registrar Paciente'
                icon={<AiFillAlipayCircle />}
                type='submit'
                disabled={!paciente.nombre || !paciente.fechaNacimiento || !paciente.genero || loading}
              />
            </div>

            <div className='lg:col-span-2 col-span-5'>
              <div className='mb-4 flex items-center gap-3'>
                <img className='h-14 w-14 rounded-full' src={userThree} alt='User' />
                <div>
                  <span className='mb-1.5 text-black'>Edita tu foto</span>
                  <span className='flex gap-2.5 text-sm'>Sube una nueva foto de perfil</span>
                </div>
              </div>

              <div
                id='FileUpload'
                className='relative mb-5.5 block w-full cursor-pointer appearance-none rounded-xl border-2 border-dashed border-primary bg-gray-100py-4 px-4   sm:py-7.5'
              >
                <input
                  type='file'
                  name='file'
                  onChange={(e) => { console.log(e.target.files[0]) }}
                  accept='image/*'
                  className='absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none'
                />
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <span className='flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white    '>
                    <AiOutlineCloudUpload />
                  </span>
                  <p>
                    <span className='text-primary'>Click to upload</span> or
                    drag and drop
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default FormReceta
