const Button = ({ disabled, text, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-xl bg-gradient-to-tr  from-meta-3 to-lime-600 hover:bg-teal-500 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      <span className="text-lg">{icon}</span>
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
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-xl bg-gradient-to-tr to-yellow-500 from-orange-500 hover:bg-yellow-600 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      <span className="text-lg">{icon}</span>
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
      className='disabled:bg-gray-700 disabled:cursor-default mt-3 transition duration-300 flex w-full justify-center rounded-xl bg-gradient-to-tr from-red-600 to-pink-700 hover:bg-red-700 p-3 py-4 font-medium text-gray-100 items-center gap-2 cursor-pointer '
    >
      <span className="text-lg">{icon}</span>
      {text}
    </button>
  )
}

export { Button, ButtonWarning, ButtonDanger }
