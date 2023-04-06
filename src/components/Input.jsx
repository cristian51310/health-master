import React from 'react';

const Input = ({text, type, placeholder}) => {
  return (
    <div className='mb-4.5'>
      <label className='mb-2.5 block text-black  '>
        {text}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
      />
    </div>
  )
}

export default Input;
