import React from 'react';

const InputIcon = ({text, type, placeholder, icon}) => {
  return (
    <div className='mb-4'>
    <label className='mb-2.5 block font-medium text-black  '>
      {text}
    </label>
    <div className='relative'>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none  '
      />
      <span className='absolute right-4 top-4'>
        {icon}
      </span>
    </div>
  </div>
  )
}

export default InputIcon;
