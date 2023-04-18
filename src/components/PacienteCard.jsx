import React from 'react'
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai'
import { FormatDate } from '../js/formatDate'

const PacienteCard = ({ paciente, children }) => {
  return (
    <div className='w-full m-auto'>
      <img src={paciente.fotoPerfil ? paciente.fotoPerfil : 'https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg'} alt='' className='rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover' />
      <div className='bg-white shadow-2xl rounded-b-2xl pb-6'>
        <h2 className='text-center text-gray-800 text-2xl font-bold pt-6'>{paciente.nombre}</h2>
        <div className='w-5/6 m-auto mt-4 px-2'>
          <div className='flex items-center my-2'>
            <AiOutlineUser className='mr-3' />
            <p className='text-sm'>{paciente.nombre + ' ' + paciente.apellidoPaterno + ' ' + paciente.apellidoMaterno}</p>
          </div>
          <div className='flex items-center my-2'>
            <AiOutlineCalendar className='mr-3' />
            <p className='text-sm'>{FormatDate(paciente.fechaNacimiento)}</p>
          </div>
        </div>

        <div className='w-full m-auto mt-4 px-5'>
          {children}
        </div>

      </div>
    </div>
  )
}

export default PacienteCard
