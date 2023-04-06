import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

import UserOne from '../images/user/user-01.png'
import UserTwo from '../images/user/user-02.png'
import { AiOutlineMessage } from 'react-icons/ai';

const DropdownMessage = () => {
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
    <li className='relative' x-data='{ dropdownOpen: false, notifying: true }'>
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary      '
        to='#'
      >
        <span className='absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1'>
          <span className='absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75'></span>
        </span>

        <AiOutlineMessage/>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default     sm:right-0 sm:w-80 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className='px-4.5 py-3'>
          <h5 className='text-sm font-medium text-bodydark2'>Messages</h5>
        </div>

        <ul className='flex h-auto flex-col overflow-y-auto'>
          <li>
            <Link
              className='flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2    '
              to='/messages'
            >
              <div className='h-12.5 w-12.5 rounded-full'>
                <img src={UserTwo} alt='User' />
              </div>

              <div>
                <h6 className='text-sm font-medium text-black  '>
                  Mariya Desoja
                </h6>
                <p className='text-sm'>I like your confidence 💪</p>
                <p className='text-xs'>2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className='flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2    '
              to='/messages'
            >
              <div className='h-12.5 w-12.5 rounded-full'>
                <img src={UserOne} alt='User' />
              </div>

              <div>
                <h6 className='text-sm font-medium text-black  '>
                  Robert Jhon
                </h6>
                <p className='text-sm'>Can you share your offer?</p>
                <p className='text-xs'>10min ago</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  )
}

export default DropdownMessage;
