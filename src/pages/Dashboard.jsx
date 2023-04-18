import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import UserOne from '../images/user/user-06.png'
import jwtDecode from 'jwt-decode'
import { useQuery } from '@apollo/client'
import { GET_DOCTOR } from '../graphql/doctores'

const Dashboard = () => {
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
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
        <div className='rounded-xl col-span-3 row-span-2 bg-gradient-to-tr from-teal-500 to-blue-400 w-full shadow-xl shadow-black/10'>
          <div className='col-span-2 flex gap-14 p-10 justify-center items-center h-full'>
            <p className='text-5xl text-white font-semibold font-satoshi '><span className=' font-normal'>Hola </span>{data.Doctor.nombre}</p>
            <img width={200} src={UserOne} alt='' />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Dashboard
