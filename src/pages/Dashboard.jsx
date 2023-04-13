import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import CardOne from '../components/CardOne'
import UserOne from '../images/user/user-06.png'

const Dashboard = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
        <div className='rounded-xl col-span-2 row-span-2 bg-gradient-to-tr from-teal-500 to-blue-400 w-full shadow-xl shadow-black/10'>
          <div className='col-span-2 flex gap-14 p-10 justify-center items-center h-full'>
            <p className='text-5xl text-white font-semibold font-satoshi '><span className=' font-normal'>Hola</span>Patricia</p>
            <img width={200} src={UserOne} alt='' />
          </div>
        </div>
        <CardOne />
        <CardOne />
        <CardOne />
      </div>
    </DefaultLayout>
  )
}

export default Dashboard
