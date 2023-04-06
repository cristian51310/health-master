import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const Alerts = () => {
  return (
    <DefaultLayout>

      <div className='rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9'>
        <div className='flex flex-col gap-7.5'>

          {/* <!-- Alerts Item --> */}
          <div className='flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] dark:bg-[#1B1B24] px-7 py-5 shadow-md dark:bg-opacity-30 md:p-6'>
            <div className='mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]'>
              <AiOutlineCheckCircle className='text-white w-5 h-5'/>
            </div>
            <div className='w-full'>
              <h5 className='mb-3 text-lg font-semibold text-black dark:text-[#34D399] '>
                Message Sent Successfully
              </h5>
            </div>
          </div>

          {/* <!-- Alerts Item --> */}
          <div className='flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] dark:bg-[#1B1B24] px-7 py-5 shadow-md dark:bg-opacity-30 md:p-6'>
            <div className='mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]'>
              <AiOutlineCloseCircle className='text-white w-5 h-5'/>
            </div>
            <div className='w-full'>
              <h5 className='mb-3 font-semibold text-[#B45454]'>
                There were 1 errors with your submission
              </h5>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Alerts;
