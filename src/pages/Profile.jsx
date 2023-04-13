import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import CoverOne from '../images/cover/cover-01.png'
import userSix from '../images/user/user-06.png'
import jwtDecode from 'jwt-decode'
import { useQuery } from '@apollo/client'
import { GET_DOCTOR } from '../graphql/doctores'

const Profile = () => {
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
      <div className='overflow-hidden rounded-2xl border border-stroke bg-white shadow-default    '>
        <div className='relative z-20 h-35 md:h-65'>
          <img
            src={CoverOne}
            className='h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center'
          />
        </div>
        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
          <div className='relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3'>
            <div className='relative drop-shadow-2'>
              <img src={userSix} />
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='mb-1.5 text-2xl font-semibold text-black  '>
              {data.Doctor.nombre + ' ' + data.Doctor.apellidoPaterno + ' ' + data.Doctor.apellidoMaterno}
            </h3>
            <div className=' mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1  '>
              <div className='flex flex-col items-center justify-center gap-1 border-r border-stroke px-4   xsm:flex-row'>
                <span className='font-semibold text-black  '>
                  129K
                </span>
                <span className='text-sm'>Followers</span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row'>
                <span className='font-semibold text-black  '>
                  2K
                </span>
                <span className='text-sm'>Following</span>
              </div>
            </div>

            <div className='mx-auto max-w-180'>
              <h4 className='font-semibold text-black  '>
                About Me
              </h4>
              <p className='mt-4.5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna
              </p>
            </div>

          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Profile
