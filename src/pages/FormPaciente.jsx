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

const FormPaciente = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [paciente, setPaciente] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: ''
  })

  const handleChange = e => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value
    })
  }

  const [gender, setGender] = useState('masculino')

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const [createPaciente, { loading }] = useMutation(CREATE_PACIENTE, {
    refetchQueries: [{ query: GET_ALL_PACIENTES }, 'GetAllPacintes']
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPaciente({
      variables: {
        nombre: paciente.nombre,
        apellidoPaterno: paciente.apellidoPaterno,
        apellidoMaterno: paciente.apellidoMaterno,
        fechaNacimiento: paciente.fechaNacimiento,
        genero: gender
      }
    })
    navigate('/pacientes')
  }

  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9'>

        {/* <!-- Sign in Form --> */}
        <div className='rounded-2xl border border-stroke bg-white shadow-xl    '>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-medium text-black  '>
              Tus datos personales
            </h3>
          </div>
          <form className='grid grid-cols-12 gap-x-6 p-9' onSubmit={handleSubmit}>

            <div className='col-span-12'>
              <Input
                name='nombre'
                text='Nombre'
                type='text'
                placeholder='Ingresa tu nombre'
                onChange={handleChange}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='apellidoPaterno'
                text='Apellido Paterno'
                type='text'
                placeholder='Ingresa tu apellido paterno'
                onChange={handleChange}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='apellidoMaterno'
                text='Apellido Materno'
                type='text'
                placeholder='Ingresa tu apellido materno'
                onChange={handleChange}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={handleChange}
              />
            </div>

            <div className='col-span-6'>
              <label className=' text-black'>Genero</label>
              <select
                value={gender}
                onChange={handleGenderChange}
                className='relative col-span-12 mb-4 mt-2.5 w-full rounded-xl border-[2.5px] border-stroke bg-transparent py-3.5 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
              >
                <option value='masculino'>Masculino</option>
                <option value='femenino'>Femenino</option>
              </select>
            </div>

            <div className='col-span-12'>
              <Button
                text='Registrar Paciente'
                icon={<AiFillAlipayCircle />}
                type='submit'
                disabled={!paciente.nombre || !paciente.fechaNacimiento || !paciente.genero || loading}
              />
            </div>

          </form>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default FormPaciente
