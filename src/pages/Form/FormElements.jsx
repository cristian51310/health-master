import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import SwitcherThree from '../../components/SwitcherThree'
import CheckboxTwo from '../../components/CheckboxTwo'

const FormElements = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        <div className='flex flex-col gap-9'>
          {/* <!-- Input Fields --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Input Fields
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black  '>
                  Default Input
                </label>
                <input
                  type='text'
                  placeholder='Default Input'
                  className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter '
                />
              </div>
            </div>
          </div>

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

          {/* <!-- Time and date --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Time and date
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black  '>
                  Date picker
                </label>
                <div className='relative'>
                  <input
                    type='date'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary  '
                  />

                  <span className='absolute right-0.5 top-0.5 block rounded-tr rounded-br bg-white p-3.5 '>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z'
                        fill='#64748B'
                      />
                    </svg>
                  </span>
                </div>
              </div>

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

          {/* <!-- Select input --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default    '>
            <div className='border-b border-stroke py-4 px-6.5  '>
              <h3 className='font-medium text-black  '>
                Select input
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black  '>
                  Select Country
                </label>
                <div className='relative z-20 bg-white '>
                  <span className='absolute top-1/2 left-4 z-30 -translate-y-1/2'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g opacity='0.8'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z'
                          fill='#637381'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z'
                          fill='#637381'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z'
                          fill='#637381'
                        />
                      </g>
                    </svg>
                  </span>
                  <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary '>
                    <option value=''>USA</option>
                    <option value=''>UK</option>
                    <option value=''>Canada</option>
                  </select>
                  <span className='absolute top-1/2 right-4 z-10 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g opacity='0.8'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                          fill='#637381'
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FormElements
