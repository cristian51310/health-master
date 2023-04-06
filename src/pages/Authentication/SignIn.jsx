import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Logo from '../../images/logo/logo.svg'
import LogoDark from '../../images/logo/logo-dark.svg'
import { Link } from 'react-router-dom'
import { AiOutlineKey, AiOutlineMail } from 'react-icons/ai';

const SignIn = () => {
  return (
    <DefaultLayout>
      <div className='rounded-sm border border-stroke bg-white shadow-default    '>
        <div className='flex flex-wrap items-center'>
          <div className='hidden w-full xl:block xl:w-1/2'>
            <div className='py-17.5 px-26 text-center'>
              <Link className='mb-5.5 inline-block' to='/'>
                <img className='hidden' src={Logo} alt='Logo' />
              </Link>

              <p className='2xl:px-20'>
                Lorem ipsum dolor sit amet
              </p>

              <span className='mt-15 inline-block'>
                Aqui va tu logo
              </span>
            </div>
          </div>

          <div className='w-full border-stroke   xl:w-1/2 xl:border-l-2'>
            <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
              <h2 className='mb-9 text-2xl font-bold text-black   sm:text-title-xl2'>
                Inicia Sesion
              </h2>

              <form>
                <div className='mb-4'>
                  <label className='mb-2.5 block font-medium text-black  '>
                    Email
                  </label>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none  '
                    />

                    <span className='absolute right-4 top-4'>
                      <AiOutlineMail/>
                    </span>
                  </div>
                </div>

                <div className='mb-6'>
                  <label className='mb-2.5 block font-medium text-black  '>
                    Re-type Password
                  </label>
                  <div className='relative'>
                    <input
                      type='password'
                      placeholder='6+ Characters, 1 Capital letter'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none  '
                    />

                    <span className='absolute right-4 top-4'>
                      <AiOutlineKey/>
                    </span>
                  </div>
                </div>

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
