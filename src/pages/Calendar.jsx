import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'

const HeadCell = ({ day, shortDay }) => {
  return (
    <th className='flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5'>
      <span className='hidden lg:block'> {day} </span>
      <span className='block lg:hidden'> {shortDay} </span>
    </th>
  )
}

const Cell = ({ number }) => {
  return (
    <td className='ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray-300     md:h-25 md:p-6 xl:h-31'>
      <span className='font-medium text-black  '>
        {number}
      </span>
    </td>
  )
}

const Calendar = () => {
  return (
    <DefaultLayout>
      <div className='w-full max-w-full rounded-xl border border-stroke bg-white shadow-default    '>
        <table className='w-full'>
          <thead>
            <tr className='grid grid-cols-7 rounded-t-xl bg-primary text-white'>
              <HeadCell day='Domingo' shortDay='Dom' />
              <HeadCell day='Lunes' shortDay='Lun' />
              <HeadCell day='Martes' shortDay='Mar' />
              <HeadCell day='Miercoles' shortDay='Mie' />
              <HeadCell day='Jueves' shortDay='Jue' />
              <HeadCell day='Viernes' shortDay='Vie' />
              <HeadCell day='Sabado' shortDay='Sab' />
            </tr>
          </thead>
          <tbody>
            <tr className='grid grid-cols-7'>
              <Cell number={1} />
              <Cell number={2} />
              <Cell number={3} />
              <Cell number={4} />
              <Cell number={5} />
              <Cell number={6} />
              <Cell number={7} />
            </tr>
            <tr className='grid grid-cols-7'>
              <Cell number={8} />
              <Cell number={9} />
              <Cell number={10} />
              <Cell number={11} />
              <Cell number={12} />
              <Cell number={13} />
              <Cell number={14} />
            </tr>
            <tr className='grid grid-cols-7'>
              <Cell number={15} />
              <Cell number={16} />
              <Cell number={17} />
              <Cell number={18} />
              <Cell number={19} />
              <Cell number={20} />
              <Cell number={21} />
            </tr>
            <tr className='grid grid-cols-7'>
              <Cell number={22} />
              <Cell number={23} />
              <Cell number={24} />
              <Cell number={25} />
              <Cell number={26} />
              <Cell number={27} />
              <Cell number={28} />
            </tr>
            <tr className='grid grid-cols-7'>
              <Cell number={29} />
              <Cell number={30} />
              <Cell number={31} />
              <Cell number={1} />
              <Cell number={2} />
              <Cell number={3} />
              <Cell number={4} />
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  )
}

export default Calendar
