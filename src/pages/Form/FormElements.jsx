import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import SwitcherThree from '../../components/SwitcherThree'
import CheckboxTwo from '../../components/CheckboxTwo'

const FormElements = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        <div className='flex flex-col gap-9'>

          {/* <!-- Toggle switch input --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Toggle switch input
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>

              <SwitcherThree />

            </div>
          </div>

          {/* <!-- File upload --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                File upload
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black  '>
                  Attach file
                </label>
                <input
                  type='file'
                  className='w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter'
                />
              </div>

            </div>
          </div>
        </div>

        <div className='flex flex-col gap-9'>
          {/* <!-- Textarea Fields --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Textarea Fields
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black  '>
                  Default textarea
                </label>
                <textarea
                  rows='6'
                  placeholder='Default textarea'
                  className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  '
                />
              </div>

            </div>
          </div>

          {/* <!-- Checkbox and radio --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Checkbox and radio
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <CheckboxTwo />
            </div>
          </div>

        </div>
      </div>
    </DefaultLayout>
  )
}

export default FormElements
