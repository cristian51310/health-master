import React, { useState } from 'react'
import Logo from '../../images/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import Input from '../../components/Input'
import { useMutation } from '@apollo/client'
import { CREATE_USUARIO } from '../../graphql/usuarios.js'
import { CREATE_DOCTOR } from '../../graphql/doctores.js'
import { Button } from '../../components/Button'

const SignIn = () => {
  const navigate = useNavigate()

  const [doctor, setDoctor] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    curp: '',
    rfc: '',
    cedula: ''
  })

  const [usuario, setUsuario] = useState({
    doctorId: '',
    email: '',
    password: ''
  })

  const [gender, setGender] = useState('masculino')

  const handleGenderChange = (e) => {
    setGender(e.target.value)
    console.log(gender)
  }

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

  const [createDoctor] = useMutation(CREATE_DOCTOR)

  const [createUsuario] = useMutation(CREATE_USUARIO)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await createDoctor({
      variables: {
        nombre: doctor.nombre,
        apellidoPaterno: doctor.apellidoPaterno,
        apellidoMaterno: doctor.apellidoMaterno,
        fechaNacimiento: doctor.fechaNacimiento,
        genero: gender,
        curp: doctor.curp,
        rfc: doctor.rfc,
        cedula: doctor.cedula
      }
    })
    const idNewDoctor = (data.createDoctor._id)
    await createUsuario({
      variables: {
        doctorId: idNewDoctor,
        email: usuario.email,
        password: usuario.password
      }
    })
    navigate('/auth/login')
  }

  return (

    <div className='bg-white min-h-screen text-gray-900 flex justify-center items-center'>

      <div className='w-full py-4 md:px-48 px-10 flex-1'>

        <div className='mt-8 flex flex-col items-center'>
          <form onSubmit={handleSubmit} className='grid grid-cols-2 w-full gap-12'>
            <div className='md:col-span-1 col-span-2'>

              <div className='flex items-center justify-start w-full gap-7 mb-8'>
                <img src={Logo} className='w-20' />
                <h1 className='text-5xl font-bold'>Bienvenido</h1>
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

              <div>
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
                onChange={handleChangeUser}
              />

              <div className='flex mt-9'>
                <Button
                  text='Registrar Paciente'
                  type='submit'
                  disabled={!doctor.nombre || !doctor.fechaNacimiento || !usuario.email || !usuario.password}
                />
              </div>

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
