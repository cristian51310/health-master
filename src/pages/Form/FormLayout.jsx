/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import Input from '../../components/Input'
import { useParams, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_PACIENTE, GET_ALL_PACIENTES } from '../../graphql/pacientes'
import userThree from '../../images/user/user-01.png'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const FormLayout = () => {
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
        apellidoMaterno: paciente.apellidoPaterno,
        fechaNacimiento: paciente.fechaNacimiento,
        genero: paciente.genero
      }
    })
    navigate('/tables')
  }

  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-5'>
        <div className='col-span-5 xl:col-span-3 flex flex-col gap-9'>
          {/* <!-- Sign in Form --> */}
          <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Sign In Form
              </h3>
            </div>
            <form className='p-6.5' onSubmit={handleSubmit}>
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

              <button
                disabled={!paciente.nombre || !paciente.fechaNacimiento || !paciente.genero || loading}
                type='submit' className=' disabled:bg-gray-700 mt-6 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray-100 '
              >
                Registrar Paciente
              </button>

            </form>
          </div>
        </div>

        <div className='col-span-5 xl:col-span-2'>
          <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-7  '>
              <h3 className='font-medium text-black  '>
                Your Photo
              </h3>
            </div>
            <div className='p-7'>
              <form action='#'>
                <div className='mb-4 flex items-center gap-3'>
                  <div className='h-14 w-14 rounded-full'>
                    <img src={userThree} alt='User' />
                  </div>
                  <div>
                    <span className='mb-1.5 text-black  '>
                      Edita tu foto
                    </span>
                    <span className='flex gap-2.5'>
                      <button className='text-sm hover:text-primary'>
                        Sube una nueva foto de perfil
                      </button>
                    </span>
                  </div>
                </div>

                <div
                  id='FileUpload'
                  className='relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray-100py-4 px-4   sm:py-7.5'
                >
                  <input
                    type='file'
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

                <div className='flex justify-end gap-4.5'>
                  <button
                    className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray-100 hover:bg-opacity-70'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FormLayout
