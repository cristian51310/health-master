import React from 'react'

const Input = ({ text, value, type, placeholder, name, icon, onChange, onBlur, limit, autoComplete, readonly, children }) => {
  return (
    <div className='mb-4.5'>
      <div className='flex items-center justify-between pl-2 py-1'>
        <label className='block text-black text-md  '>
          {text}
        </label>
        {children}
      </div>

      <div className='relative'>
        <input
          autoComplete={autoComplete}
          {...readonly}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={limit}
          className='w-full rounded-xl border-[2.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
        />
        <span className='absolute right-4 top-4'>
          {icon}
        </span>
      </div>
    </div>
  )
}

export default Input
