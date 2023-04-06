import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import UserOne from '../images/user/user-01.png'
import { AiOutlineDoubleLeft, AiOutlineUser } from 'react-icons/ai'

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='relative'>
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='flex items-center gap-4'
      >
        <span className='hidden text-right lg:block'>
          <span className='block text-sm font-medium text-black  '>
            Thomas Anree
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
              <AiOutlineUser/>
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to='/auth/signin'
              className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
            >
              <AiOutlineDoubleLeft/>
              Cerrar Sesion
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
