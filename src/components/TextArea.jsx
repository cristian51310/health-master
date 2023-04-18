import React from 'react'

const TextArea = ({ text, value, type, placeholder, name, defaultValue, onChange, onBlur, limit, numRows, children }) => {
  return (
    <div className='mb-4.5'>
      <div className='flex items-center justify-between pl-2 py-1'>
        <label className='block text-black text-md  '>
          {text}
        </label>
        {children}
      </div>
      <div className='relative'>
        <textarea
          rows={numRows}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={limit}
          className='w-full rounded-xl border-[2.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
        />
      </div>
    </div>
  )
}

export default TextArea
