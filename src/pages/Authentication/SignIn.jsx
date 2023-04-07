import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Logo from '../../images/logo/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineKey, AiOutlineMail } from 'react-icons/ai';
import Input from '../../components/Input';

const SignIn = () => {
  return (
    <DefaultLayout>
      <div className='rounded-sm border border-stroke bg-white shadow-default    '>
        <div className='flex flex-wrap items-center'>
          <div className='hidden w-full xl:block xl:w-1/2'>
            <div className='py-17.5 px-26 text-center'>
              <span className='inline-block'>
                <img src={Logo} alt="" />
              </span>
            </div>
          </div>

          <div className='w-full border-stroke xl:w-1/2 xl:border-l-2'>
            <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
              <h2 className='mb-9 text-2xl font-bold text-black   sm:text-title-xl2'>
                Inicia Sesion
              </h2>

              <form>
               <Input
                text='Email'
                type='email'
                placeholder='Ingresa tu correo electronico'
                icon={<AiOutlineMail/>}
               />

              <Input
                text='Password'
                type='password'
                placeholder='Ingresa tu correo contraseña'
                icon={<AiOutlineKey/>}
               />

                <div className='mb-5'>
                  <input
                    type='submit'
                    value='Sign In'
                    className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
                  />
                </div>

                <div className='mt-6 text-center'>
                  <p>
                    No tienes una cuenta?{' '}
                    <Link to='/auth/signup' className='text-primary'>
                      Registrate
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SignIn;
