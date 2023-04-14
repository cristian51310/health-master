const Button = ({ disabled, text, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className='disabled:to-gray-700 disabled:from-body disabled:cursor-default mt-3 flex w-full justify-center rounded-full  bg-gradient-to-tr  from-meta-3 to-lime-600 hover:bg-teal-500 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer transition-all duration-300 '
    >
      <span className='text-lg'>{icon}</span>
      {text}
    </button>
  )
}

const ButtonDanger = ({ disabled, text, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-full bg-gradient-to-tr from-red-600 to-pink-700 hover:bg-red-700 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      <span className='text-lg'>{icon}</span>
      {text}
    </button>
  )
}

export { Button, ButtonDanger }
