import React, { useState } from 'react'
import Logo from '../../images/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineKey, AiOutlineMail } from 'react-icons/ai'
import Input from '../../components/Input'
import { useMutation } from '@apollo/client'
import { CREATE_USUARIO } from '../../graphql/usuarios.js'
import { CREATE_DOCTOR } from '../../graphql/doctores.js'
import { Button } from '../../components/Button'

const SignIn = () => {
  const navigate = useNavigate()

  const [doctor, setDoctor] = useState({
    usuarioId: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    genero: '',
    curp: '',
    rfc: '',
    cedula: ''
  })

  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  const handleChangeDoctor = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeUser = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const [createUsuario] = useMutation(CREATE_USUARIO)

  const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await createUsuario({
      variables: {
        email: usuario.email,
        password: usuario.password
      }
    })
    const idNewUsuario = (data.createUsuario._id)
    await createDoctor({
      variables: {
        usuarioId: idNewUsuario,
        nombre: doctor.nombre,
        apellidoPaterno: doctor.apellidoPaterno,
        apellidoMaterno: doctor.apellidoMaterno,
        fechaNacimiento: doctor.fechaNacimiento,
        genero: doctor.genero,
        curp: doctor.curp,
        rfc: doctor.rfc,
        cedula: doctor.cedula
      }
    })
    navigate('/auth/login')
  }

  return (

    <div className='bg-white min-h-screen text-gray-900 flex justify-center items-center'>

      <div className='w-full py-10 md:px-48 px-10 flex-1'>

        <div className='mt-8 flex flex-col items-center'>
          <form onSubmit={handleSubmit} className='grid grid-cols-2 w-full gap-12'>
            <div className='md:col-span-1 col-span-2'>

              <div className='flex items-center justify-start w-full gap-7 mb-8'>
                <img src={Logo} className='w-20' />
                <h1 className='text-5xl font-bold'>Registrate</h1>
              </div>

              <Input
                name='nombre'
                text='Nombre'
                type='text'
                placeholder='Ingresa tu nombre'
                onChange={handleChangeDoctor}
              />

              <Input
                name='apellidoPaterno'
                text='Apellido Paterno'
                type='text'
                placeholder='Ingresa tu primer apellido'
                onChange={handleChangeDoctor}
              />

              <Input
                name='apellidoMaterno'
                text='Apellido Materno'
                type='text'
                placeholder='Ingresa tu segundo apellido'
                onChange={handleChangeDoctor}
              />

              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={handleChangeDoctor}
              />

              <Input
                name='genero'
                text='Genero'
                placeholder='Ingresa tu genero (M/F)'
                type='text'
                onChange={handleChangeDoctor}
              />
            </div>

            <div className='md:col-span-1 col-span-2 mt-2'>

              <Input
                name='curp'
                text='CURP'
                type='text'
                placeholder='Ingresa tu curp (18 digitos)'
                limit={18}
                onChange={handleChangeDoctor}
              />

              <Input
                name='rfc'
                text='RFC'
                type='text'
                placeholder='Ingresa tu rfc'
                limit={18}
                onChange={handleChangeDoctor}
              />

              <Input
                name='cedula'
                text='Cedula profesional'
                type='text'
                placeholder='ingresa tu cedula'
                limit={18}
                onChange={handleChangeDoctor}
              />

              <Input
                name='email'
                text='Email'
                type='email'
                placeholder='ejemplo@ejemplo.com'
                icon={<AiOutlineMail />}
                onChange={handleChangeUser}
              />

              <Input
                name='password'
                text='Contraseña'
                type='password'
                placeholder='**********'
                limit={8}
                icon={<AiOutlineKey />}
                onChange={handleChangeUser}
              />

              <Button
                text='Registrar Paciente'
                type='submit'
                disabled={!doctor.nombre || !doctor.fechaNacimiento || !doctor.genero || !usuario.email || !usuario.password || loading}
              />

              <div className='mt-6 text-center'>
                <p>
                  Ya tienes una cuenta?{' '}
                  <Link to='/auth/login' className='text-primary'>
                    Inicia Sesion
                  </Link>
                </p>
              </div>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default SignIn
