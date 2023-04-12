import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo/logo.png'
import { AiOutlineApple, AiOutlineCalendar, AiOutlineClose, AiOutlineContainer, AiOutlineHome, AiOutlineTable, AiOutlineUser } from 'react-icons/ai'

const SidebarLink = ({ to, icon, text }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          'relative py-4 flex items-center gap-2.5 rounded-md px-4 font-medium text-white duration-300 ease-in-out hover:bg-meta-3 ' +
          (isActive && 'bg-meta-5')}
      >
        {icon}
        {text}
      </NavLink>
    </li>
  )
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null)
  const sidebar = useRef(null)

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between lg:justify-center gap-2 px-6 py-5.5 lg:py-6.5'>
        <img src={Logo} className='w-40 h-40' />
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className='block lg:hidden'
        >
          <AiOutlineClose />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        <nav className=' py-4 px-4 lg:px-6'>
          <div>
            <ul className='mb-6 flex flex-col gap-3'>

              <SidebarLink
                to='/dashboard'
                icon={<AiOutlineHome />}
                text='Dashboard'
              />

              <SidebarLink
                to='/calendar'
                icon={<AiOutlineCalendar />}
                text='Calendario'
              />

              <SidebarLink
                to='/create/paciente'
                icon={<AiOutlineApple />}
                text='Crear Pacientes'
              />

              <SidebarLink
                to='/create/receta'
                icon={<AiOutlineContainer />}
                text='Crear Receta'
              />

              <SidebarLink
                to='/pacientes'
                icon={<AiOutlineTable />}
                text='Pacientes'
              />

              <SidebarLink
                to='/profile'
                icon={<AiOutlineUser />}
                text='Perfil'
              />

            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
