import React from 'react'
import Logo from '../../images/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import Input from '../../components/Input'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../graphql/usuarios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ErrorBadge, SuccesBadge, WarningBadge } from '../../components/ErrorBadge'

const Login = () => {
  const navigate = useNavigate()
  const [login, { error }] = useMutation(LOGIN)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().required('Email obligatorio').email('Ingresa un email valido'),
      password: yup.string().required('Password Obligatorio').min(3, 'Password muy corto')
    }),
    onSubmit: async (values, { resetForm }) => {
      const { data } = await login({
        variables: {
          email: values.email,
          password: values.password
        }
      })
      if (!error) {
        window.localStorage.setItem('token', data.login)
        navigate('/dashboard')
      } else {
        console.log('Credenciales invalidas')
      }
    }
  })

  return (

    <div className='bg-white min-h-screen text-gray-900 flex justify-center'>
      <div className='flex justify-center flex-1 items-center'>
        <div className='lg:w-1/2 xl:w-5/12 w-full p-6 sm:p-10'>

          <div className='mt-8 flex flex-col items-center'>
            <div className='flex h-full justify-center items-center gap-8'>
              <img src={Logo} className='w-20 mx-auto' />
              <h1 className='text-2xl xl:text-3xl font-extrabold'>
                Inicia Sesion
              </h1>
            </div>
            <div className='w-full flex-1 mt-8 px-4'>
              <form onSubmit={formik.handleSubmit}>
                <Input
                  name='email'
                  text='Email'
                  type='email'
                  autoComplete='off'
                  placeholder='Ingresa tu correo electronico'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  icon={<AiOutlineMail />}
                >
                  {formik.touched.email && formik.errors.email
                    ? (<ErrorBadge errorMessage={formik.errors.email} />)
                    : formik.touched.email && !formik.errors.email
                      ? (<SuccesBadge />)
                      : (<WarningBadge />)}
                </Input>

                <Input
                  name='password'
                  autoComplete='off'
                  text='Password'
                  type='password'
                  placeholder='Ingresa tu contraseña'
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

                <input
                  type='submit'
                  value='Iniciar Sesion'
                  disabled={formik.errors.email || formik.errors.password || !formik.values.email || !formik.values.password}
                  className='w-full mt-4 cursor-pointer rounded-xl border border-primary bg-primary p-4 disabled:border-gray-600 disabled:bg-gray-500 text-white transition hover:bg-opacity-90'
                />

                <div className='mt-6 text-center'>
                  <p>
                    No tienes una cuenta?{' '}
                    <Link to='/auth/register' className='text-primary'>
                      Registrate
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-green-100 text-center hidden mi md:flex min-h-screen'>
          <div
            className='m-12 xl:m-16 w-full bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: 'url(\'https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg\')' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
