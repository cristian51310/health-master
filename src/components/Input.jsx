import React from 'react';

const Input = ({text, type, placeholder, name, icon, defaultValue, onChange}) => {
  return (
    <div className='mb-4.5'>
      <label className='mb-2.5 block text-black  '>
        {text}
      </label>
      <div className='relative'>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          className='w-full rounded-xl border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
        />
        <span className='absolute right-4 top-4'>
          {icon}
        </span>
      </div>
    </div>
  )
}

export default Input;
