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
import * as yup from 'yup'
import { ErrorBadge, SuccesBadge, WarningBadge } from '../../components/ErrorBadge'

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
      genero: 'masculino',
      curp: '',
      rfc: '',
      cedula: '',
      doctorId: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      nombre: yup.string().required('Nombre obligatorio'),
      apellidoPaterno: yup.string().required('Apellido obligatorio'),
      apellidoMaterno: yup.string().required('Apellido obligatorio'),
      fechaNacimiento: yup.date().required('Fecha obligatoria'),
      curp: yup.string().required('Curp obligatoria'),
      rfc: yup.string().required('RFC obligatorio'),
      cedula: yup.string().required('Cedula obligatoria'),
      email: yup.string().required('Email obligatorio').email('Ingresa un email valido'),
      password: yup.string().required('Password Obligatorio').min(3, 'Password muy corto')
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(formik.values.genero)
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
              >
                {formik.touched.nombre && formik.errors.nombre
                  ? (<ErrorBadge errorMessage={formik.errors.nombre} />)
                  : formik.touched.nombre && !formik.errors.nombre
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='apellidoPaterno'
                text='Apellido Paterno'
                type='text'
                placeholder='Ingresa tu primer apellido'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidoPaterno}
              >
                {formik.touched.apellidoPaterno && formik.errors.apellidoPaterno
                  ? (<ErrorBadge errorMessage={formik.errors.apellidoPaterno} />)
                  : formik.touched.apellidoPaterno && !formik.errors.apellidoPaterno
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='apellidoMaterno'
                text='Apellido Materno'
                type='text'
                placeholder='Ingresa tu segundo apellido'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidoMaterno}
              >
                {formik.touched.apellidoMaterno && formik.errors.apellidoMaterno
                  ? (<ErrorBadge errorMessage={formik.errors.apellidoMaterno} />)
                  : formik.touched.apellidoMaterno && !formik.errors.apellidoMaterno
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fechaNacimiento}
              >
                {formik.touched.fechaNacimiento && formik.errors.fechaNacimiento
                  ? (<ErrorBadge errorMessage={formik.errors.fechaNacimiento} />)
                  : formik.touched.fechaNacimiento && !formik.errors.fechaNacimiento
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

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
              >
                {formik.touched.curp && formik.errors.curp
                  ? (<ErrorBadge errorMessage={formik.errors.curp} />)
                  : formik.touched.curp && !formik.errors.curp
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='rfc'
                text='RFC'
                type='text'
                placeholder='Ingresa tu rfc'
                limit={18}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rfc}
              >
                {formik.touched.rfc && formik.errors.rfc
                  ? (<ErrorBadge errorMessage={formik.errors.rfc} />)
                  : formik.touched.rfc && !formik.errors.rfc
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='cedula'
                text='Cedula profesional'
                type='text'
                placeholder='ingresa tu cedula'
                limit={18}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cedula}
              >
                {formik.touched.cedula && formik.errors.cedula
                  ? (<ErrorBadge errorMessage={formik.errors.cedula} />)
                  : formik.touched.cedula && !formik.errors.cedula
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='email'
                text='Email'
                type='email'
                placeholder='ejemplo@ejemplo.com'
                icon={<AiOutlineMail />}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              >
                {formik.touched.email && formik.errors.email
                  ? (<ErrorBadge errorMessage={formik.errors.email} />)
                  : formik.touched.email && !formik.errors.email
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='password'
                text='Contraseña'
                type='password'
                placeholder='**********'
                limit={8}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              >
                {formik.touched.password && formik.errors.password
                  ? (<ErrorBadge errorMessage={formik.errors.password} />)
                  : formik.touched.password && !formik.errors.password
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <div className='flex mt-3'>
                <Button
                  text='Registrar Paciente'
                  type='submit'
                  disabled={formik.errors.nombre || formik.errors.apellidoPaterno || formik.errors.apellidoMaterno || formik.errors.fechaNacimiento || formik.errors.curp || formik.errors.rfc || formik.errors.cedula || formik.errors.email || formik.errors.password || loading || !formik.values.nombre || !formik.values.apellidoPaterno || !formik.values.apellidoMaterno || !formik.values.fechaNacimiento || !formik.values.curp || !formik.values.rfc || !formik.values.cedula || !formik.values.email || !formik.values.password}
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
