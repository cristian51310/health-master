import React from 'react';

const PacienteCard = ({paciente}) => {

  return (
    <div className="w-80 m-auto">
      <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
      <div className="bg-white shadow-2xl rounded-b-2xl pb-6">
        <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">{paciente.nombre}</h2>
        <div className="w-5/6 m-auto">
          <p className="text-center text-gray-500 pt-5">You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!</p>
        </div>
        <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-4 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
          <button className="lg:text-sm text-lg font-bold">Ver detalles</button>
        </div>
      </div>
    </div>
  )
}

export default PacienteCard
