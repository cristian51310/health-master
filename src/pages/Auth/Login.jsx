import React, { useState } from 'react'
import Logo from '../../images/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import Input from '../../components/Input'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../graphql/usuarios'

const Login = () => {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const [login, { error }] = useMutation(LOGIN)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await login({
      variables: {
        email: usuario.email,
        password: usuario.password
      }
    })

    if (!error) {
      console.log(data.login)
      window.localStorage.setItem('token', data.login)
      navigate('/')
    } else {
      console.log('Credenciales invalidas')
    }
  }

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
              <form onSubmit={handleSubmit}>
                <Input
                  name='email'
                  text='Email'
                  type='email'
                  autoComplete='off'
                  placeholder='Ingresa tu correo electronico'
                  onChange={handleChange}
                  icon={<AiOutlineMail />}
                />

                <Input
                  name='password'
                  autoComplete='off'
                  text='Password'
                  type='password'
                  placeholder='Ingresa tu contraseña'
                  onChange={handleChange}
                />

                <input
                  type='submit'
                  value='Iniciar Sesion'
                  className='w-full mt-4 cursor-pointer rounded-xl border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
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
