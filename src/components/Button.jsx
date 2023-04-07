const Button = ({ disabled, text, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-xl bg-meta-3 hover:bg-teal-500 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      {icon}
      {text}
    </button>
  )
}

const ButtonWarning = ({ disabled, text, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-xl bg-yellow-500 hover:bg-yellow-600 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      {icon}
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
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-xl bg-red-600 hover:bg-red-700 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      {icon}
      {text}
    </button>
  )
}

export { Button, ButtonWarning, ButtonDanger }
