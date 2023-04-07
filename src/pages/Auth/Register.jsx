import React from 'react';
import Logo from '../../images/logo/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineKey, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import Input from '../../components/Input';

const SignIn = () => {
  return (

    <body className="min-h-screen text-gray-900 flex justify-center">
      <div className=" bg-white flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 w-full p-6 sm:p-10">

          <div className="mt-8 flex flex-col items-center">
            <div className='flex h-full justify-center items-center gap-8'>
              <img src={Logo} className="w-20 mx-auto" />
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Registrate
              </h1>
            </div>

            <div className="w-full flex-1 mt-8 px-4">
              <form>
                <Input
                  text='Nombre'
                  type='text'
                  placeholder='Ingresa tu nombre'
                  icon={<AiOutlineUser/>}
                />

                <Input
                  text='Email'
                  type='email'
                  placeholder='Ingresa tu Email'
                  icon={<AiOutlineMail/>}
                />

                <Input
                  text='Contraseña'
                  type='password'
                  placeholder='Ingresa tu Contraseña'
                  icon={<AiOutlineMail/>}
                />

                <input
                  type='submit'
                  value='Sign In'
                  className='w-full mt-4 cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
                />

                <div className='mt-6 text-center'>
                  <p>
                    Ya tienes una cuenta?{' '}
                    <Link to='/auth/login' className='text-primary'>
                      Inicia Sesion
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')` }}
          ></div>
        </div>
      </div>
    </body>
  )
}

export default SignIn;
