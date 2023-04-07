import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import userThree from '../images/user/user-01.png';
import { AiOutlineUser, AiOutlineMail, AiOutlineForm, AiOutlineCloudUpload } from "react-icons/ai";

const Settings = () => {
  return (
    <DefaultLayout>
      <div className='mx-auto max-w-270'>
        <div className='grid grid-cols-5 gap-8'>
          <div className='col-span-5 xl:col-span-3'>
            <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
              <div className='border-b border-stroke py-4 px-7  '>
                <h3 className='font-medium text-black  '>
                  Personal Information
                </h3>
              </div>
              <div className='p-7'>
                <form action='#'>
                  <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                    <div className='w-full sm:w-full'>
                      <label
                        className='mb-3 block text-sm font-medium text-black  '
                        htmlFor='fullName'
                      >
                        Full Name
                      </label>
                      <div className='relative'>
                        <span className='absolute left-4.5 top-4'>
                          <AiOutlineUser/>
                        </span>
                        <input
                          className='w-full rounded border border-stroke bg-gray-100py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none       '
                          type='text'
                          name='fullName'
                          id='fullName'
                          placeholder='Devid Jhon'
                          defaultValue='Devid Jhon'
                        />
                      </div>
                    </div>

                  </div>

                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black  '
                      htmlFor='emailAddress'
                    >
                      Email Address
                    </label>
                    <div className='relative'>
                      <span className='absolute left-4.5 top-4'>
                        <AiOutlineMail/>
                      </span>
                      <input
                        className='w-full rounded border border-stroke bg-gray-100py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none       '
                        type='email'
                        name='emailAddress'
                        id='emailAddress'
                        placeholder='devidjond45@gmail.com'
                        defaultValue='devidjond45@gmail.com'
                      />
                    </div>
                  </div>

                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black  '
                      htmlFor='Username'
                    >
                      Username
                    </label>
                    <input
                      className='w-full rounded border border-stroke bg-gray-100py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none       '
                      type='text'
                      name='Username'
                      id='Username'
                      placeholder='devidjhon24'
                      defaultValue='devidjhon24'
                    />
                  </div>

                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black  '
                      htmlFor='Username'
                    >
                      BIO
                    </label>
                    <div className='relative'>
                      <span className='absolute left-4.5 top-4'>
                        <AiOutlineForm />
                      </span>

                      <textarea
                        className='w-full rounded border border-stroke bg-gray-100py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none       '
                        name='bio'
                        id='bio'
                        rows='6'
                        placeholder='Write your bio here'
                        defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.'
                      ></textarea>
                    </div>
                  </div>

                  <div className='flex justify-end gap-4.5'>
                    <button
                      className='flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1    '
                      type='submit'
                    >
                      Cancel
                    </button>
                    <button
                      className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray-100 hover:shadow-1'
                      type='submit'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-span-5 xl:col-span-2'>
            <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
              <div className='border-b border-stroke py-4 px-7  '>
                <h3 className='font-medium text-black  '>
                  Your Photo
                </h3>
              </div>
              <div className='p-7'>
                <form action='#'>
                  <div className='mb-4 flex items-center gap-3'>
                    <div className='h-14 w-14 rounded-full'>
                      <img src={userThree} alt='User' />
                    </div>
                    <div>
                      <span className='mb-1.5 text-black  '>
                        Edita tu foto
                      </span>
                      <span className='flex gap-2.5'>
                        <button className='text-sm hover:text-primary'>
                          Sube una nueva foto de perfil
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id='FileUpload'
                    className='relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray-100py-4 px-4   sm:py-7.5'
                  >
                    <input
                      type='file'
                      accept='image/*'
                      className='absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none'
                    />
                    <div className='flex flex-col items-center justify-center space-y-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white    '>
                        <AiOutlineCloudUpload/>
                      </span>
                      <p>
                        <span className='text-primary'>Click to upload</span> or
                        drag and drop
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-end gap-4.5'>
                    <button
                      className='flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1    '
                      type='submit'
                    >
                      Cancel
                    </button>
                    <button
                      className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray-100 hover:bg-opacity-70'
                      type='submit'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Settings;
