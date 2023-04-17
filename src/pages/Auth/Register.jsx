import React from 'react'
import Logo from '../../images/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import Input from '../../components/Input'
import { useMutation } from '@apollo/client'
import { CREATE_USUARIO } from '../../graphql/usuarios.js'
import { CREATE_DOCTOR } from '../../graphql/doctores.js'
import { Button } from '../../components/Button'
import { useFormik } from 'formik'
import Select from 'react-select'

const options = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' }
]

const SignIn = () => {
  const navigate = useNavigate()
  const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR)
  const [createUsuario] = useMutation(CREATE_USUARIO)

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      genero: '',
      curp: '',
      rfc: '',
      cedula: '',
      doctorId: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      const { data } = await createDoctor({
        variables: {
          nombre: values.nombre,
          apellidoPaterno: values.apellidoPaterno,
          apellidoMaterno: values.apellidoMaterno,
          fechaNacimiento: values.fechaNacimiento,
          genero: values.genero,
          curp: values.curp,
          rfc: values.rfc,
          cedula: values.cedula
        }
      })
      const idNewDoctor = (data.createDoctor._id)
      await createUsuario({
        variables: {
          doctorId: idNewDoctor,
          email: values.email,
          password: values.password
        }
      })
      navigate('/auth/login')
    }
  })

  return (

    <div className='bg-white min-h-screen text-gray-900 flex justify-center items-center'>

      <div className='w-full py-4 md:px-48 px-10 flex-1'>

        <div className='mt-8 flex flex-col items-center'>
          <form
            onSubmit={formik.handleSubmit}
            className='grid grid-cols-2 w-full gap-12'
          >
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
              />

              <Input
                name='apellidoPaterno'
                text='Apellido Paterno'
                type='text'
                placeholder='Ingresa tu primer apellido'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidoPaterno}
              />

              <Input
                name='apellidoMaterno'
                text='Apellido Materno'
                type='text'
                placeholder='Ingresa tu segundo apellido'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidoMaterno}
              />

              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fechaNacimiento}
              />

              <div>
                <label className=' text-black'>Genero</label>
                <Select
                  name='genero'
                  options={options}
                  value={options.find((option) => option.value === formik.values.genero)}
                  defaultValue={options.find((option) => option.value === 'masculino')}
                  onChange={(option) => formik.setFieldValue('genero', option.value)}
                  onBlur={formik.handleBlur}
                  className='mt-3 active:border-blue-500 rounded-xl'
                />
              </div>
            </div>

            <div className='md:col-span-1 col-span-2 mt-2'>

              <Input
                name='curp'
                text='CURP'
                type='text'
                placeholder='Ingresa tu curp (18 digitos)'
                limit={18}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.curp}
              />

              <Input
                name='rfc'
                text='RFC'
                type='text'
                placeholder='Ingresa tu rfc'
                limit={18}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rfc}
              />

              <Input
                name='cedula'
                text='Cedula profesional'
                type='text'
                placeholder='ingresa tu cedula'
                limit={18}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cedula}
              />

              <Input
                name='email'
                text='Email'
                type='email'
                placeholder='ejemplo@ejemplo.com'
                icon={<AiOutlineMail />}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              <Input
                name='password'
                text='Contraseña'
                type='password'
                placeholder='**********'
                limit={8}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              <div className='flex mt-9'>
                <Button
                  text='Registrar Paciente'
                  type='submit'
                  disabled={loading}
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
