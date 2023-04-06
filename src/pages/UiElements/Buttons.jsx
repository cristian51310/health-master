import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const Buttons = () => {
  return (
    <DefaultLayout>

      {/* <!-- Normal Button Items --> */}
      <div className='mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='p-4 md:p-6 xl:p-9'>
          <div className='flex flex-wrap gap-5 xl:gap-20'>
            <Link
              to='#'
              className='inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              Button
            </Link>

            <Link
              to='#'
              className='inline-flex items-center justify-center rounded-full bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              Button
            </Link>

            <Link
              to='#'
              className='inline-flex items-center justify-center gap-2.5 rounded-md bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              <span>
                <AiOutlineHeart/>
              </span>
              Button With Icon
            </Link>

            <Link
              to='#'
              className='inline-flex items-center justify-center gap-2.5 rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              <span>
                <AiOutlineHeart/>
              </span>
              Button With Icon
            </Link>
          </div>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default Buttons;
