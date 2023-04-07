import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const CardOne = () => {
  return (
    <div className='rounded-2xl border border-stroke bg-white py-6 px-7.5 shadow-default'>
      <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2'>
        <AiOutlineEye/>
      </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h4 className='text-title-md font-bold text-black'>
            $3.456K
          </h4>
        </div>
      </div>
    </div>
  )
}

export default CardOne;
