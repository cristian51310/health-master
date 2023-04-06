import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Input from '../../components/Input';

const FormLayout = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        <div className='flex flex-col gap-9'>
          {/* <!-- Sign in Form --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Sign In Form
              </h3>
            </div>
            <form action='#'>
              <div className='p-6.5'>
                <Input
                  text='Email'
                  type='email'
                  placeholder='Ingresa tu correo electronico'
                />

                <Input
                  text='Contraseña'
                  type='password'
                  placeholder='Ingresa tu contraseña'
                />

                <button className='mt-6 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray'>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </DefaultLayout>
  )
}

export default FormLayout;
