import React from 'react'

const TextArea = ({ text, value, type, placeholder, name, defaultValue, onChange, limit, numRows }) => {
  return (
    <div className='mb-4.5'>
      <label className='mb-2.5 block text-black  '>
        {text}
      </label>
      <div className='relative'>
        <textarea
          rows={numRows}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          maxLength={limit}
          className='w-full rounded-xl border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary'
        />
      </div>
    </div>
  )
}

export default TextArea