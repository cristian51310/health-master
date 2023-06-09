import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserOne from '../images/user/user-06.png'
import { AiOutlineDoubleLeft, AiOutlineUser } from 'react-icons/ai'
import jwtDecode from 'jwt-decode'
import { useQuery } from '@apollo/client'
import { GET_DOCTOR } from '../graphql/doctores'

const DropdownUser = () => {
  const navigate = useNavigate()

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  const handleSubmit = () => {
    window.localStorage.removeItem('token')
    navigate('/auth/login')
  }

  // obtener datos del doctor
  const token = window.localStorage.getItem('token')
  const decodedToken = jwtDecode(token)
  const { loading, error, data } = useQuery(GET_DOCTOR, {
    variables: {
      id: decodedToken.user.doctorId
    }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className='relative'>
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='flex items-center gap-4'
      >
        <span className='hidden text-right lg:block'>
          <span className='block text-sm font-medium text-black  '>
            {data.Doctor.nombre + ' ' + data.Doctor.apellidoPaterno + ' ' + data.Doctor.apellidoMaterno}
          </span>
        </span>

        <span className='h-12 w-12 rounded-full'>
          <img src={UserOne} alt='User' />
        </span>

      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default     ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex flex-col gap-5 border-b border-stroke px-6 py-7.5  '>
          <li>
            <Link
              to='/profile'
              className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
            >
              <AiOutlineUser />
              Mi Perfil
            </Link>
          </li>
          <li>
            <form onSubmit={handleSubmit}>
              <button type='submit' className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'>
                <AiOutlineDoubleLeft />
                Cerrar Sesion
              </button>
            </form>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
