import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Input from '../../components/Input';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_PACIENTE, GET_ALL_PACIENTES } from '../../graphql/pacientes';
import { AiOutlineAlert } from 'react-icons/ai';

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

  const [createPaciente, { loading, error }] = useMutation(CREATE_PACIENTE, {
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
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        <div className='flex flex-col gap-9'>
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
                disabled={!paciente.nombre || !paciente.fechaNacimiento || !paciente.genero || loading }
                type='submit' className={` disabled:bg-gray-700 mt-6 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray-100 `}
              >
                Registrar Paciente
              </button>

            </form>
          </div>
        </div>


      </div>
    </DefaultLayout>
  )
}

export default FormLayout;
