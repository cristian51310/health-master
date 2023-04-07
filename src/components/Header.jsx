import React from 'react'

import LogoIcon from '../images/logo/logo.png'
import DropdownUser from './DropdownUser'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = (
  props
) => {
  return (
    <header className='sticky top-0 z-999 flex w-full bg-white drop-shadow-2'>
      <div className='flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11'>
        <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
          <button
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className='rounded-sm border border-stroke bg-white p-1.5 shadow-sm  lg:hidden'
          >
            <AiOutlineMenu />
          </button>

          <img className='w-8 h-8' src={LogoIcon} alt='Logo' />
        </div>

        <div className='hidden sm:block' />

        <div className='flex items-center gap-3 2xsm:gap-7'>
          <DropdownUser />
        </div>
      </div>
    </header>
  )
}

export default Header
